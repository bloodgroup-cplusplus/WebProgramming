import React from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {MdImageSearch, MdOutlineRestaurantMenu} from "react-icons/md"

import './Navbar.css';
import images from "../../constants/images"

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.sta_logo} alt="app logo"/>

    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#login">Login</a></li>
      <li className='p__opensans'><a href="#signup">Signup</a></li>
      <li className='p__opensans'><a href="#feed">Feed</a></li>
      <li className='p__opensans'><a href="#donate">Donate</a></li>
    </ul>

    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>{}}/>

    </div>

  </nav>
);

export default Navbar;
