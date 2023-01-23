import React from 'react'
//import {db} from "../Config"
//import {collection} from "firebase/firestore"
import displayRazorpay from './Payment'
import {useState} from "react";
import {storage} from "../Config"
import {v4} from "uuid";
import {uploadBytes,ref} from "firebase/storage"
function get_random_number(min,max)
{
  var randomnumber=Math.floor(Math.random()*(max-min+1))+min;
  return randomnumber
}


const Signup = () => {
  const payment_happened=false
  const user_exists=false
  const [imageUpload,setImageUpload] = useState(null);
  const[details,setDetails] =useState({
    name:"",
    designation:"",
    date_of_admission:""

  })

  const handleChange=(e)=>{
    const{name,value} = e.target 
    setDetails((prev)=>{
      return {...prev,[name]:value};
    });

  };

  console.log(details)

  const uploadImage=()=>{
    if(imageUpload== null) return ;
    const imageRef=ref(storage,`images/${imageUpload.name}`);
    uploadBytes(imageRef,imageUpload).then(()=>{
      alert("Image uploaded")
    });

  }
  async function  start_registration(){
    /*user_exists=check_user()
    if (user_exists)
    {
      alert("You have already registered click on login and sign in with your sta-id") 
      window.location.href=""
      return 

    }*/
    displayRazorpay()
    if (payment_happened)
    {
      console.log("payment happened")
      //add_data()
    }
  }

  async function add_data()
  {

  }

  async function check_if_data_exists(teacherRef)
  {
    const docSnap=getDoc(teacherRef);
    if(docSnap.exists())
    {
      alert("Teacher is already registered")
      window.location.href=""
    }
  }





  return (
    <div>
      <form action='#'>
        <label>
          Name:
          <input type='text' name="teacher_name" placeholder='Enter your name' onChange={handleChange} required />
        </label>
        <br></br>

        <label> 
          Designation:
          <input type="text" name="designation" onChange={handleChange} required/>
        </label>
        
          <br></br>
          <label>
            Date of Admission:
            <input type="date" name="join" onChange={handleChange} placeholder="MM/DD/YY" required/>
          </label>
          <br></br>
        <label>
          Passport_Photo:
          <input type="file" accept="image/*" id="upload" required onChange={(event)=>{
            setImageUpload(event.target.files[0]);
          }}/>
        </label>
        <br></br>
        <input type="submit" value="Submit"  onClick={start_registration} target="_blank" rel="noopener noreferrer"/>
      </form>
    </div>
  )
}

export default Signup