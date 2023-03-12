//use local storage for storing data

import React from 'react'
import { useEffect,useState } from 'react'
const PREFIX="whatsapp-clone"
// easy to find in debug menu

export default function useLocalStorage(key,initialValue) {
    // let's get our prefiexed key
    const prefiexedKey = PREFIX+key
    const[value,setValue] = useState(()=>{
        // get the json value from browser so use the useState funciton 
        const jsonValue = localStorage.getItem(prefiexedKey)
        if(jsonValue) return JSON.parse()
    })
  
}
