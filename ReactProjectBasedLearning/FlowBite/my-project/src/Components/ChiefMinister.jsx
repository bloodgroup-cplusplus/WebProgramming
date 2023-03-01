import React from 'react'
import chief_minister from "./Images/chief_minister.png"


function ChiefMinister() {
  return (
    <div>

<div class="container my-24 px-6 mx-auto">

<section class="mb-32 text-gray-800 text-center md:text-left">
<h2 class="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Chief Minister's Message</h2>

  <div class="block rounded-lg shadow-lg bg-white">
    <div class="flex flex-wrap items-center">
      <div class="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
        <img src={chief_minister} alt="Trendy Pants and Shoes"
          class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
      </div>
      <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
        <div class="px-6 py-12 md:px-12">
          <h2 class="text-3xl font-bold mb-2 text-black">Shri Prem Singh Tamang (Golay)</h2>
          <p class="font-semibold mb-4">Chief Minister Sikkim</p>
          <p class="text-gray-500 mb-6 font-extralight">
          "It gives me immense pleasure to know that Sikkim Teachers Assocation (STA) is launching its website as a medium to communicate with the teaching community of sikkim and beyond. The umbrella organization of teachers has been mak​ing an impace on educational scenario of the​​​ State and I am confident that the ​​​​website serves its true purpose by being constantly updated, functional, interactive.I look​​​ forward to be updated on matters and activities relating to teachers, New Education Policy and other State Government Initiatives. The State Government is committed to improve the quality of education while also working for the walfare of the teaching community.We remain grateful to the hardworking teachers for their contributions towards shaping minds and building our state and nation. In this age of digital communication, I am sure the STA website will provide information on teachers and education sector which can be beneficial not only for the teachers and students, but the common people at large.My best wishes to the association for their endeavor".       
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

export default ChiefMinister