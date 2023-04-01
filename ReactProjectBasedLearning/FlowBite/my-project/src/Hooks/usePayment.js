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
                         alert(
                            <div id="alert-additional-content-3" className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
                                <div classname="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns = "http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Your Payment Id is : </span>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">{response.razorpay_payment_id}</h3>
                                    <button type="button" className="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sx px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white" data-dismiss-target="#alert-addition-content-5" aria-label="Close">
                                        Okay
                                    </button>
                                </div>
                            </div>
                         )
                    }
                    if(response.razorpay_order_id)
                    {
                         setIsOrdered(true)
                         alert(
                            <div id="alert-additional-content-3" className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
                                <div classname="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns = "http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Your Order Id is : </span>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">{response.razorpay_order_id}</h3>
                                    <button type="button" className="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sx px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white" data-dismiss-target="#alert-addition-content-5" aria-label="Close">
                                        Okay
                                    </button>
                                </div>
                            </div>
                         )
                    }
                    if(response.razorpay_signature)
                    {
                         setIsVerified(true)
                         alert(
                            <div id="alert-additional-content-3" className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
                                <div classname="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns = "http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Your Payment Verification Id is : </span>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">{response.razorpay_signature}</h3>
                                    <button type="button" className="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sx px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white" data-dismiss-target="#alert-addition-content-5" aria-label="Close">
                                        Okay
                                    </button>
                                </div>
                            </div>
                         ) 
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