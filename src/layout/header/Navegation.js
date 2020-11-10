import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

const Navegation = ({ showLinks, setShow }) => {
  const { t } = useTranslation();
  const links = i18n.t('nav', { returnObjects: true });

  const toggleMenu = (e) => {
    setShow((s) => !s);
    const $body = document.querySelector('body');
    $body.classList.remove('overflow-hidden');
  };

  const { pathname } = useLocation();
  const options = links.filter((link) => {
    return (
      (pathname === '/' && link.key !== 'home') ||
      (pathname === '/more-info' && link.key === 'home')
    );
  });

  return (
    <>
      <ul className={showLinks ? 'navigation --active' : 'navigation'}>
        {options.map((op) => {
          if (op.href.indexOf('#') < 0) {
            return (
              <li key={op.key}>
                <Link to={op.href} onClick={toggleMenu}>
                  {t(op.title)}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={op.key}>
                <a href={op.href} onClick={toggleMenu}>
                  {t(op.title)}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Navegation;
