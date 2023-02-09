import React, { useEffect } from 'react'
import {useState} from "react"
import { useFirestore } from '../../hooks/useFirestore'

export default function Griviences({uid}) {
    const [name,setName] = useState('')
    const [schoolName,setSchoolName] = useState('')
    const [staid,setStaId] = useState('')
    const[grivience,setGrevience] = useState('')
    const{addDocument,response} = useFirestore('Griviences')

    const handleSubmit=(e)=>{
        e.preventDefault()
        addDocument({
            name,
            schoolName,
            staid,
            grivience,
            uid
            

        })
    }
    useEffect(()=>{
        if(response.success)
        {
            setName('')
            setSchoolName('')
            setStaId('')
            setGrevience('')
            response('')
        }
    },[response.success])
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
                <textarea
                    required
                    onChange={(e)=>setGrevience(e.target.value)}
                    value={grivience}
                    />
            </label>
            <button>Submit</button>
        </form>
      
    </>
  )
}
