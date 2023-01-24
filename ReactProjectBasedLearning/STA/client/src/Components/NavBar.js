import React from 'react'

import {useState} from 'react'
const NavBar = () => {
  const[token,setToken]=useState(false);
  const handleClick=()=>{
    setToken((token)=>!token)
  }
  return (
    <>
    {!token ?(
    <ul id="nav-list" className='navbar'>
        <li><a href="http://localhost:3000">Home</a></li>
        <li><a href="http://localhost:3000/signup">Signup</a></li>
        <li><a href="http://localhost:3000/login">Login</a></li>
        <li><a href="http://localhost:3000/feed">Feed</a></li>
        <li><a href="http://localhost:3000/generate">Generate</a></li>
        <li><a href="https://pages.razorpay.com/pl_KlizCHgO1U1j6y/view">Donate</a></li>
    </ul>
    ): (
      <ul id="nav-list" className="navbar">
        <li><a href="http://localhost:3000">Home</a></li>
        <li><a href="http://localhost:3000/feed">Feed</a></li>
        <li><a href="http://localhost:3000/profile">Profile</a></li>
        <li><a href="https://pages.razorpay.com/pl_KlizCHgO1u1j6y/view">Donate</a></li>
        <li><button onClick={handleClick}>Logout</button></li>
      </ul>
    )}
    </>
  )
}


export default NavBar