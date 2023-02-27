import {motion} from "framer-motion";
import { isPropertySignature } from "typescript";
import Backdrop from "../Backdrop";


const Modal = ({handleClose,text})=>{
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e)=> e.stopPropagation()}
                className="modal orange-graident"
                >

                </motion.div>
        </Backdrop>
    )

}


export default Modal;