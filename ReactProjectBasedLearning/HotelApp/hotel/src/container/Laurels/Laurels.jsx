import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { subtitle } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-card_content">
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="District Executive Committee Members" />
      <h1 className="headtext__cormorant">Gangtok </h1>

      <div className="app__laurels_awards">
        {data.gangtok.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.gangtok} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
