import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>      
        <h1 className='w-full text-3xl font-bold text-[#fffff]'>React</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Signup</li>
            <li className='p-4'>Login</li>
            <li className='p-4'>Feed</li>
            <li className='p-4'>Donate</li>
        </ul>

    </div>
  )
}
