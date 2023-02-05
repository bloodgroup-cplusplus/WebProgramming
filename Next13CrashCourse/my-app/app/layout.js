import './globals.css'
// let's import any google font 

import { Montserrat } from '@next/font/google'

const montserrat= Montserrat({
  weignt:['400','700'],
  subsets:['latin'],
  variable:"--font-montserrat",

})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
     <body className={`${montserrat.className}`}>
      {children}
       <nav>
        <h1> logo</h1>
        <ul>
          <li> <a href="#">About</a></li>
        </ul>
      </nav>
      
      
      </body>
    </html>
  )
}
