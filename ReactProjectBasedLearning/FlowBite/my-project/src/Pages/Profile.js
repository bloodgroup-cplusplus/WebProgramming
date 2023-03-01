import React from 'react'
import sta_logo from "../Components/Images/sta_logo.png"
import seal from "../Components/Images/seal.png"
import { useAuthContext } from '../Hooks/useAuthContext'
import {useFirestore} from "../Hooks/useFirestore"



const Profile = () => {
  const{user} =useAuthContext()
  const{result} = useFirestore("Teachers_Data",user)
  console.log(result)
  return (
    <>


{result &&<div class="w-full max-w-sm bg-white border justify-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-center px-4 pt-4">
       
       
    </div>
    <div class="flex justify-center md:m-auto flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={sta_logo} alt="sta_logo"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sikkim Teachers Association</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Name: {result['displayName']} </span> 
        <span class="text-sm text-gray-500 dark:text-gray-400">SCHOOL:{result['school']} </span>
        <span class="text-sm text-gray-500 dark:text-gray-400">DESIGNATION: {result['designation']} </span>
        <span class="text-sm text-gray-500 dark:text-gray-400">STA ID: {result['sta_id']} </span>
        <span class="text-sm text-gray-500 dark:text-gray-400">VALID UPTO: 31 DECEMBER 2023 </span>
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={seal} alt="sta_seal"/>
      


        
        
    </div>
</div>
}

































</>


  )
}

export default Profile