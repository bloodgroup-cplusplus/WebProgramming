import {useReducer,useEffect,useState} from "react"
import { projectFirestore,serverTimestamp} from "../firebase/config"

let initialState={
    document:null,
    isPending:false,
    error:null,
    success:null


}

