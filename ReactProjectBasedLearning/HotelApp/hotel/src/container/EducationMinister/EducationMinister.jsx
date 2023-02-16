import React from 'react';

import { images } from '../../constants';
import './EducationMinister.css';

const EducationMinister = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.education_minister} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorantb">Education Minister's Message</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensansb">I have great pleasure in conveying my best wishes to the Sikkim Teachers Association for launching their official website, which brings all the teachers of various disciplines on a common platform. Today the internet is first place most people go when looking for information. It is the most powerful means of commun​ication and a globally acce​ssible to anyone, anywhere, anytime. I applaud the entire teaching faculty of our state for their sincere, dedicated and relentless work in imparting quality to our dear students. Hope this website gives an insight into the activities related to teachers. I also congratulate the editorial team for the hard work and dedication they have invested in creating this website, and wish them success in all future endeavors </p>
        </div>
        </div>

      <div className="app__chef-sign">
        <p>Shri Kunga Nima Lepcha</p>
        <p className="p__opensansb">Education Minister Sikkim</p>
      </div>
    </div>
  </div>
);

export default EducationMinister;
