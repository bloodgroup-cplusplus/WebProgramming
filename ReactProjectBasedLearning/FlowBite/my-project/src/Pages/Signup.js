import React from 'react'
import sta_logo from "../Components/Images/sta_logo.png"
import {useState,useEffect} from "react"
import {useSignup} from "../Hooks/useSignup"
import{usePayment} from "../Hooks/usePayment"



function Signup() {

  const [email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[phoneNumber,setPhoneNumber]=useState("")
  const[dateOfBirth,setDateOfBirth] = useState("")
  const[formalPhoto,setFormalPhoto] = useState(null)
  const[school,setSchool] = useState("")
  const[designation,setDesignation] = useState("")
  const [district,setDistrict] = useState("")
  const[bac,setBac] = useState("")
  const[appointmentOrderNumber,setAppointmentOrderNumber]=useState("")
  const[appointmentOrderPhoto,setAppointmentOrderPhoto] = useState("")
  const[gpfCpfNumber,setGpfCpfNumber] = useState("")
  const[retirementDate,setRetirementDate] = useState("")
  const [loading,setLoading] = useState(false)
  const [displayName, setDisplayName] = useState("")
  const[fileUploadError,setFileUploadError] = useState(null);
  const{payment,isVerified}=usePayment()
  const {signup,isPending,error} = useSignup()

  const handleSubmit= async(e)=>{
    e.preventDefault()
    setLoading(true);
    try{
          await payment(email,password,phoneNumber,dateOfBirth,school,designation,district,bac,appointmentOrderNumber,gpfCpfNumber,retirementDate,displayName,formalPhoto,appointmentOrderPhoto,signup) 
    }
    catch(error)
    {
      console.error(error)
      alert('payment failed')
    }
    finally{
      setLoading(false)
    }
}
  useEffect(()=>{
    console.log(isVerified)
    if(isVerified)
    {
      console.log("chad")
    }
},[isVerified])

const handleFormalPhotoChange=(e)=>{
  setFormalPhoto(null)
  let selected=e.target.files[0]
  if(!selected)
  {
    setFileUploadError("Please Select a file")
    return 
  }
  if(!selected.type.includes('image'))
  {
    setFileUploadError("selected file must be an image")
    return 
  }

  if(selected.size>100000000)
  {
    setFileUploadError("Image file size must be less than 10 mb")
    return 
  }
  setFileUploadError(null)
  setFormalPhoto(selected)
  console.log("Teacher Photo Uploaded")
}


const handleAppointmentOrderPhotoChange=(e)=>{
  setAppointmentOrderPhoto(null)
  let selected=e.target.files[0]
  if(!selected)
  {
    setFileUploadError("Please Select a file")
    return 
  }
  if(!selected.type.includes('image'))
  {
    setFileUploadError("selected file must be an image")
    return 
  }
  if(selected.size>10000000000)
  {
    setFileUploadError("Image File size must be less than 10mb")
    return 
  }
  setFileUploadError(null)
  setAppointmentOrderPhoto(selected)
  console.log("Appointment order photo uploaded")
}
return (
    
    <>

<div>
  <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src={sta_logo} alt="logo"/>
          STA
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Register For Membership
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>

                </div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input type="" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>

                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
    </div>
  </section>
    
</div>
</>

  )
}

export default Signup
