const functions = require("firebase-functions");
const express = require("express");
const Razorpay = require('razorpay')
const cors = require('cors')
const bodyParser = require('body-parser')
const crypto = require('crypto')

const app = express()


app.use(cors())
app.use(bodyParser.json())

var razorpay = new Razorpay({
    key_id: "rzp_test_O1TBRbokgN3lgn" ,
    key_secret:"hj6ZSnz00dSxNCmYA3ZOcOZM"

})



// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

app.get("/stuff",(req,res)=>{
    res.status(200).send({data:"wordly hellos"})
})
app.get("/chad",(req,res)=>{
    res.status(200).send("YOUVE BEEN RICKROLLED")
})


app.post("/razorpay", async(req,res)=>{
    const payment_capture = 1 
    const amount = "30000"; 
    const currency = "INR"


    const options = {
        amount:amount, 
        currency, 
        payment_capture
    }

    try{
        const response = await razorpay.orders.create(options)
        console.log(response)
        res.json({
            id:response.id, 
            currency:"INR", 
            amount:response.amount
        })
    }catch(error)
    {
        console.log(error)
    }
})

app.post("/verification", (req,res)=>{
    const secret = '123456789'
    console.log(req.body)
    const shasum = crypto.createHmac('sha256',secret)
    shasum.update(JSON.stringify(req.body))
    const digest = shashum.digest('hex')
    console.log(digest,req.headers['x-razorpay-signature'])
    if(digest === req.headers['x-razorpay-signature'])
    {
        console.log('request is legit')
    }
    else{
        //pass the request
    }
    res.json({status:'ok'})
})


exports.app = functions.https.onRequest(app)