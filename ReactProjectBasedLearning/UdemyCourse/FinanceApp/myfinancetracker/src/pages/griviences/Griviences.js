import styles from "./Profile.module.css"

import {useAuthContext} from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"


import React from 'react'
import GriviencesForm from "./GriviencesForm"
import GriviencesList from "./GriviencesList"


export default function Griviences() {
  const {user}=  useAuthContext()
  const{documents,error} = useCollection("Griviences")
  return (
    <div className={styles.container}>
     <div className={styles.content}>
      {error && <p>Error</p>}
      {documents && <GriviencesList griviences={documents}/>}

    </div> 
    <div className={styles.sidebar}>

    <GriviencesForm uid={user.uid}/>

    </div>
    </div>
  )
}
