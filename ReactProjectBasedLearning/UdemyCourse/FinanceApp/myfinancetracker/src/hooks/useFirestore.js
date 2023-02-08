// add documents to a firestore collection or remove documents from 
// firestore collection 
// Right now we want to add new documents 
// We will also be using this same hook to delete documents 
// Use Reducer as we will be using reducer to control certain portion inside hook 
//  all these comes from react 
// we use this object everytime we want to create the project firestore

import {useReducer,useEffect,useState} from "react"
import { projectFirestore,doc,collection as firestore_collection } from "../firebase/config"

// we want to create a hook itself 
// lets create an initial state 

let initialState={
    // on the response object is the response object
    document:null, // when we make some kind of request , the firestore document response is the document firstly its null
    isPending:false, // pending state is false to begin with 
    error:null, // if we get error from firestore we update it to yes
    success:null // true or false . If success true else false 
}
const firestoreReducer = (state,action ) =>{
    switch(action.type)
    {
        // we will have differnet cases inside the switch statement dependnet on the type

        default:
            // default case just returns the state
            return state
    }

}
// collection is the collection we want to work with 
// the colleciton could be articles/ news/ griefs etc
export const useFirestore=(collection) =>{
    const [response,dispatch] = useReducer(firestoreReducer,initialState)
    // custom state objects that represents that response 
    // we can name the reducer whatever we want 
    // it represents the respones we show back from firestore 
    // error and success 
    // wherehter it was succes or not 
    // disptach is used to dispatch new actions to reducer function 
    // first is the reducer fucntion we are going to use 
    // we could hardcode the function 
    const [isCancelled,setIsCancelled] = useState(false)
    // we are going to be suing this for our cleanup function 
    // imagine we are on a home page but we switch pages quickly 
    // we set is-cancelled to be true 
    // we aer not trying to set state in the component which is unmounted 
    // only if is cancelled is false 


    // collection ref  from firestore reference 
    // get refrence to somekind of collection from firestoer database 

    const ref = doc(firestore_collection(projectFirestore,collection))
    // we could use ref.add() to add document later on 
    // we could use for deleteing and adding the reference 
    // ref is kept so that we can add or delete document 


    // first let's add document 

    // add a document 
    const addDocument = (doc) =>{

    }
    //delete document 
    // we need the id to make delete request
    const deleteDocument = (id) =>{


    }

    // cleanup function goes inside use effect hook 
    // when the component first mounts the dom we use it 
    // to return a cleanup function we can say setiscancelled(true)
    useEffect(()=>{
        return () =>setIsCancelled(true)
    },[])

    return {addDocument,deleteDocument,response}


}

