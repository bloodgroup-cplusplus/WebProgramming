import React from 'react';

import { images } from '../../constants';
import './AdditionalChiefSecretary.css';

const AdditionalChiefSecretary = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.additional_chief_secretary} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorantb">Additional Chief Secretary's Message</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensansb">It is extremely hearting to note that Sikkim Teacher's Association (STA) is going to launch its website soon. In the present age of digital communication, a complete up-to-date website has become a necessity for an effective communication. STA is an extremely important organization providing the much needed link between the Goverment and a vast majority of teachers. i have observed that STA has always come up with very positive suggestion, many of which have immensely benefited the entire teaching process. I sincerely hope that STA will keep positively for improving the teaching learning in our State. I compliment STA on this important step of launching their website. I also wish them all success and exhort them to keep it updated at all times </p>
        </div>
        </div>

        <p className='app__chef-sign'>Mr GP Uphadhyay</p>
        <p className="p__opensansb">Additional Chief Secretary Sikkim </p>
    </div>
  </div>
);

export default AdditionalChiefSecretary;
