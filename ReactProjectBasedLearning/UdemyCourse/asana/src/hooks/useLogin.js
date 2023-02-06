import {useState,useEffect} from "react"
import {projectAuth,signInWithEmailAndPassword,projectFirestore,doc,updateDoc} from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useLogin =() =>{
    const[isCancelled,setIsCancelled] = useState(false)
    const[error,setError] = useState(null)
    const [isPending,setIsPending]=useState(false)
    const {dispatch} = useAuthContext()


    const login = async (email,password)=>{
        setError(null)
        setIsPending(true)

        try{
            //login 
            const res= await signInWithEmailAndPassword(projectAuth,email,password)

            // update online status 
            const updationRef= doc(projectFirestore,"Teachers_Data",res.user.uid)
            await updateDoc(updationRef,{
                online:true
            })

            // dispatch login actino 

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
        return ()=>setIsCancelled(true)
    },[])

    return {login,isPending,error}
}
