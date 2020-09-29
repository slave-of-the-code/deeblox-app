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

import { Data } from '../../data/data';

const AboutUs = () => {
  const { SocialNetwork: socialNetworkData } = Data;

  const imgStyle = {
    background: `url(${aboutUs}) no-repeat right center`,
    backgroundSize: 'contain'
  };
  const imgEnvelopeStyle = {
    background: `url(${plane}) no-repeat center bottom`,
    backgroundSize: 'contain'
  };
  const listSocialNetwork = [
    { url: socialNetworkData.urlTwitter, icon: faTwitter },
    { url: socialNetworkData.urlFacebook, icon: faFacebookF },
    { url: socialNetworkData.urlInstagram, icon: faInstagram },
    { url: socialNetworkData.urlYoutube, icon: faYoutube }
  ];

  const { AboutUs: dataAboutUS } = Data;
  const { title, subTitle, paragraph, textButton } = dataAboutUS;

  return (
    <>
      <section id="aboutUs">
        <div className="container">
          <div className="info">
            <div className="title">
              <div style={imgEnvelopeStyle} className="imagePlane"></div>
              <span>{title}</span>
              <span>{subTitle}</span>
            </div>
            <p className="text">{paragraph}</p>
            <Link to="/more-info" className="moreInfoButton">
              <Button text={textButton} />
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
