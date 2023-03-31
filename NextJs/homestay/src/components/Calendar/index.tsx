"use client"
import {FC} from "react"
import { useState } from "react"
import ReactCalendar from "react-calendar"
import {add} from "date-fns"

interface indexProps{}
interface DateType{
    justDate: Date | null 
    dateTime: Date | null
}

const index:FC<indexProps> = ({}) =>{
    const[date, setDate] = useState<DateType>({
        justDate:null, 
        dateTime:null,
    })

    const getTimes = () =>{
        if(!date.justDate) return 
        const {justDate} = date 
        const beginning = add(justDate,{hours:9})
        const end = add(justDate,{hours:17}) 
        const interval = 30 // in minutes 
        // from beginning to end with 30 minutes interval 

        const times = []

        for(let i = beginning ; i <= end; i= add(i,{minutes:interval}))
        {
            times.push(i)
        }

        return times


    }
    const times = getTimes()
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            {date.justDate?(
                <div className="flex gap-4">

                </div>
            ):(
            <ReactCalendar minDate={new Date()}
            className="REACT-CALENDAR p-2" view="month" onClickDay={(date)=> setDate((prev)=>({...prev,justDate:date}))}/>
            )}
        </div>
    )
}


export default index 