import React from 'react';

import AboutUsText from './AboutUsText';

import './AboutUs.scss';
import AboutUsImage from './AboutUsImage';

const AboutUs = () => {
  return (
    <section id="aboutUs">
      <div className="container">
        <AboutUsText />
        <AboutUsImage />
      </div>
    </section>
  );
};

export default AboutUs;
