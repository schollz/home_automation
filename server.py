import tornado.httpserver
import tornado.websocket
import tornado.ioloop
import tornado.web
import time 
import socket
import sys

def get_lock(process_name):
    global lock_socket
    lock_socket = socket.socket(socket.AF_UNIX, socket.SOCK_DGRAM)
    try:
        lock_socket.bind('\0' + process_name)
        print 'I got the lock'
    except socket.error:
        print 'lock exists'
        sys.exit()
		
class WSHandler(tornado.websocket.WebSocketHandler):
	clients = []
	def open(self):
		self.clients.append(self)
		print 'New connection was opened'
		with open("ips","a") as myfile:
			myfile.write(time.ctime())
			myfile.write(":")
			myfile.write(str(self.request.remote_ip))
			myfile.write("\n")
		self.write_message("Con!")

	def on_message(self, message):
		print 'Got :', message
		for s in self.clients:
			s.write_message(message)
		
	def on_close(self):
		self.clients.remove(self)
		print 'Conn closed...'
			
application = tornado.web.Application([
    (r'/ws', WSHandler),
])
 
 
if __name__ == "__main__":
    get_lock('server_python')
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(9002)
    tornado.ioloop.IOLoop.instance().start()
