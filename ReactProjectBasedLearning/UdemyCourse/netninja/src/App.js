import './App.css';
// use state is a react hook which we can use for differnt purposes 
// all react hook start with the keyword use 
// component data which can change over time 
// whenever the state value changes it triggers our component to be changed over time 
import { useState } from 'react'






function App() {
  // we can use array destructuring to grab this value 
  const [name,setName]=useState('mario')
  // first one is the actaul state value and the second one is the function that is used to 
  // change the state value 
  const handleClick=()=>{
    // console log runs before the update actually happens 
    setName(name === "mario"?"luigi":"mario")
  }
  console.log(handleClick)
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}> Change name</button>
    </div>
  );
}

export default App;
