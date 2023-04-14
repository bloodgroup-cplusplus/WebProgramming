import {projectAuth, sendPasswordResetEmail} from "../Firebase/config"
import { useState,useEffect } from "react"

export const usePasswordReset =() =>{
    const [error, setError] = useState(null)
    const[isPending,setIsPending] = useState(false)
    const [isCancelled, setIsCancelled] = useState(null)


    const password_reset = async(email) =>{
        setError(null)
        setIsPending(true)

        // sign the user in 
        try{
             sendPasswordResetEmail(projectAuth,email).then(()=>{
                console.log("Password Reset Email Sent")
             })



            // update state
            if(!isCancelled)
            {
                setIsPending(false)
                setError(null)

            }
        } 
        catch(err)
        {
            if(!isCancelled)
            {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
     }

     useEffect(()=>{
        return () =>setIsCancelled(true)
     },[])

     return {password_reset,error,isPending}
    }



