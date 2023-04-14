import React from 'react'
import gangtok from "./Images/gangtok.webp"
import geyzing from "./Images/geyzing.webp"
import mangan from "./Images/mangan.webp"
import namchi from "./Images/namchi.webp"
import pakyong from "./Images/pakyong.webp"
import soreng from "./Images/soreng.webp"

function Dec() {
  return (

    <>
    <h2 class="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">District Executive Committee</h2>
    <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Gangtok District</h3>
            <p class="my-4 font-thin">President: <strong>Chungden Bhutia</strong> (HM/IC Ranka Raigaon PS)</p>
            <p class="my-4 font-thin">Vice President I : <strong>Bhagirath Giri</strong> (HM/IC Zingla PS)</p> 
            <p class="my-4 font-thin">Vice President II : <strong>Leela Sharma</strong> (PGT Deorali SSS)</p>
            <p class="my-4 font-thin">General Secretary : <strong>Bikash Sundas</strong>(GT SMGSSS Khamdong) </p>
            <p class="my-4 font-thin">Joint Secretary : <strong>Rohit Gautam</strong> (PRT Samdong SSS)</p> 
            <p class="my-4 font-thin">Treasurer I : <strong>Khem Lall Timsina</strong> (HM Ranka BAC)</p>
            <p class="my-4 font-thin">Treasurer II: <strong>Pintso Bhutia</strong> (GT Sichey SSS)</p>
            <p class="my-4 font-thin">Publicity Secretary I: <strong>Lekhnath Bhattarai</strong> (PGT Samdong SSS)</p>
            <p class="my-4 font-thin">Publicity Secretary II: <strong>Purna Bahadur Subba</strong> (HM Sakyong Chisopani JHS)</p>
            <p class="my-4 font-thin">Literary Secretary : <strong>Rakesh Pandey</strong> (GT Khambal JHS)</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={gangtok} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Gangtok East Sikkim</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Geyzing District</h3>
            <p class="my-4 font-thin">President : <strong>Mahdadev Bhandari</strong> (PRT/HM,IC Sanku-PS)</p> 
            <p class="my-4 font-thin">Vice President I : <strong>Sudip Subba</strong> (PRT/HM,IC Pewathang Tashiding PS)</p>
            <p class="my-4 font-thin">Vice President II : <strong>Anita Rana</strong> (PRT Geyzing GSSSS)</p>
            <p class="my-4 font-thin">General Secretary : <strong>Krishna Rai</strong> (PRT/HM,IC Lethang PS)</p> 
            <p class="my-4 font-thin">Joint Secretary : <strong>Prerna Lepcha</strong> (HM,Lower Radhu PS)</p>
            <p class="my-4 font-thin">Publicity Secretary I : <strong>Ram Kumar Sharma</strong> (GT Bermiok SS)</p>
            <p class="my-4 font-thin">Publicity Secretary II :<strong> Serina Tamang</strong> (PRT,Najoor Berfok JHS)</p>
            <p class="my-4 font-thin">Treasurer I : <strong>Tshering Zangpoo </strong>(PGT Pelling SSS)</p>
            <p class="my-4 font-thin">Treasurer II :<strong> Lakpa Hissey Sherpa</strong> (HM Upper Martam PS)</p>
            <p class= "my-4 font-thin">Office Secretary : <strong>Ravi Khaling</strong>(HM/IC Ramitay PS)</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={geyzing} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Geyzing West Sikkim</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mangan District</h3>
            <p class="my-4 font-thin">President :<strong> Sonam Tamang </strong>(PRT Naday Monastic PS)</p> 
            <p class="my-4 font-thin">Vice President :<strong> Dawgyal Bhutia</strong> (BLT Tingchim SS)</p>
            <p class="my-4 font-thin">General Secretary : <strong>Jay Jay Lepcha</strong> (HM JHS Lingthem)</p>
            <p class="my-4 font-thin">Joint Secretary I :<strong> Mingma Sherpa</strong> (HM GPS Lum)</p> 
            <p class="my-4 font-thin">Joint Secretary II : <strong>Thupden Lachungpa</strong> (GT Swayem JHS)</p>
            <p class="my-4 font-thin">Treasurer : <strong>Pema Ongyal Bhutia</strong> (PRT Phodong PS)</p>
            <p class="my-4 font-thin">Publicity Secretary I : <strong>Samuel Samser</strong> (PPT Theng PS)</p>
            <p class="my-4 font-thin">Publicity Secretary II :<strong> Peutook Kazi</strong> (PRT Manul SS)</p>
            <p class="my-4 font-thin">Literary Secretary : <strong>Lhaden Lepcha</strong> (PRT Malling PS)</p>
            <p class= "my-4 font-thin">Office Secretary : <strong>Den Tshering Lepcha</strong> (PRT Phensong PS)</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={mangan} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Mangan North Sikkim</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Namchi District</h3>
            <p class="my-4 font-thin">President : <strong>NT Lepcha</strong> (PRT Mangbrue PS)</p> 
            <p class="my-4 font-thin">Vice President I : <strong>DB Thapa</strong> (PRT Dhar-gaon PS)</p>
            <p class="my-4 font-thin">Vice President II : <strong>Bikram Mukhia</strong> (PGT VCGLSSS Ravangla)</p>
            <p class="my-4 font-thin">General Secretary : <strong>Rekash Pradhan</strong> (GT GJHS Panchgharey)</p> 
            <p class="my-4 font-thin">Joint Secretary I : <strong>Sunil Gurung</strong> (PRT Textbook Section Namchi)</p>
            <p class="my-4 font-thin">Joint Secretary II : <strong>Namgyal Sherpa</strong> (PRT Kewzing SSS)</p>
            <p class="my-4 font-thin">Publicity Secretary I : <strong>Durga Prasad Sharma</strong> (GT Temi SSS)</p>
            <p class="my-4 font-thin"> Publicity Secretary II : <strong>HB Kharga</strong> (GT Lingee SS)</p>
            <p class="my-4 font-thin">Treasurer I : <strong>Sujata Rai</strong> (HM Dhar-Gaon PS)</p>
            <p class= "my-4 font-thin">Treasurer II : <strong>Sushma Basnet</strong> (HM Rubdi Toribari PS)</p>
            <p class= "my-4 font-thin"> Office Secretary : <strong>Surya Man Pradhan</strong> (Maniram SS PRT)</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={namchi} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Namchi South Sikkim</div>
            </div>
        </figcaption>    
    </figure>
    </div>

    <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">

    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Pakyong District</h3>
            <p class="my-3 font-thin">President :<strong> NT Sherpa</strong> (PRT/HM,IC Titiribotey PS)</p> 
            <p class="my-4 font-thin">Vice President I : <strong>Karma Tenzing Bhutia</strong> (HM Parkha JHS)</p>
            <p class="my-4 font-thin">Vice President II : <strong>GS Regmi</strong> (HM Gangchung JHS)</p>
            <p class="my-4 font-thin">General Secretary : <strong>Vinod Pradhan</strong> (PRT Rhenok SSS)</p> 
            <p class="my-4 font-thin">Joint Secretary I :<strong> Mahendra Thapa</strong> (PGT Chujachen SSS)</p>
            <p class="my-4 font-thin">Joint Secretary II : <strong>Subash Rai</strong> (HM Loosing PS)</p>
            <p class="my-4 font-thin">Publicity Secretary I : <strong>Sunil Karki</strong> (GTY Upper Sumin JHS)</p>
            <p class="my-4 font-thin">Publicity Secretary II : <strong>Bhim Pradhan</strong> (GT Rhenock Bazar -JHS)</p>
            <p class="my-4 font-thin">Treasurer I : <strong>Sunita Devi Sharma</strong> (GT Duga-Lakha JHS)</p>
            <p class= "my-4 font-thin">Treasurer II : <strong>Ladenla Lassoppa</strong> (PRT Pakyong Bazaar-JHS)</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={pakyong} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Pakyong East Sikkim</div>
            </div>
        </figcaption>    
    </figure>




    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Soreng District</h3>
            <p class="my-4 font-thin">President : <strong>Lakhhang Subba</strong> (GT Sombaria SS)</p> 
            <p class="my-4 font-thin">Vice President I : <strong>Sharmila Bhandari</strong> (PRT Soreng SSS)</p>
            <p class="my-4 font-thin">Vice President II : <strong>Nirmal Chettri</strong> (GT Deythang SSS)</p>
            <p class="my-4 font-thin">General Secretary : <strong>Suman Khati</strong> (PRT Upeer Chujen JHS)</p> 
            <p class="my-4 font-thin">Joint Secretary I : <strong>Buddha Hang Subba</strong> (GT Lungyam JHS)</p>
            <p class="my-4 font-thin">Joint Secretary II : <strong>Dinesh Rai</strong> (HM Rupsang PS)</p>
            <p class="my-4 font-thin">Publicity Secretary : <strong>Prabin Gurung</strong> (AHM/GT Rinchengpong SS)</p>
            <p class="my-4 font-thin">Treasurer : <strong>Kailash Gurung</strong>(PRT Singling JHS)</p>
            <p class="my-4 font-thin">Asst Treasurer : <strong>Kunsang Dolma Tamang</strong> (PRT Bhumsey JHS)</p>
            <p class="my-4 font-thin">Office Secretary :<strong> Mon Maya Sarki</strong> (PRT Birdang JHS)</p>
            <p class= "my-4 font-thin">Literary Secretary : <strong>Suman Chettri</strong> (GT Bojek JHS)</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={soreng} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Soreng West Sikkim</div>
            </div>
        </figcaption>    
    </figure>
    </div>





















</>

    









    
      
  )
}

export default Dec
