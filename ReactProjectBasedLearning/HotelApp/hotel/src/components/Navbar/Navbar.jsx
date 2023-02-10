import React,{useState} from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {MdImageSearch, MdOutlineRestaurantMenu} from "react-icons/md"
import {FiX} from "react-icons/fi"

import './Navbar.css';
import images from "../../constants/images"

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);



  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.sta_logo} alt="app__logo"/>

    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#login">Login</a></li>
      <li className='p__opensans'><a href="#signup">Signup</a></li>
      <li className='p__opensans'><a href="#feed">Feed</a></li>
      <li className='p__opensans'><a href="#donate">Donate</a></li>
    </ul>

    <div className='app__navbar-samllscreen'>
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>{setToggleMenu(true)}}/>
      {toggleMenu &&(<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <FiX fontsize={27} className="overlay__close" onClick={()=>{setToggleMenu(false)}}/>
          <ul className='app__navbar-smallscreen_links'>
          <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Login</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Signup</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Feed</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Donate</a></li>
       </ul>

      </div>)} 
    </div>

  </nav>
)};

export default Navbar;
