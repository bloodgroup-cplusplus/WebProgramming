import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {HiOutlineXMark} from "react-icons/hi2"
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.sta_logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">Login</a></li>
        <li className="p__opensans"><a href="#menu">Signup</a></li>
        <li className="p__opensans"><a href="#awards">Feed</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
        <li className="p__opensans"><a href="#contact">Donate</a></li>
      </ul>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <HiOutlineXMark fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Login</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Signup</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Feed</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li className="p__opensans"><a href="#contact">Donate</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
