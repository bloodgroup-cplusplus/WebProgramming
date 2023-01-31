import React from 'react'
// the way we import a module is differnt from what normal css 
import styles form "./EventList.module.css"

export default function EventList({events,handleClick}) {
  return (
    <div>
    {events.map((event,index)=>(
        <div className='{styles.card}' key={event.id}>
        <h2>{index}-{event.title}</h2>
        <button onClick={()=>handleClick(event.id)}>Delete Event</button>
        </div>

    ))}
      
    </div>
  )
}
