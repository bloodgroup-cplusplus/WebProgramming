import {FC} from "react"
import ReactCalendar from "react-calendar"

interface indexProps{}

const index:FC<indexProps> = ({}) =>{
    return (
        <div>
            <ReactCalendar minDate={new Date()}
            className="REACT-CALENDAR p-2" view="month" onClickDay={(date)=>console.log(date)}/>
        </div>
    )
}


export default index 