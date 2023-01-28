const express= require("express")
const jwt= require("jsonwebtoken")
const secretKey="secretKey"

const app = express()


app.get("/", (req,res)=>{

    res.json({
        message:"a simple api"
    })
})

app.post("/login",(req,res)=>{
    const user={
        id:1,
        username:"chad",
        email:"chadleb@gmail.com"
    }
    jwt.sign({user},secretKey,{expiresIn:'600s'},(err,token)=>{
        res.json({
            token
        })

    })
})


app.listen(6969,()=>{
    console.log("App is running in 6969 port")
})
