import React from 'react'
import {db} from "../Config"
import {addDoc, collection, getDoc, getDocs} from "firebase/firestore"
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

  const [paymentSuccessful,setPaymentSuccessful]=useState(false);
  const[userExists,setUserExists]=useState(false)
  const [databaseAddition,setDataAddition]=useState(false)
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

 
  const  start_registration=()=>{

    async function loadScript (src)
    {
    return new Promise((resolve)=>{
        const script=document.createElement('script')
        script.src=src
        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
    }

    const check_user= async ()=>{
      const teacher_ref=doc(db,'Teachers_Data',details.appointment_order_number)
      const docSnap=await getDoc(teacher_ref)
      if(docSnap.exists())
      {
        alert("Teacher Has Already Registered. Go to Login instead")
        setUserExists(true)
      }

    }
    if(userExists)
    {

      return 
    }

    else
    {

      const make_payment= async()=> 
      { 
         const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")
          if(!res)
          {
              alert("Razorpay SDK Failed Make sure you are connected to the internet")
              return false 
          }
          const data=await fetch('http://localhost:1337/razorpay',{method:'POST'}).then((t)=>
           t.json())

        const options={
           key:"rzp_test_O1TBRbokgN3lgn",
           amount:data.amount,
          currency:data.currency,
          name:"STA fee",
          order_id:data.id,
          handler:function(response)
          {
              if(response.status==="success" || response.status==='authrozied')
            {
             alert(`Your razorpay order id is ${response.razorpay_order_id}`)
             alert( `Your razorpay payment id is ${response.razorpay_payment_id}`)
             alert(`Your razorpay payment signature is ${response.razorpay_signature}`)
             alert('Payment successful  please take the screen shot of this before you click ok for proof')
             setPaymentSuccessful(true)
           }
            else
            {
                setPaymentSuccessful(false);
            }
        },
        theme:{
            color:"#FFE4C4"
        }

    }
    const paymentObject=new window.Razorpay(options)
    paymentObject.open()
  }
   if (paymentSuccessful)
    {
      alert("Payment Successful")
      const add_data= async ()=>{
        try{
          const docRef=await addDoc(collection(db,"Teachers_Data"),{
            name:details.name,
            email:details.email,
            date_of_birth:details.date_of_birth,
            appointment_date:details.appointment_date,
            retirement_date:details.retirement_date,
            whatsapp_number:details.whatsapp_number,
            appointment_order_number:details.appointment_order_number,
            appoitment_order_photo:details.appointment_order_photo.name,
            teacher_photo:details.files.teacher_photo.name,
            gpf:details.gpf , 
            home_address:details.home_address,
            posting_address:details.posting_address,
            district:details.district,
            bac:details.bac,
            designation:details.designation,
            agree:details.agree,
            sta:sta_id
          });
          alert(`Documents added to database with id ${docRef.id}`)
          setDataAddition(true)
        } catch(e)
        {
          alert(`Error adding documents ${e}`)
          setDataAddition(false)
        }


        
      }
    }

    if(databaseAddition)
    {
      const uploadImage=()=>{
        if(imageUpload== null) return ;
        const imageRef=ref(storage,`images/${imageUpload.name}`);
        uploadBytes(imageRef,imageUpload).then(()=>{
          alert("Images uploaded")
        }).catch(e)
        {
          alert(e);

        }

    
      }
    }
    else
    {
      return 
    }


  /*async function check_if_data_exists(teacherRef)
  {
    const docSnap=getDoc(teacherRef);
    if(docSnap.exists())
    {
      alert("Teacher is already registered")
      window.location.href=""
    }
  }
  */





{/* return (
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
        */}

        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name.value}
              onChange={handleInputChange}
              required
            />
            <br></br>
            <input
              type="email"
              name="email"
              value={form.email.value}
              onChange={handleInputChange}
              required
            />
            <br></br>
            <input
              type="date"
              name="date_of_birth"
              value={form.date_of_birth.value}
              onChange={handleInputChange}
              required
            />
            <br></br>
      
            <input
              type="date"
              name="appointment_date"
              value={form.address.value}
              onChange={handleInputChange}
              />
              <br></br>

              <input
                type="date"
                name="retirement_date"
                value={form.retirement_date.value}
                onChange={handleInputChange}
                required
              />

              <input 
                type="text"
                name="home_address"
                value={form.home_address.value}
                onChange={handleInputChange}
                required
                />

              <input
            <button type="submit" disabled={!isFormValid}>
              Submit
            </button>
          </form>
        );



        }

export default Signup


        