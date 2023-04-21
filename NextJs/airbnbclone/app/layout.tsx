import './globals.css'
import {Nunito} from "next/font/google"
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
// this only wraps the client component during hydration
import Modal from './components/modals/Modal'



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
          <Modal title="Hello World" isOpen/>
        <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
