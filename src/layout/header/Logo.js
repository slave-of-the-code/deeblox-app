import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/img-site/logo.png';

const Logo = () => {
  const imageLogoStyle = {
    background: `url(${logo}) no-repeat center center`,
    backgroundSize: 'contain'
  };

  return (
    <div className="logo__container">
      <Link to="/">
        <div className="logo__image" style={imageLogoStyle}></div>
      </Link>
    </div>
  );
};

export default Logo;
