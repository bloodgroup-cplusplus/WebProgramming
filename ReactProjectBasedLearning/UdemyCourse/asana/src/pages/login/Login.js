// stlyes 


import './Login.css'


// hooks

import {useLogin} from "../../hooks/useLogin"
import {useState} from "react"

export default function Login() {

  const [email, setEmail] = useState('')
  const[password,setPassword] = useState('')
  const {login,error,isPending} = useLogin()

  const handleSubmit=(e)=>{
    e.preventDefault()
    login(email,password)

  }
  const hadleGoogleAuth=()=>{


  }

  return (

    <>
    <form onSubmit={handleSubmit} className= "auth-form">
      <h2>Login</h2>
      <label>
        <span>email</span>
        <input 
        required 
        type="email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          required
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          />
      </label>
      {!isPending && <button className='btn'>Log in </button>}
      {isPending && <button className='btn' disabled>Loading</button>}
      {error && <div className='error'>{error}</div>}

    </form>

      <div className='google'>      
      <label>
        <span>Already Registered? Sign in With Google</span>
       {!isPending && <button className='btn'>Sign In With Google</button>}
       {isPending && <button className='btn' disabled>Loading</button>}
       {error && <div className='error'>{error}</div>}
       </label>
    </div>
    </>



      
  )
}
