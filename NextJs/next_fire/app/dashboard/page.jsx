'use client'
import React from "react"

import { useAuthContext } from "../context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Signout from "../firebase/auth/signout"
import Namchi from "../components/Namchi"
import Burtuk from "../components/Burtuk"
import Tadong from "../components/Tadong"





function Page()
{
    const {user} = useAuthContext()
    const router = useRouter()
    const handleForm = async (event) => {
        event.preventDefault()
    
        const { result, error } = await Signout();
    
        if (error) {
            return console.log(error)
        }
    
        // else successful
        console.log(result)
    }





    useEffect(()=>{
        if(user == null) router.push("/")
    },[user])

    return (
        <>
            <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Choose Your College Here</h1>
            <p className="mb-6 text-lg font-light text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Governement of Sikkim has 11 outstanding affliated under Sikkim University. All colleges equipped with world class infrastructure and facilities ensures a flying start to your career. </p> 
            <Tadong/>
            <Namchi/>
            <Burtuk/>
        </>

    )
}


export default Page;