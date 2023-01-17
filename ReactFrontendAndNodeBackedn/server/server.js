const app=require('express')()
const path=require('path')
const Razorpay=require('razorpay')
const cors=require('cors')
const bodyParser=require('body-parser')


app.use(cors())
app.use(bodyParser.json)

var razorpay=new Razorpay({
    key_id: id,
    key_secret:secret 
})

app.get('/logo.svg',(req,res)=>{
    res.sendFile(path.join(__dirname,'logo.svg'))
})

app.post('/razorpay',async(req,res)=>{
    const payment_capture=1
    const amount="40000";
    const currency="INR"

    const options={
        amount:amount,
        currency,
        payment_capture
    }

    try{

    const response=await razorpay.orders.create(options)
    console.log(response)
    res.json({
        id:response.id,
        currency:"INR",
        amount:response.amount

    })
    }catch (error)
    {
        console.log(error)
    }
    
})



app.listen(1337,() =>{
    console.log("listening on 1337")
})

