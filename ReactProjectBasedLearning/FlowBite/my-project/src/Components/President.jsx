import React from 'react'
import president from "./Images/president.webp"

const President = () => {
  return (

    <div>

    <div className="container my-24 px-6 mx-auto">
    
    <section className="mb-32 text-gray-800 text-center md:text-left">
    <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">President's Message</h2>
    
      <div className="block rounded-lg shadow-lg bg-white">
        <div className="flex flex-wrap items-center">
          <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
            <img src={president} alt="Trendy Pants and Shoes"
              className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="text-3xl font-bold mb-2 text-black">Shri Kunzang Sherpa</h2>
              <p className="font-semibold mb-4">President Sikkim Teachers Assocaition</p>
              <p className="text-gray-500 font-extralight mb-6">
              "Sikkim Teachers Association (STA) is one of the oldest associations in Sikkim which has been functioning over the past 43 years. It has been tirelessly working fo​r​ the welfare of teaches including Pre-Primary Tea​chers (PPT), Primary Teachers(PRT), Graduate Teachers(GT), Post Graduate Teachers(PGT), Head Masters(HMPS,HMJHS,HMSS), and also the Principals. With the main focus to build a strong umbrella association comprising all categories of  teachers from PPT to Principal the association has been revamped recently right from the Block Administrative Center(BAC) lev​el. No​w there are very active members in the Block Executive Committee(BECs), District Ex​ecutive Committee(DECs), Centeral Exective Committee(CECs) who are carrying out various activites of the association with outmost sincerity and dedication. Our assocatio​n also boasts of being the only assocation in the state having over 500 executive members. STA has been working for the welfare of the teachers and also the students of the state. Even in the time of the COVID 19 pandemic STA was continously working fo the betterment of our respected teaches and students. Some of the activities includes online training of around 1200 tea​​ches from East and West Districts in collaboration with NCERT on the newly introducted text books; distribution of smartphone to deprived students from remote ares of the stat​​e.​"
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

export default President