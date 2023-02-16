import React from 'react';
import { FiFacebook, FiYoutube } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Quick Links </h1>
        <p className="p__opensansb"><a href="https://www.sikkimhrdd.org/" target="_blank" rel="noreferrer">Sikkim Hrdd</a></p>
        <p className="p__opensansb"><a href="https://sikkim.gov.in/" target="_blank" rel="noreferrer">Governmet of Sikkim </a></p>
        <p className="p__opensansb"><a href="https://www.sikkimtourism.gov.in/Public/index" target="_blank" rel="noreferrer">Sikkim Tourism</a></p>
        <p className='p__opensansb'><a href="https://www.education.gov.in/en" target="_blank" rel="noreferrer">Ministry of Education </a></p>
        <p className='p__opensansb'><a href="https://nipunbharat.education.gov.in/" target="_blank" rel="noreferrer">Nipun Bharat</a></p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.sta_logo} alt="footer_logo" />
        <p className="p__opensansb">&quot;Proud to be a teacher.&quot;</p>
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/sta1978/" target="_blank" rel="noreferrer">
          <FiFacebook />
          </a>
          <a href="https://www.youtube.com/@user-ud2is4ib5l" target="_blank" rel="noreferrer">
          <FiYoutube/>
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Contact Hours</h1>
        <p className="p__opensansb">Monday-Friday:</p>
        <p className="p__opensansb">03:00 pm - 9:00 pm</p>
        <p className="p__opensansb">Saturday-Sunday:</p>
        <p className="p__opensansb">09:00 am - 9:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensansb">2023 Sikkim Teachers Association. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
