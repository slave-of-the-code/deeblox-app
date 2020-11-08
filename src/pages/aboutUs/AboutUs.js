import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

import AboutUsText from './AboutUsText';
import AboutUsImage from './AboutUsImage';

import './AboutUs.scss';

const AboutUs = () => {
  return (
    <section id="aboutUs">
      <div className="container">
        <AboutUsText />
        <AboutUsImage />
      </div>
      <a href="#header" className="backHome">
        <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" />
      </a>
    </section>
  );
};

export default AboutUs;
