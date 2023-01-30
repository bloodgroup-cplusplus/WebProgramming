const express= require('express');
const connectDB=require('./config/db')
const app=express();

// connect to Database
connectDB()

app.get('/',(req,res)=> res.send("hello world"))

const port=process.env.PORT || 6969;


app.listen(port, () => console.log("Server is running "))