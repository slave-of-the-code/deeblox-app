import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from 'components/button/Button';

import plane from 'assets/img-site/plane.png';

const AboutUsText = () => {
  const { t } = useTranslation();
  const imgEnvelopeStyle = {
    background: `url(${plane}) no-repeat center center`,
    backgroundSize: 'contain'
  };

  return (
    <div className="info-container">
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
    </div>
  );
};

AboutUsText.propTypes = {};

export default AboutUsText;
