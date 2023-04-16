const firebaseConfig={
    apiKey: "AIzaSyDCpi5-lkKVp9v9wAdsXfUIFZ_2Z8YcFmc",
    authDomain: "sikkimteachersassociation.firebaseapp.com",
    databaseURL: "https://sikkimteachersassociation-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sikkimteachersassociation",
    storageBucket: "sikkimteachersassociation.appspot.com",
    messagingSenderId: "276605985083",
    appId: "1:276605985083:web:742b695c6b6deb574f171e",
    measurementId: "G-DLPS527R0T"



}

//initialize firebase

firebase.initializeApp(firebaseConfig);

//refrence your database

var contactFormDB=firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);


function submitForm(e)
{
    e.preventDefault();
    var name= getElementVal("name");
    var emailid=getElementVal("emailid");
    var msgContent=getElementVal("msgContent");

    saveMessages(name,emailid,msgContent);

    //enable alert

    document.querySelector(".alert").style.display="block";

    //remove the alert 
    setTimeout( () =>{
        document.querySelector(".alert").style.display= "none";
    },3000);

    //reset the form 
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };