import "./Navbar.css"
import Temple from "../assets/temple.svg"
import {Link} from "react-router-dom"


import React from 'react'

export default function Navbar() {
    // logo comes from the assets folder 

  return (
    <div>
        <ul>
            <li className="logo">
                <img src={Temple} alt="dojo logo" />
                <span>The Dojo</span>
            </li>

            <li>
                <Link to = "/login">Login</Link>
                <Link to = "/signup">Signup</Link>


            </li>


            <li>
                <button className="btn">Logout</button>
            </li>


        </ul>





    </div>
  )
}
