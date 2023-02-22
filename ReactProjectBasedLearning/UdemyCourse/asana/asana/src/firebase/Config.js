import {initializeApp} from 'firebase/app'
import {getFirestore,serverTimestamp,collection,addDoc,setDoc,updateDoc,doc,onSnapshot,query,where,getDocs,getDoc} from "firebase/firestore"
import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,updateProfile,signInWithCredential} from "firebase/auth"
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"

// firebase config 
const firebaseConfig = {
    apiKey: "AIzaSyDKW9MsU81zWX4T9YJUvLpPV48_RZR2sw0",
    authDomain: "sveltefireauth.firebaseapp.com",
    projectId: "sveltefireauth",
    storageBucket: "sveltefireauth.appspot.com",
    messagingSenderId: "1024255288833",
    appId: "1:1024255288833:web:15b395f46d5c025899c200"
  };



  
  
  
  
    //Initialize firebase 
  
    const app = initializeApp(firebaseConfig);
  
  
  //Initialize Services 
  
  const projectFirestore = getFirestore(app)
  
  const projectAuth = getAuth(app)
  
  const projectStorage=getStorage(app)
  
  // firebase timestamps 
  
  
  
  export {query,where,getDocs,getDoc,signInWithPopup,GoogleAuthProvider,doc,updateDoc,addDoc,setDoc,ref,uploadBytes, getDownloadURL,signInWithCredential,projectFirestore,projectStorage, projectAuth, serverTimestamp,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,collection,updateProfile,onSnapshot}