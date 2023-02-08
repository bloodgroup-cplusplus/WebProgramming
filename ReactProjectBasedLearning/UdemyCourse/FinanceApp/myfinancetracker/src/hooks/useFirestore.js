import {useReducer,useEffect,useState} from "react"
import { projectFirestore } from "../firebase/config"

// we want to create a hook itself 
// lets create an initial state 

let initialState={
    // on the response object is the response object
    document:null,
    isPending:false,
    error:null,
    success:null
}
const firestoreReducer = (state,action) =>{
    switch(action.type)
    {
        // we will have differnet cases
        default:
            return state
    }

}

export const useFirestore  =(collection) =>{
    const [response,dispatch] = useReducer(firestoreReducer,initialState)
    const [isCancelled,setIsCancelled] = useState(false)

    // collection ref 
    const ref=projectFirestore.collection.ref

    // add a document 
    const addDocument = (doc) =>{

    }
    //delete document 
    const deleteDocument = (id) =>{


    }

    useEffect(()=>{
        return () =>setIsCancelled(true)
    },[])

    return {addDocument,deleteDocument,response}


}

