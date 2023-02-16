import React from 'react';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Sikkim Teachers Association</h1>
      <p className="p__opensansb" style={{ margin: '2rem 0' }}>Sikkim Teachers Association (STA) is one of the oldest associations in Sikkim which has been functioning over the past 43 years. It has been tirelessly working for the welfare of t​eachers including Pre-Primary Teachers (PPT), Primary Teachers (PRT), Graduate Teachers (GT), Post Graduate Teachers (PGT), Head Masters (HMPS, HMJHS, HMSS), and also the Principals. With the main focus to build a strong umbrella association comprising all categories of teachers from PPT to Principal the association has been revamped recently right from the Block Administrative Center (BAC) level. Now there are very active members in the Block Executive Committee (BECs), District Executive Committee (DECs), Central Executive Committee (CECs) who are carrying out various activities of the association with outmost sincerity and dedication. Our association also boasts of being the only association in the state having over 5000 Executive Members </p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.sta_logo} alt="header_img" />
    </div>
  </div>
);

export default Header;
