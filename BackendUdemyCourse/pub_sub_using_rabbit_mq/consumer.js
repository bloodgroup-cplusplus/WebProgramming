const ampq = require ('amqplib')

connect()
async function connect()
{
    try{
        const ampqServer = "amqps://gkyvbdpm:bj8eH5KTBLKnmnWfHNZKIjFk4TJsfTVh@puffin.rmq2.cloudamqp.com/gkyvbdpm"
        const connection = await ampq.connect(ampqServer)
        const channel = await connection.createChannel()
        const result = await channel.assertQueue("jobs")

        channel.consume("jobs", message=>{
            const input = JSON.parse(message.content.toString()); 
            console.log(`Received job with input ${input.number}`)
            if (input.number == 69)
                channel.ack(message);


        })
        console.log("Waiting for messages ...")

    }

    catch(e)
    {
        console.log("this is an error")
    }
}