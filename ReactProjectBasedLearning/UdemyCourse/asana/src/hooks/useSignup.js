import {useState,useEffect} from 'react'
import {ref,projectAuth,projectStorage,projectFirestore,uploadBytes,setDoc,createUserWithEmailAndPassword,updateProfile,getDownloadURL} from "../firebase/config"
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
                throw new Error('could not complete signup')
            }

            // upload user thumbnail 
            const uploadPath=`teacher_profile/${res.user.uid}/${thumbnail.name}`
            const img_ref= ref(projectStorage,uploadPath)
            var image_url;
            uploadBytes(img_ref,thumbnail).then((snapshot)=>{
                console.log("uploaded a blob or file");
            });
            getDownloadURL(img_ref).then((url)=>{
                const xhr= new XMLHttpRequest();
                xhr.responseType="blob";
                xhr.onload=(event)=>{
                    const blob=xhr.response;
                };
                xhr.open('GET',url)
                xhr.
                xhr.send();
                image_url=url;

            }).catch((error)=>{
                console.log("File not downloaded")
            })

             //add display name to user 
            const profile_update= await updateProfile(projectAuth.currentUser,{
               displayName:{displayName},
                imageUrl:{url}

            })
            if(!profile_update)
            {
                throw new Error('name not updated')
            }

            //create a user document 

            await setDoc((projectFirestore,"Teachers_Data",`${response.usr.uid}`),{

                })
            

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

