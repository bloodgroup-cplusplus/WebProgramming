'use client'
import firebase_app from "../config";
import { useState } from "react";
import {getFirestore, doc, setDoc,collection} from "firebase/firestore"
import {getStorage,uploadBytes,ref,getDownloadURL} from "firebase/storage"


const db = getFirestore(firebase_app)
const storage =getStorage(firebase_app)

export default async function addData(name,college_name,department_name,email,resultPhoto)
{
    let result_url = null;
    const resultPhotouploadPath = `${college_name}/${department_name}/${email}/${resultPhoto.name}`
    const resultImageRef = ref(storage,resultPhotouploadPath)
    await uploadBytes(resultImageRef,resultPhoto.name).then((snapshot)=>{
        alert("Result  photo uploaded")
    })
    getDownloadURL(resultImageRef).then(url=>{
        result_url=url
    }).catch(error=>{
        alert(error)
    })

    let result = null; 
    let error = null;
    const data = {
        name,
        email,
        college_name,
        department_name,
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