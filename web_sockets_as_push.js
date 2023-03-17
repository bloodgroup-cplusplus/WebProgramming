const http = require("http")

const WebSocketServer = require("websocket").server 

let connections = [];
// the array of users 
// everytime someone sends a message we are going to 
// we are going to create http server app 


// create a new http server (this will help us create the TCP which will then pass

const websocket = new WebSocketServer({"httpServer":httpserver})

// listen on the TCP socket 

httpserver.listen(8080,()=>console.log("My server is listening on port 8080"))

// when a legit websocket request comes listen to it and get the connection ... 
// actual websecoket request connect through client side in the browser
// the client will going to spin up multiple browser 
// once we get the request we accept the connection


websocket.on("request",request=>{
	const connection = request.accept(null, request.origin)
	connection.on("message",message=>{
		//someone just sent a message tell everybody 
		connections.forEach(c=>c.send(`Users ${connection.socket.remotePort} says: {message.utf8Data}`))

		connections.push(connection)
		// someone just connected, tell everybody 
		connections.forEach(c=>c.send(`Users ${connection.socket.remotePort} just connected `))

})


	

