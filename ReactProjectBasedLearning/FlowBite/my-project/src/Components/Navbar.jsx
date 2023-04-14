import React from 'react'
import {useState} from "react"
import sta_logo from "./Images/sta_logo.webp"
import {useAuthContext} from "../Hooks/useAuthContext"
import {useLogout} from "../Hooks/useLogout"

 function Navbar()  {
  const{logout} = useLogout()
  const{user} = useAuthContext()
  const[toggleMenu,setToggleMenu]=useState(false)
  return (

<nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" className="flex items-center">
        <img src={sta_logo}className="h-20 py-0 mr-3 sm:h-16" alt="Sta Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">STA</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className= "w-full md:block md:w-auto" id="navbar-default">
      {!user &&(
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Home</a>
        </li>

        <li>
          <a href="/signup" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signup</a>
        </li>

        <li>
          <a href="/login" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
        </li>
        <li>
          <a href="/feed" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Feed</a>
        </li>

        <li>
          <a href="https://rzp.io/l/AnXnEvBNS" target="_blank" className="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Donate</a>
        </li>
      </ul>

      )}

      {user &&(
         <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-5 md:space-y-0 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
          <li>
           <a href="/" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</a>
          </li>

          <li>
           <a href="/griviences" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Griviences</a>
          </li>

          <li>
           <a href="/addgriviences" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AddGrivience</a>
          </li>
          <li>
           <a href="/feed" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Feed</a>
          </li>

          <li>
           <a href="https://rzp.io/l/AnXnEvBNS" target="_blank" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Donate</a>
          </li>
          <li>

          <button type="submit" onClick={logout} className="w-full text-black bg-white hover:bg-primary-700  focus:ring-3 focus:outline-none focus:ring-primary-100 font-medium rounded-lg text-sm px-2 py-0 text-centre dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Logout</button>

         </li>

        </ul>

      )}


















    </div>
  </div>
</nav>




  )
}
export default Navbar