import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  // const nav_li = document.querySelectorAll('.header-nav-links  li');

  const [navLinksActive, setNavLinksActive] = useState(false);
  const [buttonBurgerActive, setButtonBurgerActive] = useState(false);

  const toggleMenu = (e) => {
    // const nav = document.querySelector('.header-nav-links');
    // nav.classList.toggle('header-nav-links-active');
    setNavLinksActive(!navLinksActive);
    setButtonBurgerActive(!buttonBurgerActive);
    // nav_li.forEach((item, index) => {
    //   if (item.style.animation) {
    //     item.style.animation = '';
    //   } else {
    //     item.style.animation = `menuToggle 0.5s ease forwards ${
    //       index / 7 + 2
    //     }s`;
    //   }
    // });
  };

  // useEffect(() => {
  //   setNavLinksActive(false);
  // }, []);

  // const toggleAnimationItems = () => {
  //   const nav_li = document.querySelectorAll('.header-nav-links li');
  //   nav_li.forEach((item, index) => {
  //     if (item.style.animation) {
  //       item.style.animation = '';
  //     } else {
  //       const f = index / 7 + 0.3;
  //       item.style.animation = `menuToggle .25s ease forwards ${f}s`;
  //     }
  //   });
  // };

  //toggleAnimationItems();

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Deeblox</h1>
        </div>
        <ul className={navLinksActive ? "nav-links --active" : "nav-links"}>
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
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="#home" onClick={toggleMenu}>
              ES-EN
            </a>
          </li>
        </ul>
        <div className="button-burguer" onClick={toggleMenu}>
          <div
            className={buttonBurgerActive ? "line1 --toggle" : "line1"}
          ></div>
          <div
            className={buttonBurgerActive ? "line2 --toggle" : "line2"}
          ></div>
          <div
            className={buttonBurgerActive ? "line3 --toggle" : "line3"}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
