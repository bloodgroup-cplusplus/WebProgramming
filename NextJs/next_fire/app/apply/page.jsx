'use client'
import React from "react"
import Image from "next/image"
import logo from "../Images/Seal_of_Sikkim.png"
import { useAuthContext } from "../(context)/AuthContext"
import Pay from "../(razorpay)/pay"
import { usePathname,useSearchParams } from 'next/navigation';
import {useRouter} from "next/navigation"

function useNavigationEvent()
{
  const pathname= usePathname()
  const searchParams = useSearchParams()
  const value=searchParams.toString()
  const myArray = value.split("&")
  const college_name = myArray[0].substring(myArray[0].indexOf("=")+1)
  const course_name = myArray[1].substring(myArray[1].indexOf("=")+1)
  return {college_name,course_name}
}
  
function Page()  {
  
  const router = useRouter()
  const {user} = useAuthContext() 
  const{college_name,course_name} = useNavigationEvent()
  const[resultPhoto,setResultPhoto] = React.useState(null)
  const handleResultPhotoChange=(e)=>{
    setResultPhoto(null)
    let selected = e.target.files[0]
    setResultPhoto(selected) 
  }

  const handleForm = async (event) => {
    event.preventDefault()

    const { result, error } = await Pay(user.displayName,college_name,course_name,user.email)

    if (error) {
        return console.log(error)
    }

    // else successful
    console.log(result)
  }
  if(user)
  {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image className=" mr-3" width={64} height={64} src={logo} alt="logo"/>
          Application Form
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form className="space-y-6 md:space-y-6" onSubmit={handleForm}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" value={user.email} placeholder={user.email} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""/>
                  </div>

                  <div>
                    <label for = "text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input type = "text" name = "first_name" id="name" value = {user.displayName} placeholder={user.displayName} className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required =""/>
                  </div>
                  
                  <div>
                    <label for = "text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">College</label>
                    <input type = "text" name="college_name" id="name" value ={college_name}  className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 "/>
                  </div>

                  <div>
                    <label for = "text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Applied</label>
                    <input type = "text" name = "course" id="name" value={course_name} placeholder={"Bacholers in Arts Economics"} className = "bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"/>
                  </div>

                  <div>
                    <label for ="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Attach Your Class 12 Result</label>
                    <input type = "file" name="result" id="photo" placeholder="Attach a formal photo" onChange={handleResultPhotoChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pay Fees</button>
              </form>
          </div>
      </div>
  </div>
</section>
  )

  }
  else
  {

      
       return  router.push("/signin")
      

  }
   

      
      
}

export default Page



