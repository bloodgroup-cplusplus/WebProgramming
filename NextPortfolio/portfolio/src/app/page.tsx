import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className='text-blue-500'>Lets build an Awesome portfolio</h1>
      <Header/>
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/*Contact Me */}



    </div>
    
  )
}
