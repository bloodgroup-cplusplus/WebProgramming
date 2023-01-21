import React from 'react'

const NavBar = () => {
  return (
    <ul id="nav-list" className='navbar'>
        <li><a href="http://localhost:3000">Home</a></li>
        <li><a href="http://localhost:3000/signup">Signup</a></li>
        <li><a href="http://localhost:3000/login">Login</a></li>
        <li><a href="http://localhost:3000/feed">Feed</a></li>
        <li><a href="https://pages.razorpay.com/pl_KlizCHgO1U1j6y/view">Donate</a></li>
    </ul>
  )
}

export default NavBar