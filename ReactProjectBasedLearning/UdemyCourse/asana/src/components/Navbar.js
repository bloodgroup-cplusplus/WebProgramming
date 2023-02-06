// styles 

import {Link} from 'react-router-dom'
import "./Navbar.css"
import {useLogout} from "../hooks/useLogout"
import { useAuthContext } from '../hooks/useAuthContext'


export default function Navbar() {

  const {logout,isPending} = useLogout()
  const {user} = useAuthContext()
  return (
    <div className='navbar'>
        <ul>
            <li className="logo">
                <img src={NaN} alt="STA logo" />
                <span>STA</span>
            </li>
            
           {!user && (
            <>
           <li> <Link to = "/">Home</Link></li>
           <li><Link to = "/signup">Signup</Link></li>
           <li> <Link to ="/login">Login</Link></li>
           <li> <Link to = "/feed">Feed</Link></li>
           <li> <Link to = "https://pages.razorpay.com/pl_KlizCHgO1U1j6y/view" target={"_blank"}>Donate</Link></li>
           </>
           )}
          {user &&(

            <li>
            <li> <Link to = "/">Home</Link></li> 
            <li> <Link to = "/feed">Feed</Link></li>
            <li> <Link to = "https://pages.razorpay.com/pl_KlizCHgO1U1j6y/view" target={"_blank"}>Donate</Link></li>
            {!isPending&&<button className='btn' onClick={logout} >Logout</button>}
            {isPending &&<button className='btn' disabled>Logging out ...</button>}
           </li>
          )}

        </ul>
      
    </div>
  )
}
