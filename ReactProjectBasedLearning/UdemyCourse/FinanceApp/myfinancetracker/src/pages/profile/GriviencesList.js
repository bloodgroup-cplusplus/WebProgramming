import React from 'react'
// import some styles from hole modules 
// styles ( import stlyes from )
import styles from "./Profile.module.css"

export default function GriviencesList({griviences}) {
  return (
      
    <ul className={styles.transactions}>
        {griviences.map((transaction)=>(
            <li key= {transaction.id}>
                <p className={styles.amount}>{transaction.grivience}</p>
            </li>
        ))}

    </ul>
  )
}
