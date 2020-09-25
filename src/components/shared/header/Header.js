import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img-site/logo.png';
import './Header.css';

const Header = () => {
  const [navLinksActive, setNavLinksActive] = useState(false);
  const [buttonBurgerActive, setButtonBurgerActive] = useState(false);

  const toggleMenu = (e) => {
    setNavLinksActive(!navLinksActive);
    setButtonBurgerActive(!buttonBurgerActive);
  };

  const imageLogoStyle = {
    background: `url(${logo}) no-repeat center center`,
    backgroundSize: 'contain'
  };

  return (
    <>
      <header id="header">
        <div className="logo" style={imageLogoStyle}></div>
        <ul className={navLinksActive ? 'nav-links --active' : 'nav-links'}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#aboutUs" onClick={toggleMenu}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#jobs" onClick={toggleMenu}>
              Trabajos
            </a>
          </li>
          <li>
            {/* <Link to="/contact">Contact</Link> */}
            <a href="#contact" onClick={toggleMenu}>
              Contacto
            </a>
          </li>
          <li>
            <a href="#home" onClick={toggleMenu}>
              ES-EN
            </a>
          </li>
        </ul>
        <div className="button-burguer" onClick={toggleMenu}>
          <div
            className={buttonBurgerActive ? 'line1 --toggle' : 'line1'}
          ></div>
          <div
            className={buttonBurgerActive ? 'line2 --toggle' : 'line2'}
          ></div>
          <div
            className={buttonBurgerActive ? 'line3 --toggle' : 'line3'}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
