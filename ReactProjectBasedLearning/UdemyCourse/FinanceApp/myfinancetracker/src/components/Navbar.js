import styles from "./Navbar.module.css"
import React from 'react'
import {Link} from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

import {useLogout} from "../hooks/useLogout"

export default function Navbar() {
  const {logout} = useLogout()
  const{user} = useAuthContext()
  return (
        
    <nav className={styles.navbar}>
        <ul>
            <ol className={styles.title}>STA</ol>
            {!user&&(
            <>
            <ol><Link to = "/">Home</Link></ol>
            <ol><Link to ="/login">Login</Link></ol>
            <ol><Link to = "/signup">Signup</Link></ol>
            <ol><Link to = "/feed">Feed</Link></ol>
            <ol><Link to = "https://pages.razorpay.com/pl_KlizCHgO1U1j6y/view" target={"_blank"}>Donate</Link></ol>
            </>
            )}
            {user &&(
            <>
            <ol>{user.displayName}</ol>
            <ol><Link to = "/home">Home</Link></ol>
            <ol><Link to = "/feed">Feed</Link></ol>
            <ol><Link to = "https://pages.razorpay.com/pl_KlizCHgO1U1j6y/view" target={"_blank"}>Donate</Link></ol>
            <ol>
                 <button className="btn"  onClick={logout}>Logout</button>
            </ol>
              
            </>
            )}
        </ul>

    </nav>
      
  )
}
