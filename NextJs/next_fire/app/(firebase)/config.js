import {initializeApp} from "firebase/app"

/*const firebaseConfig = {
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID

}*/

const firebaseConfig = {
    apiKey: "AIzaSyD2RzMdC3frhvsmd9XFKKkz8Tx0tnp91HQ",
    authDomain: "nextfire-ba0e1.firebaseapp.com",
    projectId: "nextfire-ba0e1",
    storageBucket: "nextfire-ba0e1.appspot.com",
    messagingSenderId: "833962044930",
    appId: "1:833962044930:web:c1a0b3a00d1a24eaedc11b"
  };

let firebase_app = initializeApp(firebaseConfig)


export default firebase_app