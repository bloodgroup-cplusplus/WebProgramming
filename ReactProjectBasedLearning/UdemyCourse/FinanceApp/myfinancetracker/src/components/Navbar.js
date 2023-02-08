import styles from "./Navbar.module.css"
import React from 'react'
import {Link} from "react-router-dom"

import {useLogout} from "../hooks/useLogout"

export default function Navbar() {
  const {logout} = useLogout()
  return (
        
    <nav className={styles.navbar}>
        <ul>
            <ol className={styles.title}>STA</ol>
            <ol><Link to ="/login">Login</Link></ol>
            <ol><Link to = "/signup">Signup</Link></ol>
            <ol><Link to = "/feed">Feed</Link></ol>
            <ol><Link to = "https://pages.razorpay.com/pl_KlizCHgO1U1j6y/view">Donate</Link></ol>

            <ol>
              <button className="btn"  onClick={logout}>Logout</button>
            </ol>
        </ul>

    </nav>
      
  )
}
