import firebase_app from "../config";

import { getAuth,signOut } from "firebase/auth";


let auth = getAuth(firebase_app)







export default async function Signout()
{
    let result = null ;
    let error = null ; 

    try{
        result = await signOut(auth)
    }
    catch(e)
    {
        error = e
    }

    return {result, error}


}