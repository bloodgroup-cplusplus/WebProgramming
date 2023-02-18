import React from 'react'
import sta_logo from "./Images/sta_logo.png" 


function Header() {
  return (

    <section class="bg-white dark:bg-gray-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden" src={sta_logo} alt="dashboard image"/>
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sikkim Teachers Association</h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Sikkim Teachers Association (STA) is one of the oldest associations in Sikkim which has been functioning over the past 43 years. It has been tirelessly working for the welfare of t​eachers including Pre-Primary Teachers (PPT), Primary Teachers (PRT), Graduate Teachers (GT), Post Graduate Teachers (PGT), Head Masters (HMPS, HMJHS, HMSS), and also the Principals. With the main focus to build a strong umbrella association comprising all categories of teachers from PPT to Principal the association has been revamped recently right from the Block Administrative Center (BAC) level. Now there are very active members in the Block Executive Committee (BECs), District Executive Committee (DECs), Central Executive Committee (CECs) who are carrying out various activities of the association with outmost sincerity and dedication. Our association also boasts of being the only association in the state having over 5000 Executive Members.</p>
            <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>




    
      
  )
}

export default Header
