import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
export default function Navbar() {
    const[nav,setNav] = useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>      
        <h1 className='w-full text-3xl font-bold text-[#fffff]'>React</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Signup</li>
            <li className='p-4'>Login</li>
            <li className='p-4'>Feed</li>
            <li className='p-4'>Donate</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20} />}
        </div>
        <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#fffff] m-4'>React</h1>
            <ul className='pt-12 uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Signup</li>
            <li className='p-4 border-b border-gray-600'>Login</li>
            <li className='p-4 border-b border-gray-600'>Feed</li>
            <li className='p-4 border-b border-gray-600'>Donate</li>
            </ul>
        </div>

    </div>
  )
}
