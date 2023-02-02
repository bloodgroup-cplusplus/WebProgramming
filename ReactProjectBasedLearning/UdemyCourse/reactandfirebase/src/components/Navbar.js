
//links
import { Link } from "react-router-dom"

// importing styles 
import styles from './Navbar.module.css'

import React from 'react'

export default function Navbar() {
  return (
      
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>STA</li>


            <li><Link to = "/login"> Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </ul>

    </nav>
  )
}
