'use client'
import React from "react"

import { useAuthContext } from "../context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Signout from "../firebase/auth/signout"





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

            <h1>Only logged in users can view this page as this is the dashboard</h1>
            <button onClick={handleForm} >Signout</button>
            </>
    )
}


export default Page;