// import styles 
import styles from './Signup.module.css'

// import react hooks 
import { useState } from 'react'
import {useSignup} from "../../hooks/useSignup"

import React from 'react'

export default function Signup() {
  const[sta,setSta] = useState('')
  const[email, setEmail]= useState('')
  const[name,setName] = useState('')
  const{signup, isPending, error} =useSignup()

  const handleSubmit=(e)=>{
    e.preventDefault()
    signup(email,sta,name)
  }
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>
          Name
        </span>
        <input
          type="text"
          onChange={(e)=>setName(e.target.value)}
          value={name}
          />
      </label>

      <label>
        <span>Email:</span>
        <input
        type="email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
      </label>

      <label>
        <span>STA</span>
        <input 
        type='text'
        onChange={(e)=>setSta(e.target.value)}
        value={sta}
        />

      </label>

      {!isPending &&<button className='btn'>Signup</button>}
      {isPending && <button className='btn' disabled >Loading</button>}
      {error && <p> {error}</p>}

    </form>
  )
}
