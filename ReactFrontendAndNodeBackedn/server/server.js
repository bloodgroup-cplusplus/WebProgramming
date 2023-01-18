const app=require('express')()
const path=require('path')
const Razorpay=require('razorpay')
const cors=require('cors')
const bodyParser=require('body-parser')
const crypto=require('crypto')








app.use(cors())
app.use(bodyParser.json())

var razorpay=new Razorpay({
    key_id: "rzp_test_O1TBRbokgN3lgn" ,
    key_secret:"hj6ZSnz00dSxNCmYA3ZOcOZM"
})

app.get('/sta_logo.svg',(req,res)=>{
    res.sendFile(path.join(__dirname,'logo.png'))
})

app.post('/verification',(req,res)=>{
    // do a validation 
    const secret='123456789'
    console.log(req.body)
	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it

		//require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))

	} else {
		// pass it
	}
	res.json({ status: 'ok' })

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
    console.log("listening at port 1337")
    })


