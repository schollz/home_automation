import subprocess as s
import time
from websocket import create_connection
import thread
import os
import socket
from sys import exit , stdout , stdin
import serial
import datetime

numLights = 5;
numMotionSensors = 6;
lightState = [0]*numLights
motionState = [0]*numMotionSensors
motionTime = [time.time()]*numMotionSensors
motionSensorPositionsX = [0.45,0.54,0.21,0.28,0.655,0.435];
motionSensorPositionsY = [0.55,0.49,0.17,0.5,0.74,0.12];
lightTimes = [time.time()]*numLights
lightRFCodes = ['a1','b1','d1','c1','g1']
place = "command center"
temperature = 0


status = 0
 
def getNetcatMessages():
	global s
	global motionState, motionTime, lightTimes, lightState, temperature, place, ws
	run = 0
	while status == 0 :
		if run == 0 :
			socket.setdefaulttimeout(5)
			run += 1
		msg = s.recv(1024)
		if msg != "" :
			print msg.rstrip()
			if "On" in msg:
				if "E5" in msg:
					motionState[0]=1
					motionTime[0]=time.time()
				else:
					motionState[0]=0
				if "G5" in msg:
					motionState[1]=1
					motionTime[1]=time.time()
				else:
					motionState[1]=0
				if "B5" in msg:
					motionState[2]=1
					motionTime[2]=time.time()
				else:
					motionState[2]=0
			if "MS10" in msg:
				motionState[3]=1
				motionTime[3]=time.time()
			else:
				motionState[3]=0
			sendState()
			
			

def getMessages():
	global motionState, motionTime, lightTimes, lightState, temperature, place, ws
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
						lightTimes[i] = time.time()
					else:
						os.system("echo 'rf " + lightRFCodes[lightID] + " off' | nc localhost 1099")
						lightState[lightID]=0

			# get place
			place = res[3]
			sendState()
			
					
		
def sendState():
	global place, ws
	global motionState, motionTime, lightTimes, lightState, temperature

	msg = "web|"
	for motion in motionState:
		msg += str(motion) + ":"
	msg += "|"
	for light in lightState:
		msg += str(light) + ":"
	msg += "|"
	msg += place
	msg += "|"
	msg += str(temperature)
	
	ws.send(msg)
	
	for i in range(0,numMotionSensors):
		if motionState[i]==1:
			stringToWrite =  str(int(unix_time_millis(datetime.datetime.now()))) + "\t" + str(motionSensorPositionsX[i]) + "\t" + str(motionSensorPositionsY[i]) + "\n"
			with open("motion_sensors.log","a") as myfile:
				myfile.write(stringToWrite)

def ReadGpio(pin) :
    process = s.Popen(["/usr/local/bin/gpio", "-g", "read", pin], stdout = s.PIPE)
    data, _ = process.communicate()
    data = str.replace(data, "\r", "")
    data = str.replace(data, "\n", "")
    return "1" in data

def unix_time(dt):
    epoch = datetime.datetime.utcfromtimestamp(0)
    delta = dt - epoch
    return delta.total_seconds()

def unix_time_millis(dt):
    return unix_time(dt) * 1000.0

def arduinoSerial():
	global motionState, motionTime, lightTimes, lightState, temperature
	ser = serial.Serial('/dev/ttyUSB0',9600)
	end = time.time()
	while 1:
		input = ser.readline()
		res = input.split("|")
		if "1" in res[0]:
			motionState[4] = 1
			motionTime[4] = time.time()
			if (lightState[0]==0):
				os.system("echo 'rf " + lightRFCodes[0] + " on' | nc localhost 1099")
				lightState[0]=1
				lightTimes[0] = time.time()
			if (lightState[3]==0):
				os.system("echo 'rf " + lightRFCodes[3] + " on' | nc localhost 1099")
				lightState[3]=1
				lightTimes[3] = time.time()
		else:
			motionState[4] = 0
		if "0:0:0:1" in res[1]:
			motionState[5] = 1
			motionTime[5] = time.time()
			os.system("echo 'rf " + lightRFCodes[1] + " on' | nc localhost 1099")
			lightState[1]=1
			lightTimes[1] = time.time()
		else:
			motionState[5] = 0
		temperature = res[2]
		sendState()
	
	
motionState[0] = 0

# check serial ports
#os.system("ls /dev/tty* > devtty")

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
thread.start_new_thread(arduinoSerial,())
while 1:
	time.sleep(1)
	curTime = time.time()
	for i in range(0,numMotionSensors):
		if (curTime-motionTime[i]>5):
			if motionState[i]==1:
				motionState[i]=0
				sendState()
	if (curTime-motionTime[5]>300): # piano sensor
		if (lightState[1]==1):
			os.system("echo 'rf " + lightRFCodes[1] + " off' | nc localhost 1099")
			lightState[1]=0
			sendState()
	if (curTime-motionTime[4]>300): # desk sensor
		if (lightState[0]==1):
			os.system("echo 'rf " + lightRFCodes[0] + " off' | nc localhost 1099")
			lightState[0]=0
			sendState()
		if (lightState[3]==1):
			os.system("echo 'rf " + lightRFCodes[3] + " off' | nc localhost 1099")
			lightState[3]=0
			sendState()
	if (curTime-motionTime[0]>600 and curTime-motionTime[1]>600 and curTime-motionTime[2]>600 and curTime-motionTime[3]>600 and curTime-motionTime[4]>600):
		for i in range(0,numLights):
			os.system("echo 'rf " + lightRFCodes[i] + " off' | nc localhost 1099")
			lightState[i] = 0
		for i in range(0,numMotionSensors):
			motionTime[i] = time.time()
ws.close()
