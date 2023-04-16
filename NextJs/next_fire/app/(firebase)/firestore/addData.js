import firebase_app from "../config";
import {getFirestore, doc, setDoc,collection} from "firebase/firestore"
import { userAgent } from "next/server";
import { useAuthContext } from "@/app/(context)/AuthContext";

const db = getFirestore(firebase_app)

export default async function addData(college_name,department_name,email)
{
    //const studentCollection = collection(db,college_name,department_name)
    //const studentDoc = doc(studentCollection,email)
    const {user} = useAuthContext()
    let result = null; 
    let error = null;
    const data = {
        name:user.displayName,
        email :email,
        college_name,
        department_name
    }
    try{
         await setDoc(doc(db,college_name,department_name),data);
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