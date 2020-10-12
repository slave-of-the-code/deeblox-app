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
    background: `url(${aboutUs}) no-repeat center center`,
    backgroundSize: 'contain'
  };
  const imgEnvelopeStyle = {
    background: `url(${plane}) no-repeat center center`,
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

  /* */
  const SolucionesAgiles = () => {
    return (
      <>
        <div className="title">
          <span>{title}</span>
          <span>{subTitle}</span>
        </div>

        <div className="text">
          <p>{paragraph}</p>
        </div>

        <div className="btn-moreInfo">
          <Link to="/more-info" className="moreInfoButton">
            <Button text={textButton} />
          </Link>
        </div>

        <div style={imgEnvelopeStyle} className="imagePlane"></div>
      </>
    );
  };

  return (
    <>
      <section id="aboutUs">
        <div className="container">
          <div className="info-container">
            <SolucionesAgiles />
          </div>
          <div className="img-container">
            <div className="image" style={imgStyle}></div>
            <SocialNetwork listSocialNetwork={listSocialNetwork} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
