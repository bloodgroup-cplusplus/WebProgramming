import React from 'react';


const FindUs = () => (
  <div className="app__header app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorantb" style={{ marginBottom: '3rem' }}>Contact Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensansb">The Sikkim Teacher's Association,Head Office, Sir Tashi Namgyl Senior Secondary School Basement, Development Area, Gangtok.</p>
        <p className="p__cormorantb" style={{ color: 'black', margin: '2rem 0' }}>Connect via phone or mail</p>
        <p className="p__opensansb">(Check the contact timings on the bottom of the page) </p>
        <p className="p__opensansb"><a href="tel:+919064757562" >919064757562</a></p>
        <p className="p__opensansb"><a href="tel:+917076680559">917076680559</a></p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}><a href="mailto:clrsclrsclrsclrsclrs@gmail.com">Mail Us</a></button>
    </div>

    <div className="app__wrapper_img">
    <iframe id="schoolframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.0374267025427!2d88.60608861505419!3d27.34329838294421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a53a022cd60f%3A0xfa57d7fb315aeca1!2sSir%20Tashi%20Namgyal%20Senior%20Secondary%20School!5e0!3m2!1sen!2sin!4v1676552872921!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
);

export default FindUs;
