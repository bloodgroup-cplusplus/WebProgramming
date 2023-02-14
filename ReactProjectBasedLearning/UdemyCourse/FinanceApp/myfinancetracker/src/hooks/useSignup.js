// use state 
import {useEffect, useState,useCallback} from "react"
import {projectAuth,ref,projectFirestore,doc,createUserWithEmailAndPassword,updateProfile, uploadBytes,projectStorage, setDoc} from "../firebase/config"

import { useAuthContext } from "./useAuthContext"

export const useSignup = () =>{

    // first thing we do is create states for error and pending 

    const [error, setError] = useState(null)
    const[isPending,setIsPending] = useState(false)
    const[isCancelled,setIsCancelled] = useState(false)
    const {dispatch} = useAuthContext()

    // we need to wait for the user to fill up the form 

    // inside the function we use the await keyword
    const signup = useCallback(async (email,password,phoneNumber,dateOfBirth,school,designation,district,bac,appointmentOrderNumber,gpfCpfNumber,retirementDate,displayName,formalPhoto,appointmentOrderPhoto)=>{
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
        // generate a random number generator for sta-id
        function generate_random_number(min,max)
        {
            return Math.random() *(max-min)+min;
        }
        var random_number=Math.floor(generate_random_number(100000,1000000000))

       const sta_id=`STA/${random_number}/2023`

        try{
            // signup the user 

            const res=await createUserWithEmailAndPassword(projectAuth,email,password)
            console.log(res.user)
            // we can log the user from the console
            // store uid in a variable so that it is easy to add into database well not easy but if you 
            // use . inside json it creates problem (maybe? sorta)
            const uid=res.user.uid;

            if(!res)
            {
                throw new Error('Could not complete signup')
            }
            // it doesn't allow display name first 
            // we need to add display name to the user 
            // add display name to user 
            const data={

                displayName,
                email,
                phoneNumber,
                dateOfBirth,
                school,
                designation,
                district,
                bac,
                appointmentOrderNumber,
                gpfCpfNumber,
                retirementDate,
                sta_id,
                uid
            }


            // upload teacher's data 
            try{
                await setDoc(doc(projectFirestore,"Teachers_Data",res.user.uid),data)
                    console.log("data added to cloud firestore")
            }catch(error)
            {
                console.log(error)
            }


            // upload users photo 
            const teacherPhotouploadPath = `teacher_profile/${res.user.uid}/${formalPhoto.name}`
            const teacherImgRef=ref(projectStorage,teacherPhotouploadPath)
            await uploadBytes(teacherImgRef,formalPhoto.name).then((snapshot)=>{
                console.log("Teacher Photo Uploaded")
            })

            // upload users appointment order photo 
            const appointmentOrderuploadPath = `teacher_profile/${res.user.uid}/${appointmentOrderPhoto.name}`
            const appointmentOrderImgRef=ref(projectStorage,appointmentOrderuploadPath)
            await uploadBytes(appointmentOrderImgRef,appointmentOrderPhoto.name).then((snapshot)=>{
                console.log("Appointment Order Photo uploaded")
            })

            
            updateProfile(projectAuth.currentUser,{
                displayName:displayName
            })

            // dispatch login action 
            dispatch({type:'LOGIN',payload:res.user})


            if(!isCancelled)
            {

                setIsPending(false)
                setError(null)
            }

        }
        catch(error) 
        {
            if(!isCancelled)
            {
                console.log(error.message)
                setError(error.message)
                setIsPending(false)
            }

        }

    },[]);
    // we need to export the things from the hook that i might import on the other components 
    useEffect(()=>{
        return ()=>setIsCancelled(true)
    },[])

    return {error,isPending,signup}

}