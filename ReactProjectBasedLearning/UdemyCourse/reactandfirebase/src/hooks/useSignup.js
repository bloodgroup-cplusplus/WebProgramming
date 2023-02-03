import {useState} from 'react'
import {projectAuth,createUserWithEmailAndPassword,updateProfile} from '../firebase/config'
import { useAuthContext } from './useAuthContext'


export const useSignup =() =>{
    const[error,setError] = useState(null)
    //error for error
    const [isPending,setIsPending] = useState(false)
    // for loading state

    // login dispatch 
    const {dispatch} = useAuthContext()



    const signup = async(email,password,name) =>{
        // these three things are coming from the form 
        setError(null);
        setIsPending(true)
        try{
            // signup the user 
            // we await from firebase auth method
            const response=await createUserWithEmailAndPassword(projectAuth,email,password)

            if (!response)
            {
                // if password is short or email is taken then 
                throw new Error('Could not complete signup')
            }
            // update their display names 
            await updateProfile({name:name})
            
            // dispatch login action 
            dispatch({type:'LOGIN',payload:response.user}) 


            setIsPending(false)
            setError(null)
        }
        catch(err)
        {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    
    return {signup, error, isPending }


}