// styles 

import './Signup.css'

//custom hooks 

import { useSignup } from '../../hooks/useSignup'
import {usePayment} from "../../hooks/usePayment"


import React from 'react'
import {useState} from "react"

export default function Signup() {
  const [email,setEmail] = useState("")
  const[password,setPassword] =useState("")
  const[displayName,setDisplayName] = useState("")
  const[dob,setDob] =useState("")
  const[phone,setPhone] = useState("")
  const [district,setDistrict] = useState("")
  const [thumbnail, setThumbnail] = useState(null)
  const[thumbnailError,setThumbnailError] = useState(null)
  const{signup,isPending,error} = useSignup()
  const {payment,isVerified,isCaptured,isOrdered} = usePayment()

  const handleSubmit= async(e)=>{
    e.preventDefault()
    const res=await payment()
    if(!res)
    {
      return 
    }
    console.log(isVerified)
    signup(email,password,displayName,thumbnail)
    //payment()
    //console.log(isVerified)
    //console.log(isCaptured)
    //console.log(isOrdered)
  }

  const handleFileChange=(e)=>{
    setThumbnail(null)
    let selected= e.target.files[0]
    if(!selected)
    {
      setThumbnailError("please select a file")
      return 
    }

    if(!selected.type.includes('image'))
    {
       setThumbnailError("selected file must be an image")
       return 

    }

    if(selected.size>1000000000)
    {
      setThumbnailError("Image file size must be less than 10mb")
      return 
    }

    setThumbnailError(null)
    setThumbnail(selected)
    console.log("thumbnail updated")
  }
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up </h2>
      <label>

        <span>email:</span>
        <input 
          required
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          />
      </label>


      <label>

        <span> password</span>
        <input 
          required 
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          />
      </label>

      <label>

        <span> name:</span>
        <input 
        required 
        type="text"
        onChange={(e)=>setDisplayName(e.target.value)}
        value={displayName}
        />
      </label>

      <label>
        <span> Date of birth:</span>
        <input 
        required 
        type="date"
        onChange={(e)=>setDob(e.target.value)}
        value={dob}
        />

      </label>

      <label>
        <span>Phone:</span>
        <input 
        required 
        type="number"
        onChange={(e)=>setPhone(e.target.value)}
        value={phone}
        />
      </label>

      <label>
        <span> District:</span>
        <select className='dropdown' required onChange={(e)=>setDistrict(e.target.value)} value={district}>
          <option value="Gangtok">Gangtok</option>
          <option value="Pakyong">Pakyong</option>
          </select>
        
      </label>

      <label>
        <span> Profile Photo:</span>
        <input 
        required 
        type="file"
        onChange={handleFileChange}
        />
      
      {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>

    {!isPending && <button className='btn'>Continue to Razorpay</button>}
    {isPending && <button className='btn' disabled> Loading</button>}
    {error &&<div className='error'>{error}</div>}
    </form>
  )
}
