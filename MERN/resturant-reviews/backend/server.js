import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

//lets make our express app 

const app = express () 

// let's apply our middleware 

app.use(cors())


// just doing express.json means that our server can accept json in the body of the request 

app.use(express.json())


// specify what initial urls can be
app.use("/api'/v1/restaurants",restaurants)

// if someone goes to the route that does not exist or that is not in our route fiel 

app.use("*",(req,res) => res.status(404).json({error:"not found"}))

// and now let's export app as module 
// we can import this module in the file that gets the database 
// we will create a seperate file that interacts with the database 

export default app








