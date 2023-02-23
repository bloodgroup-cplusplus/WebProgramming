
'use client'

import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image"
import profile from "../assets/profile.png"
type Props = {}

export default function About({}: Props) {
  return (
    <div className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.div initial={{x:-200, opacity:0}} transition={{duration:1.2}} whileInView={{ opacity:1,x:0}} viewport={{once:true}} className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] ">
        <Image src={profile}/>    
        </motion.div>
    </div>
  )
}