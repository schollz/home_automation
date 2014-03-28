import subprocess as s
import time
from websocket import create_connection
import thread
import os

numLights = 4;
numMotionSensors = 1;
lightState = [0]*numLights
motionState = [0]*numMotionSensors
lightRFCodes = ['a1','b1','d1','c1']
place = "command center"
def getMessages():
	global lightState, motionState, place, ws
	while 1:
		result = ws.recv()
		print result
		res = result.split("|")
		if "state" in result:
			sendState()
		if "com" in res[0]:
			sensors = res[1].split(":")
			
			# get light click
			for i in range(numMotionSensors,numLights+numMotionSensors):
				lightID=i-numMotionSensors
				if "1" in sensors[i]: #switch the light if 1
					if lightState[lightID] == 0:
						os.system("echo 'rf " + lightRFCodes[lightID] + " on' | nc localhost 1099")
						lightState[lightID]=1
					else:
						os.system("echo 'rf " + lightRFCodes[lightID] + " off' | nc localhost 1099")
						lightState[lightID]=0
					
			# get place
			if "," in sensors[numMotionSensors+numLights]:
				place = sensors[numMotionSensors+numLights]
			else:
				place = "unknown"
			sendState()
			
					
		
def sendState():
	global lightState, motionState, place, ws
	
	msg = "web|"
	for motion in motionState:
		msg += str(motion) + ":"
	for light in lightState:
		msg += str(light) + ":"
	msg += place
	ws.send(msg)

def ReadGpio(pin) :
    process = s.Popen(["/usr/local/bin/gpio", "-g", "read", pin], stdout = s.PIPE)
    data, _ = process.communicate()
    data = str.replace(data, "\r", "")
    data = str.replace(data, "\n", "")
    return "1" in data

motionState[0] = 0
ws = create_connection("ws://66.57.76.177:9002/ws")
thread.start_new_thread(getMessages,())
while 1:
	pinActive = ReadGpio("22")
	if pinActive and not motionState[0]:
		if lightState[0] == 0:
			os.system("echo 'rf " + lightRFCodes[0] + " on' | nc localhost 1099")
			lightState[0]=1
		if lightState[3] == 0:
			os.system("echo 'rf " + lightRFCodes[3] + " on' | nc localhost 1099")
			lightState[3]=1
		print "motion active"
		motionState[0] = 1
		sendState()
	if not pinActive and motionState[0]:
		print "motion stopped"
		motionState[0] = 0
		sendState()
	time.sleep(0.05)
ws.close()
