import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/button/Button';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <section className="aboutUs" id="aboutUs">
        <h3>Soluciones Agiles</h3>

        <Link to="/more-info">
          <Button text="Mas info" />
        </Link>
      </section>
    </>
  );
};

export default AboutUs;
