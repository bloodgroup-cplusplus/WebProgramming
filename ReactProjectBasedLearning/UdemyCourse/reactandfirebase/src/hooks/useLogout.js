import {useState} from 'react'
import {signOut} from '../firebase/config'
import { useAuthContext } from './useAuthContext'




const useLogout = () =>{

    const [error,setError] = useState(null)
    const[isPending,setIsPending]=useState(false)
    const{dispatch} = useAuthContext()
    // first of all we need state 
    // we also need a dispatch from state

    const logout= async () =>{
        setError(null)
        setIsPending(true)


        // signout the user 
        try{
            await signOut()
            // we can dispatch the logout action 
            // it does not move on and try to dispatch the action 
            // wait until it is completed 
            // dispatch logout action 
            dispatch({type:'LOGOUT'})

            setIsPending(false)
            setError(null)

        }
        catch(err)
        {
            alert(err)
            setError(err.message)
            setIsPending(false)
        }
    }

    return {logout,error,isPending}

}