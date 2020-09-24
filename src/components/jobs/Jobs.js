import React from 'react';
import ContainerImages from '../shared/containerImages/ContainerImages';

import img1 from '../../assets/img-web/chicapunkweb.png';
import img2 from '../../assets/img-web/rulosprogramandoweb.png';
import img3 from '../../assets/img-web/manorelojWEB.png';
import img4 from '../../assets/img-web/appleweb.png';

import imageCircle from '../../assets/img-site/circle.png';
import imageArrow from '../../assets/img-site/arrow.png';

import './Jobs.css';

const Jobs = () => {
  const listImage = [
    { url: img1, isAlignRight: true },
    { url: img2, isAlignRight: false },
    { url: img3, isAlignRight: true },
    { url: img4, isAlignRight: false }
  ];

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
          <span>Nuestros Servicios</span>
          <div className="grid-image">
            {listImage.map((img, index) => {
              return (
                <ContainerImages
                  url={img.url}
                  isAlignRight={img.isAlignRight}
                  key={index}
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

export default Jobs;
