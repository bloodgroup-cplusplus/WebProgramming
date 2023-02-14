

/*import {useState,useEffect} from "react"
import {query,where,getDocs,projectFirestore,collection,signInWithPopup,GoogleAuthProvider, projectAuth} from "../firebase/config"
import {useAuthContext} from "./useAuthContext"
import { signInWithCredential } from "firebase/auth"

export const useGoogleAuth =()=> {
    const[email,setEmail]=useState("")
    const[googleSignInError,setGoogleSignInError]=useState("")
    const[googleSignInIsCancelled,setGoogleSignInIsCancelled]=useState(null)
    const[googleSignInIsPending,setGoogleSignInIsPending]=useState(false)
    const{dispatch} = useAuthContext()
    const handleSignIn = async()=>{
        setGoogleSignInError(null)
        setGoogleSignInIsPending(true)
        const provider= new GoogleAuthProvider()
        signInWithPopup(projectAuth,provider).then((result)=>{
            const user=result.user;
            setEmail(user.email);
        

        //check if the email exists in firestore database
        const email_query= query(collection(projectFirestore,"Teachers_Data"),where("email", "==",user.email));

        async function gettingDocs(email_query)
        {
            const q=await getDocs(email_query)
            return q
        }
        const query_snapshot=gettingDocs(email_query)
        query_snapshot.forEach((doc)=>{
            console.log(doc.id , "=>", doc.data())
        })
        if(query_snapshot.empty)
        {
            // Email not found in firestore
            setGoogleSignInError("Email not found in database")
            projectAuth.signOut();

        }
        else{
            // email found in firestore, sign in the user 
            signInWithCredential(projectAuth,result.credential).then(()=>{
                // user signed in successfully
                //dispatch login action 
                dispatch({type:'LOGIN',payload:user})
                if(!googleSignInIsCancelled)
                {
                    setGoogleSignInIsPending(false)
                    setGoogleSignInError(null)
                }
            }).catch((error)=>{
                if(!googleSignInIsCancelled)
                {
                    
                
                console.log(error.message)
                setGoogleSignInError(error.message)
                setGoogleSignInIsPending(false)
                }
            
            });

        }




        }).catch((error)=>{

            if(!setGoogleSignInIsCancelled)
            {
                setGoogleSignInError(error.message)
                setGoogleSignInIsPending(false)
            }
        })
    }
    useEffect(()=>{
        return ()=>setGoogleSignInIsCancelled(true)
    },[])
    return  {handleSignIn,googleSignInIsPending,googleSignInError}


    }
      

    */


/*import { useState, useEffect } from "react";
import { projectAuth,projectFirestore, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,ref,child,get,set} from "../firebase/config";

const useGoogleSignIn = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(projectAuth, async (user) => {
      if (user) {
        try {
          const userRef = ref(projectFirestore, `Teachers_Data/${user.uid}`);
          const snapshot = await get(child(userRef, "isRegistered"));
          const isRegistered = snapshot.exists() && snapshot.val();
          if (isRegistered) {
            setUser(user);
          } else {
            setError("You are not registered with email and password.");
          }
          setIsLoading(false);
        } catch (error) {
          setError(error.message);
        }
      } else {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const auth = getAuth();
      const database = getDatabase();

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const userRef = ref(database, `users/${result.user.uid}`);
      await set(child(userRef, "isRegistered"), true);
    } catch (error) {
      setError(error.message);
    }
  };

  return { user, isLoading, error, signInWithGoogle };
};

export default useGoogleSignIn;
*/


// third example of a hook 


import {useState} from "react"
import {useAuthContext} from "./useAuthContext"
import {projectAuth,getDocs,projectFirestore,query,collection,where,signInWithCredential,GoogleAuthProvider, signInWithPopup} from  "../firebase/config"


export function useGoogleAuth()
{
    const[user,setUser]=useState(null)
    const[googleSignInError,setGoogleSignInError]=useState("")
    const[googleSignInIsCancelled,setGoogleSignInIsCancelled]=useState(false)
    //const[googleSignInIsPending,setGoogleSignInIsPending]=useState(false)
    const{dispatch} = useAuthContext()
    const signInWithGoogle= async()=>{
        const provider = new GoogleAuthProvider() 
            try{
                const authUser=await signInWithPopup(projectAuth,provider)
                if(authUser)
                {
                     // const check if email exists 
                    const emailExists=await docExists(authUser.user.email)
                // check if email exists 
                    if(emailExists)
                    {
                        console.log("this is the auth user")
                        console.log(authUser)
                        const credential=GoogleAuthProvider.credentialFromResult(authUser)
                        await signInWithCredential(projectAuth,credential)
                        setUser(authUser)
                    //dispatch login action 
                      dispatch({type:'LOGIN',payload:authUser.user})
                    }
                    else{
                        if(!googleSignInIsCancelled)
                        {
                            setGoogleSignInError("User email does not exists in database")
                            setUser(null);
                        }
                    }

            }
            else{
                if(!googleSignInIsCancelled)
                {
                    setUser(null)
                    setGoogleSignInError("That email is not registered")
                }
            }
        }catch(error){
            setGoogleSignInError(error);
        }
       
    }

    async function docExists(email)
    {
        try{
            const userRef=collection(projectFirestore,'Teachers_Data')
            const q= query(userRef,where('email',"==",email));
            const userDoc=await getDocs(q)
            return userDoc.size>0;

        }catch(error)
        {
            console.log("not found")
            setGoogleSignInError(error)
        }

    }
    return [user,googleSignInError,signInWithGoogle]
   

}