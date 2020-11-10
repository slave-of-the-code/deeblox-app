import React from 'react';

import AboutUsText from './AboutUsText';
import AboutUsImage from './AboutUsImage';
import BackButton from 'components/backButton/BackButton';

import './AboutUs.scss';

const AboutUs = () => {
  return (
    <section id="aboutUs">
      <div className="container">
        <AboutUsText />
        <AboutUsImage />
      </div>
      <BackButton />
    </section>
  );
};

export default AboutUs;
