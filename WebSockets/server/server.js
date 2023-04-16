const io = require('socket.io')(3000,{
    cors:{
        origin:["http://localhost:8080"],
    },
})

// give socket instance for each of them 

io.on('connection',socket=>{
    console.log(socket.id)
})
