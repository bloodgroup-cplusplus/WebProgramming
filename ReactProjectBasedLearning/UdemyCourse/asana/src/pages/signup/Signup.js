// styles 

import './Signup.css'


import React from 'react'
import {useState} from "react"

export default function Signup() {
  const [email,setEmail] = useState("")
  const[password,setPassword] =useState("")
  const[displayName,setDisplayName] = useState(null)
  const[dob,setDob] =useState("")
  const[phone,setPhone] = useState("")
  const [district,setDistrict] = useState("")
  return (
    <form className='auth-form'>
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
        <select required onChange={(e)=>setDistrict(e.target.value)} value={district}>
          <option value="Gangtok">Gangtok</option>
          <option value="Pakyong">Pakyong</option>
          </select>
        
      </label>

      <label>
        <span> Profile Photo:</span>
        <input 
        required 
        type="file"
        />
      
      </label>

    <button className='btn'>Continue to Razorpay</button>
    </form>
  )
}
