import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h3 classname="logo">Logo</h3>
        <ul className='nav-links'>
            <Link to= "/" className="home">
                <li>Home</li>

            </Link>

            <Link to="/about" className="feed">
                <li>Feed</li>
            </Link>

            <Link to="/signup" className="signup">
                <li>Signup</li>
            </Link>

            <Link to="/login" className="login">
                <li>Login</li>
            </Link>


        </ul>

    </nav>
  )
}


export default Navbar