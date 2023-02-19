import React from 'react'
import sta_logo from "./Images/sta_logo.png"

function Footer() {
  return (


<footer class="p-4 bg-black sm:p-6 dark:bg-gray-900">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="" class="flex items-center">
                <img src={sta_logo} class="h-8 mr-3" alt="FlowBite Logo" />
                
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Quick Links</h2>
                <ul class="text-white dark:text-gray-400">
                    <li class="mb-4">
                    </li>
                    <li>
                    </li>
                    <li>
                        <a href="https://www.sikkimhrdd.org/" target="_blank" rel="noreferrer">Sikkim Hrdd</a>
                    </li>
                    <li>
                        <a href="https://sikkim.gov.in/" target="_blank" rel="noreferrer">Government of Sikkim </a>
                        </li>
                    <li>
                        <a href="https://www.sikkimtourism.gov.in/Public/index" target="_blank" rel="noreferrer">Sikkim Tourism</a>
                    </li>
                    <li>
                        <a href="https://www.education.gov.in/en" target="_blank" rel="noreferrer">Ministry of Education </a>
                    </li>
                    <li>
                        <a href="https://nipunbharat.education.gov.in/" target="_blank" rel="noreferrer">Nipun Bharat</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                <ul class="text-white dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://www.youtube.com/@user-ud2is4ib5l" target="_blank" class="hover:underline ">Youtube</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/sta1978" target="_blank" class="hover:underline">Facebook</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                <ul class="text-white dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-white sm:text-center dark:text-white">© 2023 <a href="#" class="hover:underline">STA™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/sta1978" class="text-white hover:text-white-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Facebook page</span>
            </a>

            <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden='true'></svg>
            </a>
            
            
        </div>
    </div>
</footer>

      
  )
}

export default Footer
