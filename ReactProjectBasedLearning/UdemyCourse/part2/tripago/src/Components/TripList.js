import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

//styles 
import './TripList.css'

export default function TripList() {
    // store the data from fetch to a state 
    const [trips,setTrips]=useState([])
    //console.log(trips)
    //fetch('http://localhost:3000/trips')
    //.then(response =>response.json()) // this returns the json 
    //.then(json=>setTrips(json))// once we have the json we fire the function it is an asynchronous call 
    // once the setTrips is updated we it rerenders the component so we see that the program 
    // keeps on running once the fetch command is carried out 
    // we get into a infinite loop 
    // we can stop this by using a use effect hook 



// we need another way to perform side effects
// use effects allows us to run the codee cetain times when conditions are met 
// so that we don't end up in an infinite loop at the component 
// we need to use the hook in the component 
    useEffect(()=>{
        // we cannot use async and await in useEffect we will be sticking with 
        // the then keyword 
        // since we only need the data to be fetched once we keep it inside the uesEffect hook 
        fetch('http://localhost:3000/trips').then(response=>response.json())
        .then(json=>setTrips(json))

    },[])

    console.log(trips)
    // use effect is automatically going to run the first function when our compnent first 
    // runs and evaluates 
    // when the component is re-evaluated  the useeffect will only change if any
    // of its dependencies has changed value since the last evaluation 
    // when the dependency array is empty it means that the function inside the use 
    // effect is only going to call once at the start it does not have any dependency 
    // since this function only ever runs once its a good place to fetch some data 




    
  return (
    <div>
        <h2>Trip List</h2>
        <ul>
            {trips.map(trip=>(
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
            ))}
            
        </ul>
      
    </div>
  )
}
