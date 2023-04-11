import React from 'react'

const Courses = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Humanities</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
      </div> 
      <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                            </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Bachelors of Arts Economics</a></h2>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">30 Sanctioned Seats</a></h2>

              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Welcome to the Economics undergraduate department! Our program offers a diverse range of courses taught by renowned economists, providing students with a solid foundation in economic theory, quantitative analysis, and policy applications. We emphasize practical learning and provide opportunities for hands-on experience through internships, research projects, and collaborations with industry partners. Our graduates acquire the analytical and critical thinking skills necessary to succeed in finance, consulting, public policy, and academia. Join us for a rewarding journey in economics!</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                      <span className="text-xs font-medium dark:text-white">
                          Dr.Somedean Genericsurname (HOD)
                      </span>
                  </div>
                  <a href="#" className="inline-flex items-center font-medium text-green-500 dark:text-primary-500 hover:underline">
                      Apply
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article> 
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Bacholers of Arts History</a></h2>
              <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'><a href ="#">28 Sanctioned Seats</a></h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Welcome to the History undergraduate department! Our program offers a diverse range of courses taught by renowned historians, providing students with a solid foundation in historical research, critical analysis, and writing skills. We emphasize practical learning and provide opportunities for hands-on experience through research projects, internships, and collaborations with industry partners.

Our faculty is passionate about teaching and research, and they bring their expertise to the classroom to inspire and guide students. Our graduates acquire the analytical and critical thinking skills necessary to succeed in a variety of careers, including education, law, government, journalism, and business.

Join us for a rewarding journey in History and discover how the study of the past can help you understand the present and shape the future!</p>              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                      <span className="text-xs font-medium dark:text-white">
                          Dr. Somedean Again (HOD)
                      </span>
                  </div>
                  <a href="#" className="inline-flex items-center font-medium text-green-500 dark:text-primary-500 hover:underline">
                      Apply
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article>                  
      </div>  
  </div>
</section>
      
  )
}

export default Courses
