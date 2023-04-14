import React from 'react'
import sta_logo from "../Components/Images/sta_logo.webp"
import seal from "../Components/Images/seal.webp"
import { useAuthContext } from '../Hooks/useAuthContext'
import {useFirestore} from "../Hooks/useFirestore"



const Profile = () => {
  const{user} =useAuthContext()
  const{result} = useFirestore("Teachers_Data",user)
  console.log(result)
  return (
    <>


{result &&<div className="w-full max-w-sm bg-white border justify-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-center px-4 pt-4">
       
       
    </div>
    <div className="flex justify-center md:m-auto flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={sta_logo} alt="sta_logo"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sikkim Teachers Association</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">TEACHERS NAME: {result['displayName']} </span> 
        <span className="text-sm text-gray-500 dark:text-gray-400">SCHOOL:{result['school']} </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">DESIGNATION: {result['designation']} </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">STA ID: {result['sta_id']} </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">VALID UPTO: 31 DECEMBER 2023 </span>
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={seal} alt="sta_seal"/>
      


        
        
    </div>
</div>
}

































</>


  )
}

export default Profile