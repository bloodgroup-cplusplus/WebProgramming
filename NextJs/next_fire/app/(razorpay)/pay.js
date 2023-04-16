import { KEY_ID } from "./config"
import React from "react"
import addData from "../(firebase)/firestore/addData";

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

export default async function Pay(college_name,department_name)
{
     let result = null 
     let error = null
    try
        {
            const res= await loadScript("https://checkout.razorpay.com/v1/checkout.js")
            if(!res)
            {
                 alert('Razorpay SDK Failed.')
                 error = res.error
                return 
            }
            const result = await fetch("https://us-central1-demobackend-c456f.cloudfunctions.net/app/razorpay",{method:'POST'}).then((t)=>
                t.json()
            )
       
            const options={
                key:KEY_ID,
                amount:result.amount,
                currency:result.currency,
                name:"Application Fees",
                order_id:result.id,
                description:"Test Transaction",
                handler:async function(response)
                {
                     if(response.razorpay_payment_id)
                    {
                         alert(`Your Payment id is :, ${response.razorpay_payment_id}`)
                    }
                    if(response.razorpay_order_id)
                    {
                         alert(`Your Order id is :, ${response.razorpay_order_id}`)
                         
                    }
                    if(response.razorpay_signature)
                    {
                         alert(`Your Payment Signature is:, ${response.razorpay_signature}`)
                         addData(college_name,department_name)
                         
                    }
                },
                theme:{
                     color:'green'
                 }
                }
                const paymentObject=new window.Razorpay(options)
                paymentObject.open()


        }catch(err)
        {
            error= err
        }


        return {result,error}

}