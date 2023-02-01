import React from 'react'
import { useState } from 'react'
// when we export a default value we don't import it using curly braces 
import {useFetch} from '../hooks/useFetch'

//styles 
import './TripList.css'

export default function TripList() {
    // store the data from fetch to a state 
    //const [trips,setTrips]=useState([])
    const[url,setUrl]=useState('http://localhost:3000/trips')
    //console.log(trips)
    //fetch('http://localhost:3000/trips')
    //.then(response =>response.json()) // this returns the json 
    //.then(json=>setTrips(json))// once we have the json we fire the function it is an asynchronous call 
    // once the setTrips is updated we it rerenders the component so we see that the program 
    // keeps on running once the fetch command is carried out 
    // we get into a infinite loop 
    // we can stop this by using a use effect hook 
    const {data:trips,isPending} = useFetch(url)

    // this function perfomrs the fetch request 
    //const fetchTrips= useCallback(async()=>{
     //   const response=await fetch(url)
      //  const json = await response.json()
       // setTrips(json)
    //},[url])



// we need another way to perform side effects
// use effects allows us to run the codee cetain times when conditions are met 
// so that we don't end up in an infinite loop at the component 
// we need to use the hook in the component 
   // useEffect(()=>{
        // we cannot use async and await in useEffect we will be sticking with 
        // the then keyword 
        // since we only need the data to be fetched once we keep it inside the uesEffect hook 
        //fetch(url).then(response=>response.json())
        //.then(json=>setTrips(json))
        //fetchTrips()

        // use effect only runs at start or dependency value changes 
        // it only runs once it only runs initially at value evaluation 
        // let's say the api endpoint is dynamic and it might change at 
        // user changing of button 
        // we add url aas a dependency as our url could be something dynamic 
        // on adding a dynamic url our use effect function has a dependency over
        // the said url 
        // for component evaluation from second time it will trigger the use effect 
    //},[fetchTrips])
    // we see that each time react renders it doesn't see within the function 
    // but it just sees the function references instead of function 
    // so we keep on geeting the infinite loop despite calling it 
    // to prevent this we use something known as the function callback 

    //console.log(trips)
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
        {isPending && <div>Loading trips..</div>}
        <ul>
            { trips && trips.map(trip=>(
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
            ))}
            
        </ul>
        <div className='filters'>
            <button onClick={()=> setUrl('http://localhost:3000/trips?loc=europe')}>
                European Trips
            </button>
            
            <button onClick={()=>setUrl("http://localhost:3000/trips")}>
                All Trips
            </button>
        </div>
      
    </div>
  )
}
