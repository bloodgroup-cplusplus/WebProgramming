import React from 'react'
import { useState } from 'react'

import "./Create.css"
function Create() {
  // state for form fields 
  const[name,setName] = useState("")
  const[details,setDetails] = useState("")
  const[dueDate,setDueDate] = useState("")
  const[category,setCategory] = useState("")
  const[assignedUsers,setAssignedUsers] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(name,details,duedate)
  }
  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>
            Project Name:
            <input 
            required
            type="text"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
          </span>
        </label>


      <label>
          <span>
            Project Details:
            </span>
            <textarea 
            required
            type="text"
            onChange={(e)=>setDetails(e.target.value)}
            value={details}>
            </textarea>
        </label>




           <label>
          <span>
            Project Details:
            </span>
            <input
            required
            type="date"
            onChange={(e)=>setDueDate(e.target.value)}
            value={dueDate}/>
        </label>


        <label>
          <span>Project Category:</span>
          {/* category select here */}
        </label>

        <label>
          <span>Assign to : </span>
          {/*assigne select */}
        </label>



      </form>

    </div>
  )
}

export default Create