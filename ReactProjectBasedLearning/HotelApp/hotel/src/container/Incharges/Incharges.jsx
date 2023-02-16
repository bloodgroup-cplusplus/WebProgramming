import React from 'react'


import { images } from '../../constants';

const Incharges = () => (
  <div className="app__header app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorantb" style={{ marginBottom: '3rem' }}>Incharges</h1>
      <div className="app__wrapper-content">
        <p className="p__opensansb">Educational Policies expert committee: Mr Bishal Darnal</p>
        <p className="p__opensansb">Association Disciplinary action committee: Mr Gyaltsen Sherpa</p>
        <p className="p__opensansb">Humanitarian and Health Assistant Committee: Mr Gopal Tamang</p>
        <p className='p__opensansb'>Nature and Environmental conservation committee:Mrs Marium Gurung</p>
        <p className='p__opensansb'>Cultural Artistic and Music committee:Mr Suman Chettri</p>
      </div>
    </div>

    <div className="app__wrapper_img">
    <img src={images.incharges} alt="readressal_img"></img>
    </div>
  </div>
);

export default Incharges;

