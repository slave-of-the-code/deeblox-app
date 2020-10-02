import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import logo from '../../../assets/img-site/logo.png';
import './Header.css';

import { Data } from '../../../data/data';

const Header = (props) => {
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
  };

  return (
    <>
      <header id="header">
        <div className="logo" style={imageLogoStyle}>
          <h3>mobile version</h3>
        </div>
        <ul
          className={state.navLinksActive ? 'nav-links --active' : 'nav-links'}
        >
          {links.map((link, index) => {
            let linkRender = '';
            if (link.isLink) {
              linkRender = (
                <li key={index}>
                  <Link to={link.href}>{link.title}</Link>
                </li>
              );
            } else {
              linkRender = (
                <li key={index}>
                  <a href={link.href} onClick={toggleMenu}>
                    {link.title}
                  </a>
                </li>
              );
            }

            return linkRender;
          })}
        </ul>
        <div className="button-burguer" onClick={toggleMenu}>
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
