import {initializeApp} from 'firebase/app'
import {getFirestore,serverTimestamp,collection,addDoc,setDoc,updateDoc,doc,onSnapshot} from "firebase/firestore"
import {getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"


// firebase config

const firebaseConfig = {
  apiKey: "AIzaSyD1H2YKLoLE5-V-aeeZIHPZb2BEoZ-qw6k",
  authDomain: "fir-f0f56.firebaseapp.com",
  projectId: "fir-f0f56",
  storageBucket: "fir-f0f56.appspot.com",
  messagingSenderId: "310785965569",
  appId: "1:310785965569:web:8d2610a71b1a787af24a00"
};




  //Initialize firebase 

  const app = initializeApp(firebaseConfig);


//Initialize Services 

const projectFirestore = getFirestore(app)

const projectAuth = getAuth(app)

const projectStorage=getStorage(app)

// firebase timestamps 



export {doc,updateDoc,addDoc,setDoc,ref,uploadBytes, getDownloadURL,projectFirestore,projectStorage, projectAuth, serverTimestamp,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,collection,updateProfile,onSnapshot}

