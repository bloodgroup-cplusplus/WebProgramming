import React from 'react'
import {useState} from 'react';
import {FaTrashAlt} from "react-icons/fa"


const Content = () => {
    const[items,setItems]=useState([
        {
            id:1,
            checked:false,
            item: "On half pound bag of cocoa covered Almonds unsalted"

        },

        {
            id:2,
            checked:false,
            item: "Item 2"

        },


        {
            id:3,
            checked:false,
            item: "Item3"

        },


 
    ]);

//-------------------------------------------------------------------------------------------------
    // STATE AND STATE VARIABLES
    // const[name,setName] = useState("")
    // const[count,setCount] = useState(0);
    /*const handleNameChange=()=>{
        const names=["Berus","Kyle","Chad"];
        const int = Math.floor(Math.random()*3);
        setName(names[int]);
    }

    const handleClick=()=>{
        console.log(count)
        setCount(count+1)
        setCount(count+1)
        // the above two lines doesn't work like traditional system ( doesn't increase ount by 2
        // instead it increases value by 1 only)
    }

    const handleClick2=(name) =>{
        console.log(`${name} was clicked`)
    }

    const handleClick3 =(e)=>{
        console.log(e.target.innerText)
    }*
    <main>
        <p>
             Hello {name}!
            <br></br>
             the count is {count}!
        </p>
        <button onClick={handleNameChange}>Chage Name</button>
        <button onClick={handleClick}>Countr</button>
        
        <button onClick={()=> {handleClick2('Dave')}}>Click It</button>
        <button onClick={(e)=>handleClick3(e)}>Click It</button>
    </main>*/

//-------------------------------------------------------------------------------------------


  return (
    <main>
        <ul>
            {items.map((item)=>(
                <li className="item" key={item.id}>
                    <input 
                        type="checkbox"
                        checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <FaTrashAlt 
                            role="button" 
                            tabIndex="0"/>
                </li>
            ))}
        </ul>

    </main>
      )
            }


export default Content