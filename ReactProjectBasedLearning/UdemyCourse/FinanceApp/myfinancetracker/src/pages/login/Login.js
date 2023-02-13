import {useState} from "react"
import {useLogin} from "../../hooks/useLogin"

//import styles from "./Login.modules.css"

import "./Login.css"

import React from 'react'

export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const{login,error,isPending} = useLogin()

  const handleSubmit=(e)=>{
    e.preventDefault()
    login(email,password)
  }
  return (
    <>
    <section class="container forms">
      <div class="form login">
        <div class="form-content">
          <header>Login</header>
          <form onSubmit={handleSubmit}>
            <div class= "field input-field">
              <input 
                 type= "email" 
                 placeholder="Email" 
                 class= "input"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 required
                 />            
              </div>

            <div class="field input-field">
              <input 
              type="password" 
              placeholder="Password" 
              class="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>

            </div>
            <div class="field button-field">
              {!isPending && <button>Login</button>}
              {isPending && <button disabled>Loading</button>}
              {error && alert(error)}
            </div>
          </form>
          <div class='form-link'>
            <span>Don't Have an account? <a href="/signup" class="link signup-link">Signup</a></span>
          </div>
        </div>
        <div class="line"></div>
        <div class="media-options">
          <a href="#" class="field google">
            <img src="google_logo.png" alt="" class="goolge-img"></img>
            <span>Login With Google</span>
          </a>
        </div>
      </div>
    </section>
    
     </>
    
  )
}
