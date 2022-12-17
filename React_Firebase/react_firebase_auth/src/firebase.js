import firebase from 'firebase/app'
import 'firebase/auth'

const app=firebase.initializeApp({

    apiKey: "AIzaSyCV1m-Vt1YdA6Ei8hQptrDaOObd97Q40-g",
    authDomain: "auth-test-fab82.firebaseapp.com",
    projectId: "auth-test-fab82",
    storageBucket: "auth-test-fab82.appspot.com",
    messagingSenderId: "113479185935",
    appId: "1:113479185935:web:fadf6b2fd25b15d8fb157a"
})


export const auth =app.auth()
export default app

