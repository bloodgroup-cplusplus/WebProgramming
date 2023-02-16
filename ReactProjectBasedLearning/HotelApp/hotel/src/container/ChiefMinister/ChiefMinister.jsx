import React from 'react';

import { images } from '../../constants';
import './ChiefMinister.css';

const ChiefMinister = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chief_minster} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorantb">Chief Minister's Message</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensansb">It gives me immense pleasure to know that Sikkim Teachers Assocation (STA) is launching its website as a medium to communicate with the teaching community of sikkim and beyond. The umbrella organization of teachers has been mak​ing an impace on educational scenario of the​​​ State and I am confident that the ​​​​website serves its true purpose by being constantly updated, functional, interactive.I look​​​ forward to be updated on matters and activities relating to teachers, New Education Policy and other State Government Initiatives. The State Government is committed to improve the quality of education while also working for the walfare of the teaching community.We remain grateful to the hardworking teachers for their contributions towards shaping minds and building our state and nation. In this age of digital communication, I am sure the STA website will provide information on teachers and education sector which can be beneficial not only for the teachers and students, but the common people at large.My best wishes to the association for their endeavor </p>
        </div>
        </div>

      <div className="app__chef-sign">
        <p>Shri Prem Singh Tamang (Golay)</p>
        <p className="p__opensansb">Chief Minister Sikkim</p>
      </div>
    </div>
  </div>
);

export default ChiefMinister;
