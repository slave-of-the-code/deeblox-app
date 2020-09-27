import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img-site/logo.png';
import './Header.css';

import { Data } from '../../../data/data';

export default class Header extends React.Component {
  constructor() {
    super();

    const { Header: page } = Data;

    this.state = {
      links: page.navLinks,
      imageLogoStyle: {
        background: `url(${logo}) no-repeat center center`,
        backgroundSize: 'contain'
      },
      navLinksActive: false,
      buttonBurgerActive: false
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      navLinksActive: !prevState.navLinksActive,
      buttonBurgerActive: !prevState.buttonBurgerActive
    }));
  };

  render() {
    const {
      links,
      imageLogoStyle,
      navLinksActive,
      buttonBurgerActive
    } = this.state;
    return (
      <>
        <header id="header">
          <div className="logo" style={imageLogoStyle}></div>
          <ul className={navLinksActive ? 'nav-links --active' : 'nav-links'}>
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
                    <a href={link.href} onClick={this.toggleMenu}>
                      {link.title}
                    </a>
                  </li>
                );
              }

              return linkRender;
            })}
          </ul>
          <div className="button-burguer" onClick={this.toggleMenu}>
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
  }
}
