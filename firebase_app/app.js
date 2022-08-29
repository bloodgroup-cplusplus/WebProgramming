import {initializeApp} from "firebase/app"
import {getAnalytics} from "firebase/analytics"

const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = docuemnt.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();


/// Sign in event handlers 


signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = ()




