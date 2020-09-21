import React from 'react';
import { Link } from 'react-router-dom';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <section className="aboutUs" id="aboutUs">
        <h3>Soluciones Agiles</h3>

        <Link to="/more-info">
          <input type="button" value="More info"></input>
        </Link>
      </section>
    </>
  );
};

export default AboutUs;
