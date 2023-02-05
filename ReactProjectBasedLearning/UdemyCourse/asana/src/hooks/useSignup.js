import {useState,useEffect} from 'react'
import {projectAuth,createUserWithEmailAndPassword,updateProfile} from "../firebase/config"
import {useAuthContext} from "./useAuthContext"

export const useSignup = () =>{
    const[isCancelled,setIsCancelled] = useState(false)
    const[error,setError] = useState(null)
    const[isPending,setIsPending] = useState(false)
    const {dispatch} = useAuthContext()


    const signup = async(email,password,displayName)=>{
        setError(null)
        setIsPending(true)

        try{
            // signup
            const res = await createUserWithEmailAndPassword(projectAuth,email,password)

            if(!res)
            {
                throw new Error('could not complete signup')
            }
            // add display name to user 
            const profile_update= await updateProfile(projectAuth.currentUser,{
                displayName:{displayName}
            })
            if(!profile_update)
            {
                throw new Error('name not updated')
            }
            

            // dispatch login action 
            dispatch({type:'LOGIN',payload:res.user})

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
                setError(err.message)
                setIsPending(false)
            }
        }
    }
    useEffect(()=>{
        return () =>setIsCancelled(true)
    },[])

    return {signup, error, isPending}
}

