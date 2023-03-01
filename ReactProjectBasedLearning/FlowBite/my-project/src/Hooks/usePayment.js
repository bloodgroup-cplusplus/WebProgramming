import {useState,useEffect,useCallback} from "react"
import {KEY_ID} from "../Razorpay/config"

export const usePayment =() =>{
    const [error, setError] = useState(null)
    const[isCancelled,setIsCancelled]=useState(false)
    const[isOrdered,setIsOrdered] = useState(false)
    const[isCaptured,setIsCaptured] = useState(false)
    const[isVerified,setIsVerified] = useState(false)
    const[isPending,setIsPending] = useState(false)

    async function loadScript(src)
    {
        return new Promise((resolve)=>{
            const script = document.createElement("script");
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


    const payment= useCallback(async(email,password,phoneNumber,dateOfBirth,school,designation,district,bac,appointmentOrderNumber,gpfCpfNumber,retirementDate,displayName,formalPhoto,appointmentOrderPhoto,signup) =>
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
            const data = await fetch("https://us-central1-backend-d709f.cloudfunctions.net/app/razorpay",{method:'POST'}).then((t)=>
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
                        alert(response.razorpay_payment_id)
                    }
                    if(response.razorpay_order_id)
                    {
                         setIsOrdered(true)
                        alert(response.razorpay_order_id)
                    }
                    if(response.razorpay_signature)
                    {
                         setIsVerified(true)
                        alert(response.razorpay_signature)
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

    },[])
    useEffect(()=>{
        return () =>setIsCancelled(true)
    },[])

    return {payment,isVerified}


}