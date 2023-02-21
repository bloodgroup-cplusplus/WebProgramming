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
    
  <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center h-auto">
  <h2 class="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Signup</h2>

      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

      
        
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Register For Membership
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>

                </div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input type="name" name="name" id="name" placeholder="Enter your full name" onChange={(e)=>setDisplayName(e.target.value)} value={displayName} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required=""/>

                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input type="email" name="email" id="email" placeholder="Enter your valid email" onChange={(e)=>setEmail(e.target.value)} value={email} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required=""/>
                  </div>
                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number (Whatsapp)</label>
                      <input type="text" name="phone_number" id="confirm-password" placeholder="Enter your valid whatsapp number"  onChange={(e)=>setPhoneNumber(e.target.value)} value = {phoneNumber} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>

                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                      <input type="date" name="date_of_birth" id="dob" placeholder="Date of birth"  onChange={(e)=>setDateOfBirth(e.target.value)} value={dateOfBirth} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>


                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valid Formal Photo</label>
                      <input type="file" name="formal_photo" id="photo" placeholder="Attach a formal photo"  onChange={handleFormalPhotoChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>



                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current School</label>
                      <input type="text" name="school" id="current_school" placeholder="Enter your current school"  onChange={(e)=>setSchool(e.target.value)} value={school} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>

                 


                  <div>

                  <label for="designation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
                      <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required placeholder="Current Deisgnation" value={designation} onChange={(e)=>setDesignation(e.target.value)}>
                      <option disabled selected>Select</option>
                          <option>PPT</option>
                          <option>PRT</option>
                          <option>GT</option>
                          <option>PGT</option>
                          <option>HMJHS</option>
                          <option>HMSS</option>
                          <option>HMPS</option>
                          <option>PRINCIPAL</option>
                          <option>OTHER</option>
                    </select>
                  </div>


                  <div>
                      <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        District (School)
                      </label>
                      <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="District of current School" value={district} onChange={(e)=>setDistrict(e.target.value)}>
                            <option disabled selected>Select</option>
                            <option>Gangtok</option>
                            <option>Geyzing</option>
                            <option>Mangan</option>
                            <option>Namchi</option>
                            <option>Pakyong</option>
                            <option>Soreng</option>
                      </select>

                  </div>




                  <div>
                      <label for="bac" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BAC (School)</label>
                      
                      <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="BAC of current school" value={bac} onChange={(e)=>setBac(e.target.value)}>
                              <option disabled selected> Select</option>
                              <option>Baiguney</option>
                              <option>Chongrang</option>
                              <option>Chumbung-Chakung</option>
                              <option>Chungthang</option>
                              <option>Daramdin</option>
                              <option>Dentam</option>
                              <option>Duga</option>
                              <option>Dzongu</option>
                              <option>Gangtok</option>
                              <option>Geyzing</option>
                              <option>Hee Martam</option>
                              <option>Jorethang</option>
                              <option>Kabi Tingda</option>
                              <option>Kaluk</option>
                              <option>Khamdong</option>
                              <option>Mangalbarey</option>
                              <option>Mangan</option>
                              <option>Martam</option>
                              <option>Melli Sumbuk</option>
                              <option>Namchi</option>
                              <option>Namthang</option>
                              <option>Pakyong</option>
                              <option>Parkha</option>
                              <option>Rakdong</option>
                              <option>Ranka</option>
                              <option>Ravangla</option>
                              <option>Regu</option>
                              <option>Rhenock</option>
                              <option>Soreng</option>
                              <option>Temi-Tarku</option>
                              <option>Wok Sikkip</option>
                              <option>Yangyang</option>
                              <option>Yuksom</option>
                      </select>
                  </div>


                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appointment Order Number</label>
                      <input type="text" name="appointment_order" id="appointment" placeholder="Appointment Order Number" onChange={(e)=>setAppointmentOrderNumber(e.target.value)} value={appointmentOrderNumber} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required=""/>
                  </div>

                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appointment Order Photo</label>
                      <input type="file" name="formal_photo" id="photo" placeholder="Appointment Order Photo"  onChange={handleAppointmentOrderPhotoChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>

                  <div>
                      <label for="gpfcpf" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GPF/CPF Number:</label>
                      <input type="text" name="gpf_cpf" id="gpfcpf" placeholder="GPF/CPF Number"  onChange={(e)=>setGpfCpfNumber(e.target.value)} value={gpfCpfNumber} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>

                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Retirement Date:</label>
                      <input type="date" name="date_of_birth" id="dob" placeholder="Retirement Date"  onChange={(e)=>setRetirementDate(e.target.value)} value={retirementDate} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>

                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="Create a password for your account" onChange={(e)=>setPassword(e.target.value)} value={password} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required=""/>
                  </div>

                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Continue to Razorpay</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
    </div>
  </section>
    

  )
}

export default Signup
