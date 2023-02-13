//import styles from "./Signup.module.css"
import "./Signup.css"
import { useState,useEffect } from "react"
import {useSignup} from "../../hooks/useSignup"
import {usePayment} from "../../hooks/usePayment"

import React from 'react'

export default function Signup() {
  const [email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[phoneNumber,setPhoneNumber]=useState("")
  const[dateOfBirth,setDateOfBirth] = useState("")
  const[formalPhoto,setFormalPhoto] = useState(null)
  const[school,setSchool] = useState("")
  const[designation,setDesignation] = useState("")
  const [district,setDistrict] = useState("")
  const[bac,setBac] = useState("")
  const[appointmentOrderNumber,setAppointmentOrderNumber]=useState("")
  const[appointmentOrderPhoto,setAppointmentOrderPhoto] = useState("")
  const[gpfCpfNumber,setGpfCpfNumber] = useState("")
  const[retirementDate,setRetirementDate] = useState("")
  const [loading,setLoading] = useState(false)
  const [displayName, setDisplayName] = useState("")
  const[fileUploadError,setFileUploadError] = useState(null);
  const{payment,isVerified}=usePayment()
  const {signup,isPending,error} = useSignup()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    setLoading(true);
    try{
          await payment(email,password,phoneNumber,dateOfBirth,school,designation,district,bac,appointmentOrderNumber,gpfCpfNumber,retirementDate,displayName,formalPhoto,appointmentOrderPhoto,signup) 
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

const handleFormalPhotoChange=(e)=>{
  setFormalPhoto(null)
  let selected=e.target.files[0]
  if(!selected)
  {
    setFileUploadError("Please Select a file")
    return 
  }
  if(!selected.type.includes('image'))
  {
    setFileUploadError("selected file must be an image")
    return 
  }

  if(selected.size>100000000)
  {
    setFileUploadError("Image file size must be less than 10 mb")
    return 
  }
  setFileUploadError(null)
  setFormalPhoto(selected)
  console.log("Teacher Photo Uploaded")
}


const handleAppointmentOrderPhotoChange=(e)=>{
  setAppointmentOrderPhoto(null)
  let selected=e.target.files[0]
  if(!selected)
  {
    setFileUploadError("Please Select a file")
    return 
  }
  if(!selected.type.includes('image'))
  {
    setFileUploadError("selected file must be an image")
    return 
  }
  if(selected.size>10000000000)
  {
    setFileUploadError("Image File size must be less than 10mb")
    return 
  }
  setFileUploadError(null)
  setAppointmentOrderPhoto(selected)
  console.log("Appointment order photo uploaded")
}



  return (
    <>
     <div className="wrapper">
         <h2>Registration</h2>
         <form onSubmit = {handleSubmit}>
          <div className="input-box">
            <label>Full Name:</label>
            <input 
            type="text" 
            placeholder="Enter your name"
            onChange={(e)=>setDisplayName(e.target.value)}
            value={displayName}
            required/>
        </div>
      <div className="input-box">
        <label>Email id :</label>
        <input 
         type="email" 
         placeholder="Enter your email" 
         onChange={(e)=>setEmail(e.target.value)}
         value={email}
         required/>
      </div>

      <div className="input-box">
        <label>Phone Number:</label>
        <input 
          type="number" 
          placeholder="Valid Whatsapp Number" 
          onChange={(e)=>setPhoneNumber(e.target.value)}
          value={phoneNumber}
          required/>
      </div>
      <div className="input-box">
        <label>Date of Birth:</label>
        <input type="date" 
         placeholder="Enter your Date of Birth" 
         onChange={(e)=>setDateOfBirth(e.target.value)}
         value={dateOfBirth}
         required/>
      </div>
      <div className="input-box">
        <label>Valid Formal Photo:</label>
        <input type="file" 
          placeholder="Attach Recent and Valid Formal Photo" 
          onChange={handleFormalPhotoChange}
          required/>
      </div>

      <div className="input-box">
        <label>Current School:</label>
        <input 
         type="text" 
         placeholder="Current School" 
         onChange={(e)=>setSchool(e.target.value)}
         value={school}
         required/>
      </div>

      <div className="input-box">
        <label>Designation:</label>
        <select className="select" required placeholder="Current Deisgnation" value={designation} onChange={(e)=>setDesignation(e.target.value)}>
          <option disabled selected>Select</option>
          <option>PPT</option>
          <option>PRT</option>
          <option>GT</option>
          <option>PGT</option>
          <option>HMJHS</option>
          <option>HMSS</option>
          <option>HMPS</option>
          <option>PRINCIPAL</option>
          <option>OTHER</option>
        </select>
      </div>

      <div className="input-box">
        <label>District(School):</label>
        <select className="select" required placeholder="District of current School" value={district} onChange={(e)=>setDistrict(e.target.value)}>
          <option disabled selected>Select</option>
          <option>Gangtok</option>
          <option>Geyzing</option>
          <option>Mangan</option>
          <option>Namchi</option>
          <option>Pakyong</option>
          <option>Soreng</option>
        </select>

      </div>

      <div className="input-box">
        <label>BAC(School):</label>
        <select className="select" required placeholder="BAC of current school" value={bac} onChange={(e)=>setBac(e.target.value)}>
          <option disabled selected> Select</option>
          <option>Baiguney</option>
          <option>Chongrang</option>
          <option>Chumbung-Chakung</option>
          <option>Chungthang</option>
          <option>Daramdin</option>
          <option>Dentam</option>
          <option>Duga</option>
          <option>Dzongu</option>
          <option>Gangtok</option>
          <option>Geyzing</option>
          <option>Hee Martam</option>
          <option>Jorethang</option>
          <option>Kabi Tingda</option>
          <option>Kaluk</option>
          <option>Khamdong</option>
          <option>Mangalbarey</option>
          <option>Mangan</option>
          <option>Martam</option>
          <option>Melli Sumbuk</option>
          <option>Namchi</option>
          <option>Namthang</option>
          <option>Pakyong</option>
          <option>Parkha</option>
          <option>Rakdong</option>
          <option>Ranka</option>
          <option>Ravangla</option>
          <option>Regu</option>
          <option>Rhenock</option>
          <option>Soreng</option>
          <option>Temi-Tarku</option>
          <option>Wok Sikkip</option>
          <option>Yangyang</option>
          <option>Yuksom</option>
      </select>

      </div>
      <div className="input-box">
        <label>Appointment Order Number:</label>
        <input type="text" 
         placeholder="Appointment Order Number" 
         value={appointmentOrderNumber}
         onChange={(e)=>setAppointmentOrderNumber(e.target.value)}
         required/>
      </div>

      <div className="input-box">
        <label>Appointment Order Photo:</label>
        <input type="file"
         placeholder="Appointment Order Photo" 
         required
         onChange={handleAppointmentOrderPhotoChange}
         />
      </div>

      <div className="input-box">
        <label>GPF/CPF Number: </label>
        <input type="text"
         placeholder="Enter your Gpf/cpf number" 
         value={gpfCpfNumber}
         onChange={(e)=>setGpfCpfNumber(e.target.value)}
         required/>
      </div>
      <div className="input-box">
        <label>Retirement date:</label>
        <input type="date"
         placeholder="Retirement date"
         value={retirementDate}
         onChange={(e)=>setRetirementDate(e.target.value)}
        required/>
      </div>

      <div className="input-box">
        <label>Password:</label>
        <input type="password" 
        placeholder="Set a password for your account"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         required/>
      </div>

      <div className="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div className="input-box button">
        {!isPending &&<input type="Submit" value="Checkout"/>}
        {isPending && <input type="Submit"value="Loading"disabled/>}
        {error && alert({error})}
      </div>
      <div className="text">
        <h3>Already have an account? <a href="/login">Login now</a></h3>
      </div>
      </form>
      </div>
    </>
  ) 
}
