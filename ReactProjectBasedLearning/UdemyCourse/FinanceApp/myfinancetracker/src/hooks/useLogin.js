// the reason we use hooks is reusable and easy to update 
// we can use all of the hooks inside the compnents 
// by encapsulating inside the hook we can use it wherever we want in different compoennt s

import {useState,useEffect} from "react"

import {projectAuth, signInWithEmailAndPassword} from "../firebase/config"

import {useAuthContext} from "./useAuthContext"

export const useLogin =() =>{
    const[isCancelled,setIsCancelled] = useState(false)
    const[error,setError] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const{dispatch} = useAuthContext()


    const login = async(email,password)=> {
        setError(null)
        setIsPending(true)

        // sign the user in 
        try{
            const res=await signInWithEmailAndPassword(projectAuth,email,password)

            // dispatch logout action 
            dispatch({type:'LOGIN', payload:res.user})


            // update state
            if(!isCancelled)
            {
                setIsPending(false)
                setError(null)

            }
        } 
        catch(err)
        {
            if(!isCancelled)
            {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
     }

     useEffect(()=>{
        return () =>setIsCancelled(true)
     },[])

     return {login,error,isPending}
    }
