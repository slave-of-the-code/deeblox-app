import React from 'react';
import ContainerImages from '../shared/containerImages/ContainerImages';

import imageCircle from '../../assets/img-site/circle.png';
import imageArrow from '../../assets/img-site/arrow.png';

import './Jobs.css';

import { Data } from '../../data/data';

const Jobs = () => {
  const { Jobs: page } = Data;
  const mainTitle = page.mainTitle;
  const listImage = page.images;

  const imageCircleStyle = {
    background: `url(${imageCircle}) no-repeat center top`,
    backgroundSize: 'contain'
  };
  const imageArrowStyle = {
    background: `url(${imageArrow}) no-repeat center right`,
    backgroundSize: 'contain'
  };

  return (
    <>
      <section id="jobs">
        <div className="container">
          <span>{mainTitle}</span>
          <div className="grid-image">
            {listImage.map(({ url, isAlignRight, title, text }, index) => {
              return (
                <ContainerImages
                  url={url}
                  isAlignRight={isAlignRight}
                  key={index}
                  title={title}
                  text={text}
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
