/* Rabbit mq */

const amqp = require("amqplib")

const msg = {number:process.argv[2]}
connect()

async function connect()
{
    try{
        const ampqServer = "amqps://gkyvbdpm:bj8eH5KTBLKnmnWfHNZKIjFk4TJsfTVh@puffin.rmq2.cloudamqp.com/gkyvbdpm"
        const connection = await amqp.connect(ampqServer)
        const channel = await connection. createChannel();
        await channel.assertQueue("jobs"); // new queueu called jobs
        await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
        console.log(`Job sent successfully ${msg.number}`); 
        await channel.close(); 
        await connection.close();
    }


    catch(ex)
    {
        console.error(ex);
    }
}