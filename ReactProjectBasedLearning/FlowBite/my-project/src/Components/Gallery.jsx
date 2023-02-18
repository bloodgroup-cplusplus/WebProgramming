import React from 'react'
import history from "./Images/history.png"
import new_members from "./Images/new_members.png"
import mala_press from "./Images/mala_press.png"
import new_members_press from "./Images/new_members_press.png"
import sanitization_drive from "./Images/sanitization_drive.png"
import blood_donation from "./Images/blood_donation.png"
import latest_photo from "./Images/latest_photo.png"
import president_press from "./Images/president_press.png"
import zoom from "./Images/zoom.png"
import with_banner from "./Images/with_banner.png"
import with_cm from "./Images/with_cm.png"
import blood_again from "./Images/blood_again.png"

function Gallery() {
  return (
    <div>
        <section class="overflow-hidden text-gray-700 ">
        <h2 class="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Gallery</h2>
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={history}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={new_members}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={mala_press}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={new_members_press}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={sanitization_drive}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={blood_donation}/>
        </div>
      </div>


      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={latest_photo}/>
        </div>
      </div>



      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={president_press}/>
        </div>
      </div>


     <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={zoom}/>
        </div>
      </div>


      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={with_banner}/>
        </div>
      </div>



      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={with_cm}/>
        </div>
      </div>




      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={blood_again}/>
        </div>
      </div>

      





















































    </div>
  </div>
</section>







    </div>
  )
}

export default Gallery