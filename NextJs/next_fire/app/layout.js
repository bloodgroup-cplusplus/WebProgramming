'use client'
import './globals.css'
import { AuthContextProvider } from './context/AuthContext'
import Link from 'next/link'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <main>
            <nav>
              <Link href = "/">
              </Link>
              <Link href = "/signin">
                Signin
              </Link>
              <Link href = "/signup">
                Signup
              </Link>
            </nav>
          </main>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}
