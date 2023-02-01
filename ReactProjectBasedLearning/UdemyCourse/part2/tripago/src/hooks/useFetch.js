// any react hook should always start with the word use 
import {useState,useEffect} from 'react'

export const useFetch =(url) =>{
    const [data,setData] = useState(null)


    useEffect(()=>{
        const fetchData = async ()=>{
            const res=await fetch(url)
            const json = await res.json()
            setData(json)
        }
        // we also pass in url has a dependency
        fetchData()
    },[url])

    return {data}

}
