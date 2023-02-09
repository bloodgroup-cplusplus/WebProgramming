import styles from "./Profile.module.css"

import {useAuthContext} from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"

import React from 'react'
import Griviences from "./Griviences"

export default function Profile() {
  const {user}=  useAuthContext()
  const{documents,error} = useCollection("Griviences")
  return (
    <div className={styles.container}>
     <div className={styles.content}>
      {error && <p>Error</p>}
      {documents && <GrivienceList griviences={documents}/>}

    </div> 
    <div className={styles.sidebar}>

    <Griviences uid={user.uid}/>

    </div>
    </div>
  )
}
