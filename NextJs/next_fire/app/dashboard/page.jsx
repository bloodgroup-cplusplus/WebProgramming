'use client'
import React from "react"

import { useAuthContext } from "../context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Signout from "../firebase/auth/signout"
import nbd_returns from "../Images/tadong.jpeg"
import Image from "next/image"





function Page()
{
    const {user} = useAuthContext()
    const router = useRouter()
    const handleForm = async (event) => {
        event.preventDefault()
    
        const { result, error } = await Signout();
    
        if (error) {
            return console.log(error)
        }
    
        // else successful
        console.log(result)
    }





    useEffect(()=>{
        if(user == null) router.push("/")
    },[user])

    return (
        <>
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Choose Your College Here</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Governement of Sikkim has 11 outstanding affliated under Sikkim University. All colleges equipped with world class infrastructure and facilities ensures a flying start to your career. </p>

        <section className="bg-white dark:bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <Image className="w-full dark:hidden" src={nbd_returns} alt="Nar Bahadur College Image" width={300} height={400}/>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nar Bahadur Bhandari Government College Tadong </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Nar Bahadur Bhandari Government College, Tadong, formerly known as Sikkim Government College, Tadong, was established in September, 1977 by an Act of State Legislature. The campus is spread over 22 acres in Tadong, 5 kms from Gangtok, the Capital of Sikkim. The College is affiliated to Sikkim University and is governed by Directorate of Higher Education, Human Resource Development Department, Govt. of Sikkim.

The college strives to cater to the growing need of quality education in Sikkim. In its endeavour to uphold its mission of emancipating our youth through value-based holistic higher education, the college offers Undergraduate (UG) and Post Graduate (PG) programmes in Arts, Commerce and Science subjects. The curriculum includes an intensive semester system and Choice Based Credit System (CBCS) along with an inter-disciplinary and interactive course structure. Presently, the college is affiliated to Sikkim University, a Central University established by an Act of Parliament of Indian in 2007.

</p>
            <a href="#" class="inline-flex items-center text-white bg-green-500 hover:bg-primary-800 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                View Courses 
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>

    </div>
    </section>
    </>

    )
}


export default Page;