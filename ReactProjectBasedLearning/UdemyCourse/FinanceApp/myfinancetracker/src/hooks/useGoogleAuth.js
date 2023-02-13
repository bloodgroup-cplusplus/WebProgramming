
import {useState,useEffect} from "react"
import {query,where,getDocs,projectFirestore,collection,signInWithPopup,GoogleAuthProvider, projectAuth} from "../firebase/config"
import {useAuthContext} from "./useAuthContext"
import React from 'react'
import { signInWithCredential } from "firebase/auth"

export default function useGoogleAuth() {
    const[email,setEmail]=useState("")
    const[error,setError]=useState("")
    const[isPending,setIsPending]=useState(false)
    const{dispatch} = useAuthContext()
    const handleSignIn = async()=>{
        setError(null)
        setIsPending(true)
        const provider= new GoogleAuthProvider()
        signInWithPopup(projectAuth,provider).then((result)=>{
            const user=result.user;
            setEmail(user.email);


        //check if the email exists in firestore database
        const email_query= query(collection(projectFirestore,"Teachers_Data"),where("email", "==",user.email));
        const query_snapshot=await getDocs(email_query)
        query_snapshot.forEach((doc)=>{
            console.log(doc.id , "=>", doc.data())
        })
        if(query_snapshot.empty)
        {
            // Email not found in firestore
            setError("Email not found in database")
            projectAuth.signOut();

        }
        else{
            // email found in firestore, sign in the user 
            signInWithCredential(projectAuth,result.credential).then(()=>{
                // user signed in successfully
                //dispatch login action 
                dispatch({type:'LOGIN',payload:user})
                if(!isCancelled)
                {
                    setIsPending(false)
                    setError(null)
                }
            }).catch((error)=>{
                if(!isCancelled)
                {
                    
                
                console.log(err.message)
                setError(error.message)
                setIsPending(false)
                }
            
            });

        }




        }).catch((error)=>{

            if(!isCancelled)
            {
                setError(error.message)
                setIsPending(false)
            }
        })
    }
    useEffect(()=>{
        return ()=>setIsCancelled(true)
    },[])
    return  {handleSignIn,isPending,error}


    }
      

