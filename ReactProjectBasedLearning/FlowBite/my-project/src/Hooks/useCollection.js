import {useEffect, useState} from "react"
import { projectFirestore,onSnapshot,collection as firestore_collection} from "../Firebase/config"


export const useCollection =(collection) =>{
    const[documents,setDocuments] = useState(null)
    const[error,setError] = useState(null)


    // set up a realtime listenere 
    // whenever collection changes setup a new subscriptiong for that collection 

    useEffect(()=>{
        // we want this code to run right away as the component mounts 

        const unsubscribe = onSnapshot(firestore_collection(projectFirestore,collection),(snapshot)=>{
            // when we first connect to that collection 
            // it will fire this function whenever firestore collection cahnges 
            // we can update our stae right here 
            // we will be using our home page here 
            // we basically want to cycle and update the documents 
            let results=[]
            snapshot.docs.forEach(doc=>{
                //if(doc.data()['uid'])
                if(doc.data()['uid'])
                results.push({...doc.data(),id:doc.id})
            }) // array of documents from that snapshot 
            // docid should nt be confused with the uid 
            // the id property is the id of the document in the firestore 
            // so we have those results 
            // next we need to update our state
            console.log("data added")
            
            setDocuments(results)
            setError(null)

        },(error)=>{
            console.log(error)
            setError('could not fetch the data')
        })
        // when the component unmounts fire whatever function invokes 
        return () =>unsubscribe()

    },[collection])
    return {documents,error}
}
