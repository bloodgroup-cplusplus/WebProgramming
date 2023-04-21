import './globals.css'
import {Nunito} from "next/font/google"
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
// the clientOnly  only wraps the client component during hydration
//import Modal from './components/modals/Modal'

import RegisterModal from './components/modals/RegisterModal'



export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets:['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal/>
          {/*<Modal title="Hello World" isOpen/>*/}
        <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
