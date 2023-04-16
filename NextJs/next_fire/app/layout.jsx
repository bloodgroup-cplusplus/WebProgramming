'use client'
import './globals.css'
import { AuthContextProvider } from './(context)/AuthContext'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <main>
           <Navbar/> 
          </main>
        {children}
        <div></div>
        <span></span>
        <Footer/>
        </AuthContextProvider>
        </body>
    </html>
  )
}
