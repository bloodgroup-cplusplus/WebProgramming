
// react hooks 
import {useState} from 'react'

// styles 

import styles from './Login.module.css'


import React from 'react'

export default function Login() {
  const [sta, setSta] = useState('')
  const[name, setName] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(sta,name)
  }
  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <lablel >
        <span>
          STA ID:
        </span>
        <input
          type="text"
          onChange={(e)=>setSta(e.target.value)}
          value={sta}
          />
      </lablel>

      <label>
        <span>Name:</span>
        <input 
        type="text"
        onChange={(e)=>setName(e.target.value)}
        value={name}/>

      </label>

      <button className='btn'>Login</button>


    </form>
      
  )
}
