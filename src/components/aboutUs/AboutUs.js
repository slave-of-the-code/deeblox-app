import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/button/Button';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <section id="aboutUs">
        <div className="container">
          <div className="info">
            <div className="title">Soluciones Agiles</div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vulputate at felis sed condimentum. Curabitur lorem nunc, dictum
              at nulla dictum, tempus tristique tortor. Nulla facilisi. Nullam
              mollis ligula a ullamcorper ultricies. Nulla odio est, facilisis
              sed mauris id, malesuada gravida ipsum.
            </p>
            <Link to="/more-info" className="moreInfoButton">
              <Button text="Mas info" />
            </Link>
          </div>
          <div className="image">imagen</div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
