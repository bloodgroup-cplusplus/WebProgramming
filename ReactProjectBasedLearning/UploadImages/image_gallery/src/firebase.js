import {initializeApp} from "firebase/app"
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD9MbETIZFyUK8scNgKOfQD-ST64uLc9Zo",
    authDomain: "fir-react-crud-db905.firebaseapp.com",
    projectId: "fir-react-crud-db905",
    storageBucket: "fir-react-crud-db905.appspot.com",
    messagingSenderId: "39838308835",
    appId: "1:39838308835:web:0869fcbab51da78f27e8d6"
  };


  const app=initializeApp(firebaseConfig)
  export const storage=getStorage(app)