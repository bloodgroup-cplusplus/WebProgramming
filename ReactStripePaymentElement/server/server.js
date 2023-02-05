const express = require('express')

const app = express();
const  {resolve} = require("path")

const env= require("dotenv").config({path: "./.env"});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY,{
    apiVersion:"2022-08-01",
})

app.use(express.static(__dirname+'public'))


app.get("/",(req,res)=>{
    res.sendFile(path);

});


app.get("/config",(req,res)=>{
    res.send({
        publishableKey:process.env.STRIPE_PUBLISHABLE_KEY,
    });
});

app.post("/create-payment-intent",async(req,res)=>{

});


app.listen(5252,()=>{
    console.log("Node server listening on port 5252")
});


