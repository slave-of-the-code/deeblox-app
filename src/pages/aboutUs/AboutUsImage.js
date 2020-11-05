import React from 'react';
import SocialNetwork from 'components/socialNetwork/SocialNetwork';

import aboutUs from 'assets/img-web/aboutUs.png';

const AboutUsImage = () => {
  const imgStyle = {
    background: `url(${aboutUs}) no-repeat center center`,
    backgroundSize: 'contain'
  };
  return (
    <div className="img-container">
      <div className="image" style={imgStyle}></div>
      <SocialNetwork />
    </div>
  );
};

AboutUsImage.propTypes = {};

export default AboutUsImage;
