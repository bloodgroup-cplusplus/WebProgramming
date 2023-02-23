import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image"
import c_logo from "../assets/c++_logo.svg"
import python_logo from "../assets/python_logo.svg"
import razorpay from "../assets/razorpay.svg"
import react from "../assets/react.svg"
import vim from "../assets/vim.svg"
import firebase from "../assets/firebase_logo.svg"
import tailwind from "../assets/tailwind-css.svg"
import visual_studio_code from "../assets/ visual-studio-code.svg"
import vercel from "../assets/vercel.svg"
import tensorflow from "../assets/tensorflow_logo.svg"

type Props = {
    directionLeft? :boolean;
};

const Skill = ({directionLeft}:Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
            initial={{
                x: directionLeft ? -200: 200,
                opacity:0,
        }}
            transition={{duration: 1}}
            whileInView={{opacity:1, x:0}}
            >
            <Image src={c_logo} className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "/> 
            <Image src={python_logo} className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "/> 
             <Image src={razorpay} className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "/> 

            


        </motion.div>

    <div className='absolute opacity-0 group-hover:opactiy-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
    </div>
    </div>
  )
}
export default Skill