import React from 'react'
import { useState } from 'react'

export default function TripList() {
    // store the data from fetch to a state 
    const [trips,setTrips]=useState([])
    console.log(trips)
    fetch('http://localhost:3000/trips')
    .then(response =>response.json()) // this returns the json 
    .then(json=>setTrips(json))// once we have the json we fire the function it is an asynchronous call 
    // once the setTrips is updated we it rerenders the component so we see that the program 
    // keeps on running once the fetch command is carried out 
    // we get into a infinite loop 
    
  return (
    <div>
        <h2>Trip List</h2>
      
    </div>
  )
}
