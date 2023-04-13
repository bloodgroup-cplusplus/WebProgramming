import React from 'react'
import namchi from "../Images/namchi.jpeg" 
import Link from 'next/link'
import Image from 'next/image'

const Namchi = () => {
    return (
        <>
        
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <Image className="w-full dark:hidden" src={namchi} alt="Nar Bahadur College Image" width={400} height={400}/>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sikkim Government College Namchi </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">

            The college has a beautifully conceptualized 3-storeyed building comprising of spacious classrooms, library, laboratories, offices and a multi-purpose auditorium. The hostels for both the girls and the boys with an intake capacity of 180 students have been constructed and is expected to function from August, 2022. The staff quarters for the faculties and non-teaching staff have been functioning since April, 2022. A sports complex is also being developed in the campus. 
    </p>
    
    <Link href= {{pathname:'/courses', query:{college:'SikkimGovernmentCollegeNamchi'}}}className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-primary-800 focus:ring-green-400 focus:ring-green-400 dark:focus:ring-primary-900">
                    View Courses
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
                <Link href="https://sgcnamchi.com/" target='_blank' class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Visit College Website
                </Link> 
            
        </div>
    
    </div>
    </section>
    </>
      )
    }



export default Namchi
