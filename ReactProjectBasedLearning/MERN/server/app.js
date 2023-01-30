const express= require('express');
const connectDB=require('./config/db')
const app=express();
const cors=require("cors")

// connect to Database
connectDB()

// routes 

const books=require('./routes/api/books')

// cors 
app.use(cors({origin:true, credentials:true}))

//use routes
app.use('/api/books',books)

// Init MiddleWare

app.use(express.json({ extended: false }))

app.get('/',(req,res)=> res.send("hello world"))

const port=process.env.PORT || 6969;


app.listen(port, () => console.log(`Server is running on port ${port}` ))