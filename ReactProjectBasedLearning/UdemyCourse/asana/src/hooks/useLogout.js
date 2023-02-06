import {useEffect,useState} from "react"
import { projectAuth,signOut,updateDoc,projectFirestore,doc} from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useLogout =()=>{
    const [isCancelled,setIsCancelled]=useState(false)
    const[error,setError] = useState(null)
    const [isPending,setIsPending]=useState(false)
    const{dispatch,user}=useAuthContext()

    const logout = async()=>{
        setError(null)
        setIsPending(true)

        try{

            // update online status 
            const {uid} = user
            const updationRef= doc(projectFirestore,"Teachers_Data",uid)
            await updateDoc(updationRef,{
                online:false
            })
            //sign the user out 
            await signOut(projectAuth)

            // dispatch logout action 
            dispatch({type:'LOGOUT'})

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
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(()=>{
        return () =>setIsCancelled(true)
    },[])

    return {logout,error,isPending}
}