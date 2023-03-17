const http=require("http");
const WebSocketServer= require("websocket").server
let connections = [];
const httpserver = http.createServer()

const websocket = new WebSocketServer({"httpServer":httpserver})


// listen on the TCP socket 

httpserver.listen(8080,()=>console.log("my server is listening on port 8080"))


websocket.on("request",request=>{
	const connection = request.accept(null,request.origin)
	connection.on("message",message=>{
		// someone just sent a message tell everybody 
		connections.forEach(c=>c.send(`User ${connection.socket.remotePort} says : ${message.utf8Data}`))


		connections.push(connection)
		// someone just connected, tell everybody 
		connections.forEach(c=>c.send(`User ${connection.socket.remotePOrt} just connected.`))

	})

