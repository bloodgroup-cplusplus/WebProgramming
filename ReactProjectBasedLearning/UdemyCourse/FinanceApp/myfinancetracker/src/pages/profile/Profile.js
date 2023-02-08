import styles from "./Profile.module.css"

import {useAuthContext} from "../../hooks/useAuthContext"

import React from 'react'
import Griviences from "./Griviences"

export default function Profile() {
  const {user}=  useAuthContext()
  return (
    <div className={styles.container}>
     <div className={styles.content}>
        Griviences List
    </div> 
    <div className={styles.sidebar}>

    <Griviences uid={user.uid}/>

    </div>
    </div>
  )
}
