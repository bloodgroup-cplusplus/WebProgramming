import React from 'react'
import incharges from "./Images/incharges.png"
import advisors from "./Images/advisors.png"
import griviences_readdressal from "./Images/griviences_readdressal.png"

function OtherMembers() {
  return (



    <section class="mb-20 text-gray-700">
  <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
    <h3 class="text-3xl font-bold mb-6 text-gray-800">Other Executives</h3>
  </div>

  <div class="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
    <div class="mb-12 md:mb-0">
      <div class="flex justify-center mb-6">
        <img src={incharges}class="rounded-full shadow-lg w-32"/>
      </div>
      <h5 class="text-xl font-semibold mb-4">Incharges</h5>
      <p class="mb-4 font-extralight">Educational policies expert committee: <strong>Mr.Bishal Darnal</strong></p>
      <p class="mb-4 font-extralight">Association Disciplinary action committee: <strong>Mr.Gyaltsen Sherpa</strong></p>
      <p class="mb-4 font-extralight">Humanitarian and health assistant committee: <strong>Mr.Gopal Tamang</strong></p>
      <p class="mb-4 font-extralight">Nature and environmental conservation committee: <strong>Mrs.Marium Gurung</strong></p>
      <p class="mb-4 font-extralight">Cultural artistic and music committee: <strong>Mr Suman Chettri</strong></p>
    </div>
    <div class="mb-12 md:mb-0">
      <div class="flex justify-center mb-6">
        <img src={advisors}class="rounded-full shadow-lg w-32"/>
      </div>
      <h5 class="text-xl font-semibold mb-4">Advisors</h5>
      <p class="mb-4">Mr MK Pradhan</p>
      <p class= "mb-4">Mr KB Bhandari</p>
      <p class= "mb-4">Mr Bhim Khanal</p>
      <p class = "mb-4">Mr CK Rai</p>
      <p class = "mb-4"> Mr DT Lepcha</p>
      <p class = "mb-4"> Mr BK Basnett</p>
      
    </div>
    <div class="mb-0">
      <div class="flex justify-center mb-6">
        <img    src={griviences_readdressal} class="rounded-full shadow-lg w-32"/>
      </div>
      <h5 class="text-xl font-semibold mb-4">Griviences Committee</h5>
      <p class="mb-4 font-extralight"><strong>Mr Tilak Sharma</strong> -HM, JHS</p>
      <p class="mb-4 font-extralight"><strong>Mr Pempa Lepcha</strong> - HM,PS</p>
      <p class = "mb-4 font-extralight"> <strong>Mr Siddharth Neopaney</strong> - PGT</p>
      <p class = "mb-4 font-extralight"><strong>Mrs Trinity G Namchu</strong> - PRT</p>
      <p class = "mb-4 font-extralight"><strong>Mrs Sita Devi Subba</strong> - PPT</p>
      <p class = "mb-4 font-extralight"> <strong>Mr Surendra Subba</strong> - GT</p>
    </div>
  </div>
</section>
  
  )
}

export default OtherMembers