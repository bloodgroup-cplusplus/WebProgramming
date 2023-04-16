import firebase_app from "../config";
import {getFirestore, doc, setDoc} from "firebase/firestore"
import { userAgent } from "next/server";
const db = getFirestore(firebase_app)

export default async function addData(college_name,department_name)
{
    let result = null; 
    let error = null;
    try{
        result = await setDoc(doc(db,college_name,department_name),{
            college_name, 
            department_name,

        });
    }
    catch(e)
    {
        error = e
    }

    return {result,error}
}