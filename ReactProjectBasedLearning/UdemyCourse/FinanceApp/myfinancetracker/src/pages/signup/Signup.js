import styles from "./Signup.module.css"
import { useState,useEffect } from "react"
import {useSignup} from "../../hooks/useSignup"
import {usePayment} from "../../hooks/usePayment"

import React from 'react'

export default function Signup() {
  const [email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)
  const [displayName, setDisplayName] = useState("")
  const{payment,isVerified}=usePayment()
  const {signup,isPending,error} = useSignup()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    setLoading(true);
    try{
          await payment(email,password,displayName,signup) 
    }
    catch(error)
    {
      console.error(error)
      alert('payment failed')
    }
    finally{
      setLoading(false)
    }

    



  }
  useEffect(()=>{
    console.log(isVerified)
    if(isVerified)
    {
      console.log("chad")
    }
},[isVerified])

  return (
    <form on onSubmit={handleSubmit} className={styles['signup-form']}>
    <h2>Signup</h2> 
    <label>
    <span>Email:</span>
    <input 
     type="email"
     onChange={(e)=>setEmail(e.target.value)}
     value={email}
     />
     </label>
     <label>
       <span>Password:</span>
       <input 
         type="password"
         onChange={(e)=>setPassword(e.target.value)}
         value={password}
         />
     </label>

     <label>
      <span>Display name:</span>
      <input 
        type="text"
        onChange={(e)=>setDisplayName(e.target.value)}
        value={displayName}
        />
     </label>
     
     {!isPending &&<button className="btn">Signup </button>}
     {isPending && <button className="btn" disabled>Loading</button>}
     {error && alert(error)}
    </form>
  )
}
