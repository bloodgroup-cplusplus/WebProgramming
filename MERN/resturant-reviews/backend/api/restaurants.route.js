import express from "express"

// get access to one route 
const router = express.Router()


// this is the demonstration route
router.route("/").get((req,res)=>res.send("hello world "))


// we can test our program so far 
export default router 
