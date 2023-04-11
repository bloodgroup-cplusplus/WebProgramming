import KEY_ID from "../razorpay/config"
import React from "react"

async function loadScript(src)
{
    return new Promise((resolve)=>{
        const script = document.createElement("script")
        script.src = src 
        script.onload=() =>{
            resolve(true)
        }
        script.onerror=() =>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

export default async function Pay()
{
    try
        {
            const res= await loadScript("https://checkout.razorpay.com/v1/checkout.js")
            if(!res)
            {
                 alert('Razorpay SDK Failed.')
                setError(res.error)
                return 
            }
            const data = await fetch(process.env.REACT_APP_BACKEND_API_LINK,{method:'POST'}).then((t)=>
                t.json()
            )
       
            const options={
                key:KEY_ID,
                amount:data.amount,
                currency:data.currency,
                name:"Sikkim Teachers Association Membership Fee",
                order_id:data.id,
                description:"Test Transaction",
                handler:async function(response)
                {
                     if(response.razorpay_payment_id)
                    {
                         setIsCaptured(true)
                         alert(`Your Payment id is :, ${response.razorpay_payment_id}`)
                    }
                    if(response.razorpay_order_id)
                    {
                         setIsOrdered(true)
                         alert(`Your Order id is :, ${response.razorpay_order_id}`)
                         
                    }
                    if(response.razorpay_signature)
                    {
                         setIsVerified(true)
                         alert(`Your Payment Signature is:, ${response.razorpay_signature}`)
                        await signup(email,password,phoneNumber,dateOfBirth,school,designation,district,bac,appointmentOrderNumber,gpfCpfNumber,retirementDate,displayName,formalPhoto,appointmentOrderPhoto)
                    }
                },
                theme:{
                     color:'fffff'
                 }
                }
                const paymentObject=new window.Razorpay(options)
                paymentObject.open()

                if(!isCancelled)
                {
                    setIsPending(false)
                    setError(null)
                }
        }catch(err)
        {
            if(!isCancelled)
            {
                setError(err.message)
                setIsPending(false)
            }
        }



}