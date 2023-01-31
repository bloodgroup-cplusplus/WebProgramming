import './App.css';
// use state is a react hook which we can use for differnt purposes 
// all react hook start with the keyword use 
// component data which can change over time 
// whenever the state value changes it triggers our component to be changed over time 
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'






function App() {
  // we can use array destructuring to grab this value 
  const [name,setName]=useState('mario')
  const [showEvents,setShowEvents]= useState(false); 
  const[showModal,setShowModal] = useState(true)
  // first one is the actaul state value and the second one is the function that is used to 
  // change the state value 

  // let's work with array of states 
  // state varaibles should be unique 

  // this is going to be array of objects 
  // each object is a state 
  // we want to cycle through each array and output a bit of template for each one .

  // we can output a title in a h2 or something 
  const[events, setEvents] = useState([
    {title:"mario's birthday bash", id:1},
    {title:"browser's live stream",id:2},
    {title:"Race on moo moo farm ", id:3}
  ])

  console.log(showEvents)

  

  const handleClick=(id)=>{
    // console log runs before the update actually happens 
    setName(name === "mario"?"luigi":"mario")
    // we will use javascirpt filter method 
    //setEvents(events.filter((event)=>{
      // if we say true means all items stay in the filtered array
     // return  id!==event.id 
    //}))
    setEvents((prevEvents)=>{
      return events.filter((event)=>{
        return id!==event.id
      })
    })
  }
    // the way we can cycle is using the map method ( higher order functions )

    // what is a key prop 
    // a key prop is something that react uses to keep track of the items of a map 
    // it is used for efficient removal addtion 
    // keep each item unique key value 
    // key is something that is unique and 
    const handleClose=()=>{
      setShowModal(showModal?false:true)
    }
    
    console.log(showModal)

  const subtitle= "Chad leborn"
  return (
    <div className="App">
      
      <Title title="Events in your Area" subtitle={subtitle}/>
      <Title title="Another title" subtitle="another subtitle"/>
      <h1>My name is {name}</h1>
      {showEvents &&(
      <div>
      <button onClick={()=>setShowEvents(false)}> Hide Events</button>
      </div>
      )}
      {!showEvents &&(
      <div>
        <button onClick={()=> setShowEvents(true)}>show event</button>
      </div>
      )}
      { showEvents && events.map((event,index)=> (
        <div key={event.id}>
          <h2> {index} - {event.title}</h2>
          <button onClick={()=>{handleClick(event.id)}}>delete-event</button>
          </div>
      ))}

    {/*<Modal>
      <h2> Get 10% off </h2>
      <p>Use the code CHAD10</p>
      </Modal> */}

      <button onClick={handleClose}>ShowPopup</button>
      {showModal &&<Modal handleClose={handleClose} isSalesModal={true}>
        <h2>Terms and Conditions</h2>
        <p> Terms and Conditions lorem ipsum dolor sit amet, consect</p>
      </Modal>}
      <div>
        <button onClick={()=> setShowModal(true)}>Add New Event</button>
      </div>

    </div>

  );
}

export default App;
