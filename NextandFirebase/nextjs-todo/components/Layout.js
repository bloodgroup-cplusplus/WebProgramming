import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout(props) {
    const {children} = props
  return (
    <div className='flex flex-col min-h-screen relative bg-slate-900 text-white'>
        <Header />
        <main className= 'flex-1 '> 
            {children}


      </main>
      <Footer/>
    </div>
  )
}
