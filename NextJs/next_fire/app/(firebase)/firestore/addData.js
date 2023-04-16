import firebase_app from "../config";
import {getFirestore, doc, setDoc,collection} from "firebase/firestore"
import { userAgent } from "next/server";
const db = getFirestore(firebase_app)

export default async function addData(college_name,department_name,email)
{
    //const studentCollection = collection(db,college_name,department_name)
    //const studentDoc = doc(studentCollection,email)
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

   /* setDoc(studentDoc).then(()=>{
        result = "User added Successfully"
        alert("User Added Successfully")
    }).catch((e)=>{
        error = e;
        alert("Error adding data")

    })*/

    return {result,error}
}