import React from 'react'
import { useState } from 'react';
// import some styles from hole modules 
// styles ( import stlyes from )
import styles from "./Profile.module.css"

export default function GriviencesList({griviences}) {
  const[currentPage,setCurrentPage] = useState(1);
  const chunkSize=3;

  // divide the form responses into chunks of 5

  const formResponseChunks= griviences.reduce((acc,curr,i)=>{
    const chunkIndex=Math.floor(i/chunkSize)
    if(!acc[chunkIndex])
    {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(curr)
    return acc;
  },[]);

  // get the current chunk of form responses 
  const currentFormResponses=formResponseChunks[currentPage-1];

  return (
    <> 
    <ul className={styles.transactions}>
        {currentFormResponses.map((transaction)=>(
            <li key= {transaction.id}>
                <p className={styles.amount}>{transaction.grivience}</p>
            </li>
        ))}

    </ul>
    <div>
      {currentPage>1 &&(
        <button className={styles.button} onClick={()=>setCurrentPage(currentPage-1)}>
          Previous
        </button>
      )}
      {currentPage< formResponseChunks.length &&(
        <button className={styles.button} onClick={()=>setCurrentPage(currentPage+1)}>
          Next
        </button>
      )}
    </div>

    </>
  )
}
