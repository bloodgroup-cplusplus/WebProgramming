import React from 'react';

import { images } from '../../constants';
import './President.css';

const President = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.president} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">President's Message</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensans">"Sikkim Teachers Association (STA) is one of the oldest associations in Sikkim which has been functioning over the past 43 years. It has been tirelessly working fo​r​ the welfare of teaches including Pre-Primary Tea​chers (PPT), Primary Teachers(PRT), Graduate Teachers(GT), Post Graduate Teachers(PGT), Head Masters(HMPS,HMJHS,HMSS), and also the Principals. With the main focus to build a strong umbrella association comprising all categories of&nbsp; teachers from PPT to Principal the association has been revamped recently right from the Block Administrative Center(BAC) lev​el. No​w there are very active members in the Block Executive Committee(BECs), District Ex​ecutive Committee(DECs), Centeral Exective Committee(CECs) who are carrying out various activites of the association with outmost sincerity and dedication. Our assocatio​n also boasts of being the only assocation in the state having over 500 executive members. STA has been working for the welfare of the teachers and also the students of the state. Even in the time of the COVID 19 pandemic STA was continously working fo the betterment of our respected teaches and students. Some of the activities includes online training of around 1200 tea​​ches from East and West Districts in collaboration with NCERT on the newly introducted text books; distribution of smartphone to deprived students from remote ares of the stat​​e.</p>
        </div>
        </div>

      <div className="app__chef-sign">
        <p>Mr Kunzang Sherpa</p>
        <p className="p__opensans">Sikkim Teachers Association</p>
      </div>
    </div>
  </div>
);

export default President;
