"use client"
import React from 'react'
import useCart from './(store)/store'
import ReactDom from "react-dom"

export default function Modal() {
  const closeModel = useCart(state=>state.setOpenModal)
  return ReactDom.createPortal(
    <div className='fixed top-0 left-0 w-screen h-screen z-50'>
      <div onClick={closeModel} className='bg-transparent absolute inset-0'>
        <div className='flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4'>
          <div className='flex items-center justify-between text-xl relative'>
            <h1>Cart</h1>
            <i onClick={closeModal} className='fa-solid cursor-pointer hover:opacity-60 fa-xmark'></i>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3'></div>
          </div>
          
        </div>
      </div>
    </div>,
    document.getElementById("portal")
    
  )
}
   