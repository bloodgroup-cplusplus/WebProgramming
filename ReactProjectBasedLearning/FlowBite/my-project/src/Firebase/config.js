import {initializeApp} from 'firebase/app'
import {getFirestore,serverTimestamp,collection,addDoc,setDoc,updateDoc,doc,onSnapshot,query,where,getDocs,getDoc} from "firebase/firestore"
import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,updateProfile,signInWithCredential} from "firebase/auth"
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"


// firebase config

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID
};




  //Initialize firebase 

  const app = initializeApp(firebaseConfig);


//Initialize Services 

const projectFirestore = getFirestore(app)

const projectAuth = getAuth(app)

const projectStorage=getStorage(app)

// firebase timestamps 



export {query,where,getDocs,getDoc,signInWithPopup,GoogleAuthProvider,doc,updateDoc,addDoc,setDoc,ref,uploadBytes, getDownloadURL,signInWithCredential,projectFirestore,projectStorage, projectAuth, serverTimestamp,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,collection,updateProfile,onSnapshot}