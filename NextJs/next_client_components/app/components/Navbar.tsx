import React from 'react'
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className=''>
        <h1 className='text-3xl font-bold text-black grid place-content-center mb-2 md:mb-0'>
            <Link href="/">WikiRocket!</Link>
        </h1>
    </nav>
      
  )
}
