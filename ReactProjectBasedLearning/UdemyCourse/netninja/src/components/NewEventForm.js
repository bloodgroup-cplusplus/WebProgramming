import './NewEventForm.css'
import { useState } from 'react'

export default function NewEventForm({addEvent})
{
    const[title,setTitle]=useState('')
    const[date,setDate]=useState('')
    const resetForm=()=>{
        setTitle('')
        setDate('')
    }

    const handleSubmit=(e)=>{

        // the default behaviour is to refresh the page when form is submitted 
        // we want to handle and do something else 
        e.preventDefault()
        // collect all of the data we need for new event 
        const event={
            title:title,
            date:date,
            id:Math.floor(Math.random()*100000)
        }
        console.log(event)
        // everytime user submits the form reset it 
        addEvent(event)
        resetForm()

    }

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
            
                <input 
                type="text" 
                onChange={(e)=>setTitle(e.target.value)} 
                id="title"
                value={title}
                />
            </label>
            <label>
                <span> Event Date:</span>
                <input 
                type= "date"
                onChange={(e)=>setDate(e.target.value)}
                value={date}
                 />
            </label>

            <button>Submit</button>
            <p>title-{title}, date-{date}</p>
            <p onClick={resetForm}>reset the form</p>


        </form>
        
    )
}