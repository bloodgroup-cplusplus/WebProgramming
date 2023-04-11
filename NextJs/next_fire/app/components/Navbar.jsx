import React from 'react'
import Image from 'next/image'
import logo from "../Images/Seal_of_Sikkim.png"
import Link from 'next/link'
import {useAuthContext} from "../context/AuthContext"
import  SignOut  from "../firebase/auth/signout" 
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const handleSignout=()=>{
    const{result,error} = SignOut() 
    if(error)
    {
      console.log('signout error')

    }
    router.push("/")

  
  }
  const {user} = useAuthContext()
  if(!user)
  {

  return (
    <nav className="bg-green-500 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image src={logo} height={60} width={60} alt = "Government Of Sikkim Logo" />
        <span className="self-center text-sm text-semibold text-white font-light dark:text-white">Government of Sikkim</span>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-light text-sm flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-500 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-green-500 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link  href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link href="/about" className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link href="/announcements" className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Announcements</Link>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )}
  else
  {
    return (
    <nav className="bg-green-500 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
        <Image src={logo} height={60} width={60} alt = "Government Of Sikkim Logo" />
        <span className="self-center text-sm text-semibold text-white font-light whitespace-nowrap dark:text-white">Government of Sikkim</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-1 ml-2 text-sm text-gray-500 rounded-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-2 h-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-light flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-500 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-green-500 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <button  onClick={handleSignout} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Signout
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>

        <li>
          <Link href="/about" className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link href="/announcements" className="block py-0 pl-3 pr-4 text-white rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Announcements</Link>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
    }

    }

export default Navbar