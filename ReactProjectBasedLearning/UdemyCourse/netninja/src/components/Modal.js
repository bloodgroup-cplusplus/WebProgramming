import React from 'react'
// this is used to create a portal
import ReactDOM from 'react-dom' 

import './Modal.css'
export default function Modal({children,handleClose}) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
        <div className='modal' style={{
          border:"4px solid",
          borderColor:"#ff4500",
          textAlign:"center"}}>
            {children}
           <button onClick={handleClose} >close</button>
        </div>
      
    </div>
  ), document.body)
}
