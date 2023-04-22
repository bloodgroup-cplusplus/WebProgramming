import BoraBora from "../assets/borabora.jpeg"
import BoraBora2 from "../assets/borabora2.jpeg"
import Maldives from "../assets/maldives.jpeg"
import Maldives2 from "../assets/maldives2.jpeg" 
import Maldives3 from "../assets/maldives3.jpeg"
import KeyWest from "../assets/keywest.jpeg"
import SelectsCard from "./SelectCards"

const Selects =() =>{
    return(
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectsCard bg={BoraBora} text='Bora Bora' />
            <SelectsCard bg={BoraBora2} text='Maldives' />
            <SelectsCard bg={Maldives} text='Antigua' />
            <SelectsCard bg={Maldives2} text='Cozumel' />
            <SelectsCard bg={Maldives3} text='Jamaica' />
            <SelectsCard bg={KeyWest} text='Key West' />

        </div>
    )
}
export default Selects
