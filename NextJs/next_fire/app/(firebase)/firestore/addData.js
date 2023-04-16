import firebase_app from "../config";
import { useState } from "react";
import {getFirestore, doc, setDoc,collection} from "firebase/firestore"
import {getStorage,uploadBytes,ref,getDownloadURL} from "firebase/storage"


const db = getFirestore(firebase_app)
const storage =getStorage(firebase_app)

export default async function addData(name,college_name,department_name,email,resultPhoto)
{
    //const studentCollection = collection(db,college_name,department_name)
    //const studentDoc = doc(studentCollection,email)
    const[resultImageURL,setResultImageURL] = useState("")
    const resultPhotouploadPath = `${college_name}/${department_name}/${email}/${resultPhoto.name}`
    const resultImageRef = ref(storage,resultPhotouploadPath)
    await uploadBytes(resultImageRef,resultPhoto.name).then((snapshot)=>{
        console.log("Result order photo uploaded")
    })
    getDownloadURL(resultImageRef).then(url=>{
        setResultImageURL(url)
    }).catch(error=>{
        console.log(error)
    })

    let result = null; 
    let error = null;
    const data = {
        name,
        email,
        college_name,
        department_name,
        resultImageURL
    }
    try{
         await setDoc(doc(db,college_name,department_name),data);
         alert("data added")
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