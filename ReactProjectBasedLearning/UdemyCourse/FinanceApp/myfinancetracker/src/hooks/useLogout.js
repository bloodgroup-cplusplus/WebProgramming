import {useState} from "react"

import {projectAuth} from "../firebase/config"

import {useAuthContext} from "../hooks/useAuthContext"

export const useLogout =() =>{
    const [error,setError] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    // we might wanna use the compnent then only logout 

    const logout = async () =>{
        setError(null)
        setIsPending(true)
        // we want to sign the user out 

        // we will use try and catch 
        // sign the user out 

        try {
            await projectAuth.signOut()
            // wait and then dispatch logout action 
            // we don't need the payload as the user becomes null 

            dispatch({type:"LOGOUT"})

            setIsPending(false) // we finished loading 
            setError(null)


        } catch(err)
        {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return {logout,error,isPending}


}