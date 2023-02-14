import {useState} from "react"
import {useLogin} from "../../hooks/useLogin"

//import styles from "./Login.modules.css"

import "./Login.css"

import React from 'react'
import { useGoogleAuth } from "../../hooks/useGoogleAuth"

export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const{login,error,isPending} = useLogin()
  const[user,googleSignInError,signInWithGoogle]=useGoogleAuth()

  const handleSubmit=(e)=>{
    e.preventDefault()
    login(email,password)
  }
  
  return (
    <>
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form onSubmit={handleSubmit}>
            <div className= "field input-field">
              <input 
                 type= "email" 
                 placeholder="Email" 
                 className= "input"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 required
                 />            
              </div>

            <div className="field input-field">
              <input 
              type="password" 
              placeholder="Password" 
              className="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>

            </div>
            <div className="field button-field">
              {!isPending && <button>Login</button>}
              {isPending && <button disabled>Loading</button>}
              {error && alert(error)}
            </div>
          </form>
          <div className='form-link'>
            <span>Don't Have an account? <a href="/signup" class="link signup-link">Signup</a></span>
          </div>
        </div>
        <div className="line"></div>
        <div className="field button-field">
          {!user &&<button onClick={signInWithGoogle}>Login With Google</button>}
          {googleSignInError && alert(googleSignInError)}
        </div>
      </div>
    </section>
    
     </>
    
  )
}
