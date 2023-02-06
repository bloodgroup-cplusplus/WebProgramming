import {initializeApp} from 'firebase/app'
import {getFirestore,serverTimestamp,collection} from "firebase/firestore"
import {getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"


// firebase config

const firebaseConfig = {
    apiKey: "AIzaSyBoLL3VJBp-cAYhGL08cXpxyCHv0sgrcAE",
    authDomain: "stademo2022.firebaseapp.com",
    projectId: "stademo2022",
    storageBucket: "stademo2022.appspot.com",
    messagingSenderId: "267963995076",
    appId: "1:267963995076:web:3bbd1f82b72f95d5bc4a91",
    measurementId: "G-H164QGCE13"
  };



  //Initialize firebase 

  const app = initializeApp(firebaseConfig);


//Initialize Services 

const projectFirestore = getFirestore(app)

const projectAuth = getAuth(app)

const projectStorage=getStorage(app)

// firebase timestamps 



export {ref,uploadBytes, getDownloadURL,projectFirestore,projectStorage, projectAuth, serverTimestamp,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,collection,updateProfile}


