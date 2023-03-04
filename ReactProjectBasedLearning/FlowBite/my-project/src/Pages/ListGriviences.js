import React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
//import Comments from "./Comments"

const ListGriviences = ({griviences,user}) => {
    const[currentPage,setCurrentPage] = useState(1)
    console.log(user.photoURL)
    const chunkSize=5;

    // sort according to the created date 
    //griviences.sort((x,y)=>x['createdAt'].toDate().toString()- y['createdAt'].toDate().toString())


   //  divide the form responses into chunks of 5

    const formResponseChunks = griviences.reduce((acc,curr,i)=>{
        const chunkIndex=Math.floor(i/chunkSize)
        if(!acc[chunkIndex])
        {
            acc[chunkIndex] = [];
        }
        acc[chunkIndex].push(curr)
        return acc;
    },[]);

    

    // get the current chunk of form response 
    const currentFormResponses = formResponseChunks[currentPage-1];
return (

    <div>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Recent Griviences</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
      </div> 
      <div class="grid gap-8 lg:grid-col-2">
        {currentFormResponses.map((grivience)=>(
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                  {grivience['schoolName']}
                  </span>
                  <span class="text-sm">{grivience['createdAt'].toDate().toString().substring(3,25)}</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{'Grivience heading goes here'}</h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{grivience['grivience']}</p>
              <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                      <img class="w-7 h-7 rounded-full" src={user.photoURL} alt="user avatar" />
                      <span class="font-medium dark:text-white">
                        {grivience['name']}
                      </span>
                  </div>

                  {/*<a href="/comments"  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>*/}
                   <a  id="email-link" href={`mailto:${grivience['email']}`}className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      {grivience['email']}
                    </a>

        
              </div>
          </article>  
        ))}

        <div class="flex flex-col items-center">
          <div class="inline-flex mt-2 xs:mt-0">
            {currentPage>1 &&(
         <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>setCurrentPage(currentPage-1)}>
        <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Prev
    </button>
            )}
      {currentPage<formResponseChunks.length &&(
    <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>setCurrentPage(currentPage+1)}>
        Next
        <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
      )}
  </div>
</div>

        
      </div>  
  </div>
</section>
        










        
        
       </div>
  )
}

export default ListGriviences