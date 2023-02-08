import React from 'react'
import {useState} from "react"

export default function Griviences() {
    const [name,setName] = useState('')
    const [schoolName,setSchoolName] = useState('')
    const [staid,setStaId] = useState('')
    const[grivience,setGrevience] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({
            name,
            schoolName,
            staid,
            grivience

        })
    }
  return (
    <>
        <h3>Add a Grivience</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span> Your Name:</span>
                <input 
                type="text"
                required 
                onChange={(e)=>setName(e.target.value)}
                value={name}
                />
            </label>

            <label>
                <span> Your STA/ID:</span>
                <input 
                    type="text"
                    required
                    onChange={(e)=>setStaId(e.target.value)}
                    value={staid}
                    />
            </label>


            <label>
                <span> School Name:</span>
                <input 
                    type="text"
                    required 
                    onChange={(e)=>setSchoolName(e.target.value)}
                    value={schoolName}
                    />
            </label>

            <label>
                <span> Grivience:</span>
                <input 
                    type="message"
                    required
                    onChange={(e)=>setGrevience(e.target.value)}
                    value={grivience}
                    />
            </label>
        </form>
      
    </>
  )
}
