import './NewEventForm.css'
import { useState,/*useRef*/ } from 'react'

export default function NewEventForm({addEvent})
{
    const[title,setTitle]=useState('')
    const[date,setDate]=useState('')
    const[location,setLocation]=useState('Liverpool')



    /* this is how to do the form thing using useRef hooks this is the declaration part


   const title=useRef()
   const date=useRef()*/


    const resetForm=()=>{


        setTitle('')
        setDate('')
        setLocation('Liverpool')


     /* updating using ref instead of using state variables 
        title.current.value=''
        date.current.value=''

        */
    }

    const handleSubmit=(e)=>{

        // the default behaviour is to refresh the page when form is submitted 
        // we want to handle and do something else 

        e.preventDefault()
        console.log(title,date)

        // collect all of the data we need for new event this is how we collect using useRef hook 


/*        const event={
            title:title.current.value,
            date:date.current.value,
            id:Math.floor(Math.random()*100000)
        }*/

        // this is how we collect form data using state 

        const event ={
            title:title,
            date:date,
            location:location,
            id:Math.floor(Math.random()*100000)
        }


        //console.log(event)
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
                id="title"
                onChange={(e)=>setTitle(e.target.value)}
                //ref={title} ref is used when we collect data using ref hook we use value for state
                value={title}
                />
            </label>
            <label>
                <span> Event Date:</span>
                <input 
                type= "date"
                onChange={(e)=>setDate(e.target.value)}
                //ref={date}
                value={date}
                 />
            </label>
            <label>
                <span> Event location :
                    <select onChange={(e)=>setLocation(e.target.value)}>
                        <option value="Liverpool">Liverpool</option>
                        <option value="London">London</option>
                        <option value="Cardiff">Cardiff</option>
                    </select>
                </span>
            </label>

            <button>Submit</button>
            <p>title-{title}, date-{date}</p>
            <p onClick={resetForm}>reset the form</p>


        </form>
        
    )
}