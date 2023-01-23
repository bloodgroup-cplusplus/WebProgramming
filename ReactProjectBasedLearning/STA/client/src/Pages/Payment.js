async function loadScript (src)
{
    return new Promise((resolve)=>{
        const script=document.createElement('script')
        script.src=src
        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}


async function displayRazorpay()
{
    const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if(!res)
    {
        alert("Razorpay SDK Failed Make sure you are connected to the internet")
        return false 
    }
    const data=await fetch('http://localhost:1337/razorpay',{method:'POST'}).then((t)=>
        t.json()
    )
    const options={
        key:"rzp_test_O1TBRbokgN3lgn",
        amount:data.amount,
        currency:data.currency,
        name:"STA fee",
        order_id:data.id,
        handler:function(response)
        {
            alert(`Your razorpay order id is ${response.razorpay_order_id}`)
            alert( `Your razorpay payment id is ${response.razorpay_payment_id}`)
            alert(`Your razorpay payment signature is ${response.razorpay_signature}`)
            alert('Payment successful  please take the screen shot of this before you click ok for proof')
        },
        theme:{
            color:"#FFE4C4"
        }

    }
    const paymentObject=new window.Razorpay(options)
    paymentObject.open()
}

export default displayRazorpay;


