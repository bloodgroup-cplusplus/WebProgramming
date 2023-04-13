'use client'
import React from 'react'
import Courses from '../components/Courses'
import { useRouter } from 'next/router'

export async function getServerSideProps({context}){
  const param = context.paramName;
  console.log(param)
}

const Page = async () => {


  return (
            <>
          <h2 className="mb-4 text-4xl  text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Under Graduate Programs</h2>
          <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">SGC Namchi offers 19 different Under Graduate Programs </p>
          <p>{keyword}</p>
          <Courses/>
          </>




              
 
  )
}

export default Page
