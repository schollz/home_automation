import subprocess as s
import time
from websocket import create_connection
import thread
import os
import socket
from sys import exit , stdout , stdin

numLights = 4;
numMotionSensors = 4;
lightState = [0]*numLights
motionState = [0]*numMotionSensors
lightRFCodes = ['a1','b1','d1','c1']
place = "command center"


status = 0
 
def getNetcatMessages():
	global s
	global lightState, motionState, place, ws
	run = 0
	while status == 0 :
		if run == 0 :
			socket.setdefaulttimeout(5)
			run += 1
		msg = s.recv(1024)
		if msg != "" :
			print msg.rstrip()
			motionState = [0]*numMotionSensors
			if "On" in msg:
				if "E5" in msg:
					motionState[0]=1
				if "G5" in msg:
					motionState[1]=1
				if "B5" in msg:
					motionState[2]=1
			if "MS10" in msg:
				motionState[3]=1
			sendState()
			
			

def getMessages():
	global lightState, motionState, place, ws
	while 1:
		result = ws.recv()
		print result
		res = result.split("|")
		if "state" in result:
			sendState()
		if "com" in res[0]:

			# get motion click
			sensors = res[1].split(":")
			for i in range(0,numMotionSensors):
				if "1" in sensors[i]: #switch the light if 1
					motionState[i] = 1
				else:
					motionState[i] = 0
			
			# get light click
			sensors = res[2].split(":")
			for i in range(0,numLights):
				lightID=i
				if "1" in sensors[i]: #switch the light if 1
					if lightState[lightID] == 0:
						os.system("echo 'rf " + lightRFCodes[lightID] + " on' | nc localhost 1099")
						lightState[lightID]=1
					else:
						os.system("echo 'rf " + lightRFCodes[lightID] + " off' | nc localhost 1099")
						lightState[lightID]=0

			# get place
			place = res[3]
			sendState()
			
					
		
def sendState():
	global lightState, motionState, place, ws
	
	msg = "web|"
	for motion in motionState:
		msg += str(motion) + ":"
	msg += "|"
	for light in lightState:
		msg += str(light) + ":"
	msg += "|"
	msg += place
	ws.send(msg)

def ReadGpio(pin) :
    process = s.Popen(["/usr/local/bin/gpio", "-g", "read", pin], stdout = s.PIPE)
    data, _ = process.communicate()
    data = str.replace(data, "\r", "")
    data = str.replace(data, "\n", "")
    return "1" in data

	
	
motionState[0] = 0

# setup netcat
try:
	nchost = 'localhost'
	ncport = 1099
	nchost = socket.gethostbyname(nchost)
except socket.gaierror or socket.herror:
	pass

# connect to netcat
try:
	s = socket.socket(socket.AF_INET , socket.SOCK_STREAM)
	print "Connecting to netcat..."
	s.connect((nchost,ncport))
	print "Connected to " + nchost + " for netcat."
	try:
		thread.start_new_thread(getNetcatMessages,())
	except Exception , e:
		print str(e)
		status = 1
		exit()  
except Exception , e:
	print str(e)
	status = 1
	exit()

# setup server connections
ws = create_connection("ws://66.57.76.177:9002/ws")
thread.start_new_thread(getMessages,())
while 1:
	time.sleep(0.05)
ws.close()
