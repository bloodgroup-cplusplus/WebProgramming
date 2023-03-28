import './globals.css'
import {Inter} from "next/font/google"
import Link from "next/link"

const inter = Inter({subsets:['latin']})

export const metadata = {
  title: 'Fruit Shop',
  description: 'Hyperinflated fruit store - best prices 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> 
      </head>
      <body className={'min-h-screen flex flex-col relative'+ inter.className}>
      <header className='sticky top-0 p-6 bg-white border-b border-solid border-blue-900
      shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between'>
        <Link href = {"/"}>
        <h1 className='uppercase cursor-pointer hover:'>Fruit Shop</h1>
        </Link>
        <i className="fa-solid cursor-pointer hover:text-slate-500 fa-cart-shopping"></i>
      </header>
        <div className='flex-1'>
          {children}
        </div>
      </body>
    </html>
  )
}
