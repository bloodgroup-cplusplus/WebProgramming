import {useState,useEffect} from 'react'
import {ref,doc,projectAuth,projectStorage,projectFirestore,uploadBytes,setDoc,createUserWithEmailAndPassword,updateProfile,getDownloadURL} from "../firebase/config"
import {useAuthContext} from "./useAuthContext"

export const useSignup = () =>{
    const[isCancelled,setIsCancelled] = useState(false)
    const[error,setError] = useState(null)
    const[isPending,setIsPending] = useState(false)
    const {dispatch} = useAuthContext()


    const signup = async(email,password,displayName,thumbnail)=>{
        setError(null)
        setIsPending(true)

        try{
            // signup
            const res = await createUserWithEmailAndPassword(projectAuth,email,password)

            if(!res)
            {
                alert("No res")
                throw new Error('could not complete signup')
            }

            // upload user thumbnail 
            const uploadPath=`teacher_profile/${res.user.uid}/${thumbnail.name}`
            const img_ref= ref(projectStorage,uploadPath)
            await uploadBytes(img_ref,thumbnail).then((snapshot)=>{
                console.log("uploaded a blob or file");
            });
            const image_url=await getDownloadURL(img_ref)
            console.log(image_url)
            

            
             updateProfile(projectAuth.currentUser,{
               displayName:displayName,
                imageUrl:image_url

            }).then(()=>{
                console.log("Profile Updated")
            }).catch((error)=>{
                console.log("An error occurred while updating profile")

            })

            //create a user document 
            var data={
                online:true,
                displayName,
                photoURL:image_url
            }

            try{
                await setDoc(doc(projectFirestore,"Teachers_Data",res.user.uid),data)
                console.log("Data added to cloud firestore")
            }catch(error)
            {
                console.log(error)
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

