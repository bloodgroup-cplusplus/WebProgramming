import React from 'react'

export default function Header() {
  return (
    <div className='sticky top-0 w-full left-0 bg-inherit flex-items-center justify-between p-4  px-6 border-solid border-white '> 
    <h1 className='text-3xl sm:text-6xl'>TODO LIST</h1>
    <i className="fa-solid fa-user text-xl sm:text-3xl"></i>
    </div>
  )
}
