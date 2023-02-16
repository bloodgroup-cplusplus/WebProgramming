import React from 'react'


import { images } from '../../constants';

const Grievances = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorantb" style={{ marginBottom: '3rem' }}>Grievences Readdressal Committee</h1>
      <div className="app__wrapper-content">
        <p className="p__cormorantb">Mr.Tilak Sharma (HM,JHS)</p>
        <p className="p__cormorantb">Mr.Pempa Lepcha (HM,PS)</p>
        <p className="p__cormorantb">Mr.Siddharth Neopaney (PGT)</p>
        <p className='p__cormorantb'>Mrs Trinity G Namchu (PRT)</p>
        <p className='p__cormorantb'>Mrs Sita Devi Subba (PPT)</p>
        <p className='p__cormorantb'>Mr Surendra Subbba (GT)</p>
      </div>
    </div>

    <div className="app__wrapper_img">
    <img src={images.griviences_readdressal} alt="readressal_img"></img>
    </div>
  </div>
);

export default Grievances;

