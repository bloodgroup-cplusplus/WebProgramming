"use client"
import React from 'react'
import ReactDom from "react-dom"

export default function Modal() {
  return ReactDom.createPortal(
    <div>Modal</div>,
    document.getElementById("portal")
    
  )
}
   