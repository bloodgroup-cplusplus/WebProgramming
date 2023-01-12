import {useState,useEffect} from "react";
import './App.css';
import {db} from './config'
import{collection,getDocs,addDoc,updateDoc,doc, deleteDoc} from 'firebase/firestore';

function App() {
  const[newName,setNewName]=useState("");
  const[newAge,setNewAge]=useState(0);
  const [users,setUsers] =useState([]);
  const usersCollectionRef=collection(db,"users");

  //C= create a new user
  const createUser=async()=>{

    // this takes two things 
    // collection ref 
    // it also takes in object containng the payload 
    // the data we want to add is the object containing name

    await addDoc(usersCollectionRef,{name:newName,age:Number(newAge)});


  };


  const updateUser= async (id,age)=>{

    const userDoc=doc(db,"users",id)
    const newFields={age:age+1}
    await updateDoc(userDoc,newFields);
  }



  const deleteUser=async(id)=>{
    const userDoc=doc(db,"users",id);
    await deleteDoc(userDoc);
  }


  useEffect(()=>{

    const getUsers=async () =>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));

    };
    //R= Read a user 
    getUsers();

  },[])


  return (<div className="App">
    
    <input 
    placeholder="Name...." 
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
    return (
    <div>
      {" "}
      <h1>Name:{user.name}</h1>
      <h1>Age:{user.age}</h1>
      <button 
        onClick={() =>{updateUser(user.id,user.age)}}
      >
        {" "}
        Increase Age: </button>
        <button 
          onClick={() =>{
            deleteUser(user.id);
          }}
          >
            {" "}
            Delete User
          </button>
    </div>
    );
  })}
    </div>
  
  );
}

export default App;
