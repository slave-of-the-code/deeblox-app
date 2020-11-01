import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import Internationalization from 'components/shared/internationalization/Internationalization';

import logo from 'assets/img-site/logo.png';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const links = i18n.t('nav', { returnObjects: true });

  const $body = document.querySelector('body');
  const imageLogoStyle = {
    background: `url(${logo}) no-repeat center center`,
    backgroundSize: 'contain'
  };

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
        <ul className={state.navLinksActive ? 'nav-links --active' : 'nav-links'}>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.href} onClick={toggleMenu}>
                  {t(link.title)}
                </a>
              </li>
            );
          })}
          <Internationalization />
        </ul>
        <div className="button-burguer" onClick={toggleMenuButton}>
          <div className={state.buttonBurgerActive ? 'line1 --toggle' : 'line1'}></div>
          <div className={state.buttonBurgerActive ? 'line2 --toggle' : 'line2'}></div>
          <div className={state.buttonBurgerActive ? 'line3 --toggle' : 'line3'}></div>
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
