// styles 

import {Link} from 'react-router-dom'
import "./Navbar.css"


export default function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li className="logo">
                <img src={NaN} alt="STA logo" />
                <span>STA</span>
            </li>


            

           <li> <Link to = "/">Home</Link></li>
           <li><Link to = "/signup">Signup</Link></li>
           <li> <Link to ="/login">Login</Link></li>
           <li> <Link to = "/feed">Feed</Link></li>
           <li> <Link to = "https://pages.razorpay.com/pl_KlizCHgO1U1j6y/view" target={"_blank"}>Donate</Link></li>

        </ul>
      
    </div>
  )
}
