import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav>
            <Link href ="/">
              Home
            </Link>
            <Link href = "/notes">
              Notes
            </Link>
          </nav>
        </main>
        {children}
        </body>
    </html>
  )
}
