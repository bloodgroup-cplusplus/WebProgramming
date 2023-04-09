import React from 'react'
import Image from 'next/image'
import burtuk from "../Images/sgc_burtuk.jpeg"
import Link from 'next/link'

 const Burtuk = () => {
  return (
    <>
    
    <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image className="w-full dark:hidden" src={burtuk} alt="Nar Bahadur College Image" width={400} height={400}/>
    <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sikkim Government College Burtuk </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
        To fulfill the dreams and aspirations of higher education in young minds by inculcating knowledge and skills for future education and employment.

</p>

<Link href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-green-400 focus:ring-green-400 focus:ring-green-400 dark:focus:ring-primary-900">
                View Courses
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link href="https://sgcburtuk.rwcs.in/v2/wp/" target= "_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Visit College Website
            </Link> 
        
    </div>

</div>
</section>
</>
  )
}

export default Burtuk