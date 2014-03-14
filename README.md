<strong>Python dependencies:</strong>

websocket-client<br>
tornado


<strong>How to use:</strong>

For details on the overall scheme of this setup, please see <a href="http://rpiai.wordpress.com/2014/03/14/home-automation-using-simple-python-js-arduino-and-elementary-circuits/">http://rpiai.wordpress.com</a>.<br>
Basically, the server is a simple echo server that broadcasts messages between the clients. The main client is the website that holds the SVG graphics that can be manipulated. This website uses Javscript websockets to send information about which lights are selected for switching. The website also listens to the signals from the Python client about the status of lights. The Python client uses <code>websocket-client</code> to send info about the states. The Python client recieves information about the light states via Serial via Arduino in this code - although you could change this to whatever you want.


<strong>Acknowledgements:</strong>

I make a lot of use some great Javascript libraries: <a href="http://svgjs.com/">http://svgjs.com/</a> and the <a href="http://dev.maxmind.com/geoip/legacy/javascript/">geoIP</a> API.
