import styles from "./Profile.module.css"

import React from 'react'
import Griviences from "./Griviences"

export default function Profile() {
  return (
    <div className={styles.container}>
     <div className={styles.content}>
        Griviences List
    </div> 
    <div className={styles.sidebar}>

    <Griviences/>

    </div>
    </div>
  )
}
