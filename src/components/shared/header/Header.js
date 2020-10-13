import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import logo from '../../../assets/img-site/logo.png';
import './Header.css';

import { useTranslation } from 'react-i18next';
// import i18next from '../../../i18n';

import { Data } from '../../../data/data';
import Internationalization from '../internationalization/Internationalization';

const Header = (props) => {
  const { t } = useTranslation();

  const $body = document.querySelector('body');
  const { Header: page } = Data;

  const imageLogoStyle = {
    background: `url(${logo}) no-repeat center center`,
    backgroundSize: 'contain'
  };
  const links = page.navLinks;

  const [state, setState] = useState({
    navLinksActive: false,
    buttonBurgerActive: false
  });

  const toggleMenu = (e) => {
    setState((prevState) => ({
      navLinksActive: !prevState.navLinksActive,
      buttonBurgerActive: !prevState.buttonBurgerActive
    }));

    $body.classList.remove('overflow-hidden');
  };

  const toggleMenuButton = (e) => {
    setState((prevState) => ({
      navLinksActive: !prevState.navLinksActive,
      buttonBurgerActive: !prevState.buttonBurgerActive
    }));

    !state.navLinksActive
      ? $body.classList.add('overflow-hidden')
      : $body.classList.remove('overflow-hidden');
  };

  return (
    <>
      <header id="header">
        <Link to="/">
          <div className="logo" style={imageLogoStyle}></div>
        </Link>
        <ul
          className={state.navLinksActive ? 'nav-links --active' : 'nav-links'}
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.href} onClick={toggleMenu}>
                  {t(`nav.${link.title}`)}
                </a>
              </li>
            );
          })}
          <Internationalization />
        </ul>
        <div className="button-burguer" onClick={toggleMenuButton}>
          <div
            className={state.buttonBurgerActive ? 'line1 --toggle' : 'line1'}
          ></div>
          <div
            className={state.buttonBurgerActive ? 'line2 --toggle' : 'line2'}
          ></div>
          <div
            className={state.buttonBurgerActive ? 'line3 --toggle' : 'line3'}
          ></div>
        </div>
      </header>
    </>
  );
};

// Header.propTypes = {};
// Header.defaultProps = {
//   name: 'Stranger'
// };

export default Header;
