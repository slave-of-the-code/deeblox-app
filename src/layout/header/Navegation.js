import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

const Navegation = ({ showLinks, setShow }) => {
  const { t } = useTranslation();
  const links = i18n.t('nav', { returnObjects: true });
  const $body = document.querySelector('body');

  const toggleMenu = (e) => {
    setShow((s) => !s);

    $body.classList.remove('overflow-hidden');
  };

  return (
    <>
      <ul className={showLinks ? 'navigation --active' : 'navigation'}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.href} onClick={toggleMenu}>
                {t(link.title)}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navegation;
