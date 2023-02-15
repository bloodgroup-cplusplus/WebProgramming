// Import the functions you need from the SDKs you need
import { deleteApp, getApps, initializeApp,getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth,setPersistence,inMemoryPersistence} from "firebase/auth"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY, 
  authDomain:import.meta.env.VITE_AUTHDOMAIN, 
  projectId:import.meta.env.VITEPROJECTID, 
  storageBucket:import.meta.env.STORAGEBUCKET, 
  messagingSenderId:import.meta.env.MESSAGINGSENDERID, 
  appId:import.meta.env.APPID
};

// Initialize Firebase
let firebaseApp;
// this is due to the way svelte initializez firebase
if(!getApps().length)
{
    // if that array is empty 
    // we say 
    // if that 's not true
    firebaseApp=initializeApp(firebaseConfig)
}

else{
    // if we already have firebase app initialized 
    firebaseApp=getApp()
    deleteApp(firebaseApp)
    firebaseApp=initializeApp(firebaseConfig)
}

// export the consts 

export const auth = getAuth(firebaseApp)
