import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link href ="/">Chad Media</Link>
            </div>
            <div className='links'>
                <Link href="/about">About</Link>
                <Link href = "/about/team"> Our team</Link>
                <Link href = "/code/repos">Code</Link>
            </div>
        </div>


    </header>
  )
}
export default Header


// Advantages of React Server Components : 

//-Load faster - Don't have to wait for the javascirpt to load 
// - Smaller client bundle size 
// - SEO friendly 
// - Access to resources the client can't access 
// - Hide sensitive data from the client 
// - More secure against XSS attacks 
// Cross site scripting again 
// - Improvde developer experience 
// If you had to get data from server you needed the server components 
// But in case of client components you used the useEffect hook to get the data 
// so you could run into infinite loops errors 

// Just like with anything else, there are also disadvantages:
// - Not as interactive 
// - No component state. We can not use the 'useState' hoook . 
// - No component lifecycle methods. We can not use the 'useEffect' hook . 

