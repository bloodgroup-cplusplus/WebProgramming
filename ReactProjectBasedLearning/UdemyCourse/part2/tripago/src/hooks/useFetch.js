// any react hook should always start with the word use 
import {useState,useEffect} from 'react'

export const useFetch =(url) =>{
    const [data,setData] = useState(null)
    const[isPending,setIsPending] = useState(false)
    const[error,setError]=useState(null)


    useEffect(()=>{
        const fetchData = async ()=>{
            setIsPending(true)
            try
            {
                const res=await fetch(url)
                if(!res.ok){
                    throw new Error(res.statusText)


                }
                const json = await res.json()
            
            setIsPending(false)
            setData(json)
            setError(null)
            }catch(err){
                setIsPending(false)
                setError("Could not fetch the data")
                console.log(err.message)

            }
        }
        // we also pass in url has a dependency
        fetchData()
    },[url])

    return {data,isPending,error}

}
