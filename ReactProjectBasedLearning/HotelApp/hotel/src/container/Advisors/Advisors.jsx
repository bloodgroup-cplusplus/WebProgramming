import React from 'react'


import { images } from '../../constants';

const Advisors = () => (
  <div className="app__header app__wrapper section__padding" >
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorantb" style={{ marginBottom: '3rem' }}>Advisors</h1>
      <div className="app__wrapper-content">
        <p className="p__opensansb"> Mr MK Pradhan</p>
        <p className="p__opensansb"> Mr KB Bhandari</p>
        <p className="p__opensansb">Mr Bhim Khanal</p>
        <p className='p__opensansb'>CK Rai</p>
        <p className='p__opensansb'> DT Lepcha</p>
        <p className='p__opensansb'>Mr BK Basnett</p>
      </div>
    </div>

    <div className="app__wrapper_img">
    <img src={images.advisors} alt="readressal_img"></img>
    </div>
  </div>
);

export default Advisors;

