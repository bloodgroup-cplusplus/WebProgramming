import firebase_app from "../config"
import {createUserWithEmailAndPassword, getAuth,updateProfile} from "firebase/auth"

const auth = getAuth(firebase_app)

export default async function signUp(email,password,first_name,last_name)
{
    let result = null 
    let error = null;

    try{
        result = await createUserWithEmailAndPassword(auth,email,password);
        updateProfile(auth.currentUser,{
            displayName:first_name,
            lastName:last_name
        })

    }catch(e)
    {
        error = e
    }

    return {result,error};
}