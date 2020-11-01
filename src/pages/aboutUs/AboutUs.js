import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from 'components/shared/button/Button';
import SocialNetwork from 'components/shared/socialNetwork/SocialNetwork';

import aboutUs from 'assets/img-web/aboutUs.png';
import plane from 'assets/img-site/plane.png';

import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation();

  const imgStyle = {
    background: `url(${aboutUs}) no-repeat center center`,
    backgroundSize: 'contain'
  };
  const imgEnvelopeStyle = {
    background: `url(${plane}) no-repeat center center`,
    backgroundSize: 'contain'
  };

  const SolucionesAgiles = () => {
    return (
      <>
        <div className="title">
          <span>{t('aboutUs.title')}</span>
          <span>{t('aboutUs.subTitle')}</span>
        </div>

        <div className="text">
          <p>{t('aboutUs.paragraph')}</p>
        </div>

        <div className="btn-moreInfo">
          <Link to="/more-info" className="moreInfoButton">
            <Button text={t('aboutUs.textButton')} />
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
            <SocialNetwork />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
