import './App.css';
import {useState,useEffect} from "react";
import {db} from './config'
import{collection,getDocs,addDoc} from 'firebase/firestore';

function App() {
  const[newName,setNewName]=useState("");
  const[newAge,setNewAge]=useState(0);
  const [users,setUsers] =useState([]);
  const usersCollectionRef=collection(db,"users");
  const createUser=async()=>{

    // this takes two things 
    // collection ref 
    // it also takes in object containng the payload 
    // the data we want to add is the object containing name

    await addDoc(usersCollectionRef,{name:newName,age:newAge});


  };
  useEffect(()=>{

    const getUsers=async () =>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));

    };
    getUsers();

  },[])


  return <div className="App">
    
    <input placeholder="Name...." 
    onChage={(event)=>{
      setNewName(event.target.value);
    }}
    />
    <input 
     type="number" 
     placeholder="Age..."
     onChange={(event)=>{
      setNewAge(event.target.value);
     }}
     />
    <button onClick={createUser}>Create User</button>
    {users.map((user)=>{
    return <div><h1>Name:{user.name}</h1>
    <h1>Age:{user.age}</h1>
    </div>
  })}
    </div>
  
}

export default App;
