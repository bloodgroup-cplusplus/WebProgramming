import React from 'react'
import education_minister from "./Images/education_minister.png"

const EducationMinister = () => {
  return (

<div>

    <div class="container my-24 px-6 mx-auto">
    
    <section class="mb-32 text-gray-800 text-center md:text-left">
    <h2 class="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Education Minister's Message</h2>
    
      <div class="block rounded-lg shadow-lg bg-white">
        <div class="flex flex-wrap items-center">
          <div class="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
            <img src={education_minister} alt="Trendy Pants and Shoes"
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
              <h2 class="text-3xl font-bold mb-2 text-black">Shri Kunga Nima Lepcha</h2>
              <p class="font-semibold mb-4">Education Minister Sikkim</p>
              <p class="text-gray-500 mb-6">
              "I have great pleasure in conveying my best wishes to the Sikkim Teachers Association for launching their official website, which brings all the teachers of various disciplines on a common platform. Today the internet is first place most people go when looking for information. It is the most powerful means of commun​ication and a globally acce​ssible to anyone, anywhere, anytime. I applaud the entire teaching faculty of our state for their sincere, dedicated and relentless work in imparting quality to our dear students. Hope this website gives an insight into the activities related to teachers. I also congratulate the editorial team for the hard work and dedication they have invested in creating this website, and wish them success in all future endeavors."
              </p> 
            </div>
          </div>
        </div>
      </div>
    
    </section>
    
    </div>
    
    
    
    
    
    
    
    
    
        </div>










  )
}

export default EducationMinister