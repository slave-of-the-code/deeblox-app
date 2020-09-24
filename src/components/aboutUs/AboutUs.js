import React from 'react';
import { Link } from 'react-router-dom';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import Button from '../shared/button/Button';
import SocialNetwork from '../shared/socialNetwork/SocialNetwork';

import aboutUs from '../../assets/img-web/aboutUs.png';
import plane from '../../assets/img-site/plane.png';
import './AboutUs.css';

const AboutUs = () => {
  const imgStyle = {
    background: `url(${aboutUs}) no-repeat right center`,
    backgroundSize: 'contain'
  };
  const imgEnvelopeStyle = {
    background: `url(${plane}) no-repeat center bottom`,
    backgroundSize: 'contain'
  };
  const listSocialNetwork = [
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faTwitter },
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faFacebookF },
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faInstagram },
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faYoutube }
  ];
  return (
    <>
      <section id="aboutUs">
        <div className="container">
          <div className="info">
            <div className="title">
              <div style={imgEnvelopeStyle} className="imagePlane"></div>
              <span>Soluciones</span>
              <span>Ágiles</span>
            </div>
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
          <div className="image" style={imgStyle}></div>
          <SocialNetwork listSocialNetwork={listSocialNetwork} />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
