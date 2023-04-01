import React from 'react'
import { useState } from 'react'
import { useAuthContext } from '../Hooks/useAuthContext'
import {useFirestore} from "../Hooks/useFirestore"

const AddGrivience = () => {
  const{user} = useAuthContext()
  const[schoolName,setSchoolName] = useState("")
  const[staid,setStaId] = useState("")
  const[headline,setHeadline] = useState("")
  const[grivience,setGrivience]=useState("")
  const{addDocument,response}=useFirestore("Griviences")
  const uid = user.uid
  const email = user.email
  const name = user.displayName
  console.log(email, name)

  const handleSubmit=(e)=>{
    e.preventDefault()
    addDocument({
      name,
      email,
      schoolName,
      staid,
      headline,
      grivience,
      uid
    })
  }


  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center h-auto">
  <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Grivience Form</h2>

      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

      
        
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
     
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Write a grivience
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5 h-auto" onSubmit={handleSubmit}>
              

              <div>
                  <label for="school_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">School Name</label>
                  <input type="text" value={schoolName} onChange={(e)=>setSchoolName(e.target.value)} name="school_name" id="school" placeholder="School Name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>

              <div>
                  <label for="sta_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">STA ID</label>
                  <input type="text" value={staid} onChange={(e)=>setStaId(e.target.value)} name="sta_id" id="sta_id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="STA ID" required/>
              </div>
              <div>
                  <label for="headline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Headline For Your Grivience</label>
                  <input type="text" value={headline} onChange={(e)=>setHeadline(e.target.value)} name="sta_id" id="sta_id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short Grivience Headline" required/>
 
              </div>


              <div className="sm:col-span-2">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Grivience</label>
                        <textarea  value={grivience} onChange={(e)=>setGrivience(e.target.value)} id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write your grivience here" required></textarea>                    
              </div>



              <div className="flex items-start">
                  
                  
              </div>
              <button type="submit" className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add a Grivience</button>
          </form>
      </div>
  </div>
  </div>
</section>
</>





  )
}

export default AddGrivience