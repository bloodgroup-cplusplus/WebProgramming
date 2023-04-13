'use client'
import React from 'react'
import Courses from '../components/Courses'
import { usePathname,useSearchParams } from 'next/navigation';
function useNavigationEvent()
{
  const pathname= usePathname()
  const searchParams = useSearchParams()
  const value=searchParams.toString()
  return value.substring(value.indexOf("=")+1)

}

const Page =  () => {
  const college_name = useNavigationEvent()


  return (
            <>
          <h2 className="mb-4 text-4xl  text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Under Graduate Programs</h2>
          <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">SGC Namchi offers 19 different Under Graduate Programs </p>
          <Courses college={college_name} />
          </>




              
 
  )
}

export default Page
