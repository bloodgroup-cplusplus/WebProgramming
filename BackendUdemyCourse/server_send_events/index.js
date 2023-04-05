/* Client code 

let sse = new EventSource("http://localhost:8080/stream");
// the event source ships with every browser

sse.onmessage = console.log 


*/



const app = require("express")();

app.get("/", (req,res)=>res.send("hello!"))


app.get("/stream", (req,res)=>{
    res.setHeader("Content-type", "text/event-stream");
    send(res)
})


const port = process.env.PORT || 8888; 


let i = 0 
function send(res)
{
    res.write("data" + `hello from server ---- [${i++}]\n\n`)
    // send data with a counter every second 


    setTimeout(()=>send(res),1000);
}