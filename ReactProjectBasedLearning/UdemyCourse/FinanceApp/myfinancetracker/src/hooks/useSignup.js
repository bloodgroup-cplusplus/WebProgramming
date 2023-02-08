// use state 
import {useState} from "react"
import {projectAuth,createUserWithEmailAndPassword,updateProfile} from "../firebase/config"

import { useAuthContext } from "./useAuthContext"

export const useSignup = () =>{

    // first thing we do is create states for error and pending 

    const [error, setError] = useState(null)
    const[isPending,setIsPending] = useState(false)
    const {dispatch} = useAuthContext()

    // we need to wait for the user to fill up the form 

    // inside the function we use the await keyword
    const signup = async (email,password,displayName)=>{
        // certain properties that firebase auth allows 
        // display name 
        //photo url 
        // but we can 't add extra properties 
        // let's pass the email password and display name
        // let's set the error to be null 
        setError(null)
        // there's somekind of error 
        // if there's a new error we reset the form 

        setIsPending(true)
        // we are starting the request to sign the user up 

        // we are gong to try to do something and if it fails we do something 

        try{
            // signup the user 

            const res=await createUserWithEmailAndPassword(projectAuth,email,password)
            console.log(res.user)
            // we can log the user from the console

            if(!res)
            {
                throw new Error('Could not complete signup')
            }
            // it doesn't allow display name first 
            // we need to add display name to the user 
            // add display name to user 

            updateProfile(projectAuth.currentUser,{
                displayName:displayName
            })

            // dispatch login action 
            dispatch({type:'LOGIN',payload:res.user})


            setIsPending(false)
            setError(null)

        }
        catch(error) 
        {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)

        }

    }
    // we need to export the things from the hook that i might import on the other components 

    return {error,isPending,signup}

}