import React from 'react'
import history from "./Images/history.webp"
import new_members from "./Images/new_members.webp"
import mala_press from "./Images/mala_press.webp"
import new_members_press from "./Images/new_members_press.webp"
import sanitization_drive from "./Images/sanitization_drive.webp"
import blood_donation from "./Images/blood_donation.webp"
import latest_photo from "./Images/latest_photo.webp"
import president_press from "./Images/president_press.webp"
import zoom from "./Images/zoom.webp"
import with_banner from "./Images/with_banner.webp"
import with_cm from "./Images/with_cm.webp"
import blood_again from "./Images/blood_again.webp"

function Gallery() {
  return (
    <div>
        <section className="overflow-hidden text-gray-700 ">
        <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Gallery</h2>
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={history}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={new_members}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={mala_press}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={new_members_press}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={sanitization_drive}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={blood_donation}/>
        </div>
      </div>


      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={latest_photo}/>
        </div>
      </div>



      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={president_press}/>
        </div>
      </div>


     <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={zoom}/>
        </div>
      </div>


      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={with_banner}/>
        </div>
      </div>



      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={with_cm}/>
        </div>
      </div>




      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
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