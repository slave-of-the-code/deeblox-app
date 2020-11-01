import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import ContainerImages from 'components/containerImages/ContainerImages';

import imageCircle from 'assets/img-site/circle.png';
import imageArrow from 'assets/img-site/arrow.png';

import './Jobs.scss';

const Jobs = () => {
  const { t } = useTranslation();
  const images = i18n.t('ourServices.images', { returnObjects: true });
  const imageCircleStyle = {
    background: `url(${imageCircle}) no-repeat center center / contain`
  };
  const imageArrowStyle = {
    background: `url(${imageArrow}) no-repeat center right / contain`
  };

  return (
    <>
      <section id="jobs">
        <div className="container">
          <div className="title">
            <span>{t('ourServices.title')}</span>
          </div>
          <div className="grid-image">
            {images.map((img, index) => {
              return (
                <ContainerImages
                  url={t(img.url)}
                  isAlignRight={t(img.isAlignRight) === 'true'}
                  key={index}
                  title={t(img.title)}
                  text={t(img.text)}
                />
              );
            })}
          </div>
          <div className="imageCircle" style={imageCircleStyle}></div>
          <div className="imageArrow" style={imageArrowStyle}></div>
        </div>
      </section>
    </>
  );
};

Jobs.propTypes = {};

export default Jobs;
