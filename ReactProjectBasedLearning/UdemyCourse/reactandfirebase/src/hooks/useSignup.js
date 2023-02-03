import {useState} from 'react'
import {projectAuth,createUserWithEmailAndPassword,updateProfile} from '../firebase/config'



export const useSignup =() =>{
    const[error,setError] = useState(null)
    //error for error
    const [isPending,setIsPending] = useState(false)
    // for loading state


    const signup = async(email,password,name) =>{
        // these three things are coming from the form 
        setError(null);
        setIsPending(true)
        try{
            // signup the user 
            // we await from firebase auth method
            const response=await createUserWithEmailAndPassword(projectAuth,email,password)
            console.log(response.user)

            if (!response)
            {
                // if password is short or email is taken then 
                throw new Error('Could not complete signup')
            }
            // update their display names 
            await updateProfile({name:name})
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