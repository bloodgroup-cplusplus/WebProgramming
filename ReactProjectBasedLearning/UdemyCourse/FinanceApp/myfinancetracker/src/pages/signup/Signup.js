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

const handleFileChange=(e)=>{
  let selected_one=e.target.files[0]
  let selected_two=e.target.files[1]
  if(selected_one && selected_two)
  {
    setAppointmentOrderPhoto(selected_two)
    setFormalPhoto(selected_one)
  }

}



  return (
    <>
     <div class="wrapper">
         <h2>Registration</h2>
         <form onSubmit = {handleSubmit}>
          <div class="input-box">
            <label>Full Name:</label>
            <input 
            type="text" 
            placeholder="Enter your name"
            onChange={(e)=>setDisplayName(e.target.value)}
            value={displayName}
            required/>
        </div>
      <div class="input-box">
        <label>Email id :</label>
        <input 
         type="email" 
         placeholder="Enter your email" 
         onChange={(e)=>setEmail(e.target.value)}
         value={email}
         required/>
      </div>

      <div class="input-box">
        <label>Phone Number:</label>
        <input 
          type="number" 
          placeholder="Valid Whatsapp Number" 
          onChange={(e)=>setPhoneNumber(e.target.value)}
          value={phoneNumber}
          required/>
      </div>
      <div class="input-box">
        <label>Date of Birth:</label>
        <input type="date" 
         placeholder="Enter your Date of Birth" 
         onChange={(e)=>setDateOfBirth(e.target.value)}
         value={dateOfBirth}
         required/>
      </div>
      <div class="input-box">
        <label>Valid Formal Photo:</label>
        <input type="file" 
          placeholder="Attach Recent and Valid Formal Photo" 
          onChange={handleFileChange}
          required/>
      </div>

      <div class="input-box">
        <label>Current School:</label>
        <input 
         type="text" 
         placeholder="Current School" 
         onChange={(e)=>setSchool(e.target.value)}
         value={school}
         required/>
      </div>

      <div class="input-box">
        <label>Designation:</label>
        <select class="select" required placeholder="Current Deisgnation" value={designation} onChange={(e)=>setDesignation(e.target.value)}>
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

      <div class="input-box">
        <label>District(School):</label>
        <select class="select" required placeholder="District of current School" value={district} onChange={(e)=>setDistrict(e.target.value)}>
          <option disabled selected>Select</option>
          <option>Gangtok</option>
          <option>Geyzing</option>
          <option>Mangan</option>
          <option>Namchi</option>
          <option>Pakyong</option>
          <option>Soreng</option>
        </select>

      </div>

      <div class="input-box">
        <label>BAC(School):</label>
        <select class="select" required placeholder="BAC of current school" value={bac} onChange={(e)=>setBac(e.target.value)}>
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
      <div class="input-box">
        <label>Appointment Order Number:</label>
        <input type="text" 
         placeholder="Appointment Order Number" 
         value={appointmentOrderNumber}
         onChange={(e)=>setAppointmentOrderNumber(e.target.value)}
         required/>
      </div>

      <div class="input-box">
        <label>Appointment Order Photo:</label>
        <input type="file"
         placeholder="Appointment Order Photo" 
         required
         onChange={handleFileChange}
         />
      </div>

      <div class="input-box">
        <label>GPF/CPF Number: </label>
        <input type="text"
         placeholder="Enter your Gpf/cpf number" 
         value={gpfCpfNumber}
         onChange={(e)=>setGpfCpfNumber(e.target.value)}
         required/>
      </div>
      <div class="input-box">
        <label>Retirement date:</label>
        <input type="date"
         placeholder="Retirement date"
         value={retirementDate}
         onChange={(e)=>setRetirementDate(e.target.value)}
        required/>
      </div>

      <div class="input-box">
        <label>Password:</label>
        <input type="password" 
        placeholder="Set a password for your account"
        value={password}
        onChamge={(e)=>setPassword(e.target.value)}
         required/>
      </div>

      <div class="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div class="input-box button">
        {!isPending &&<input type="Submit" value="Checkout"/>}
        {isPending && <input type="Submit"value="Loading"disabled/>}
        {error && alert({error})}
      </div>
      <div class="text">
        <h3>Already have an account? <a href="/login">Login now</a></h3>
      </div>
      </form>
      </div>
    </>
  ) 
}
