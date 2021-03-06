import React from 'react';
// import PropTypes from 'prop-types';
import i18next from 'i18n';
import './Internationalization.scss';

const Internationalization = (props) => {
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div className="internationalization__container">
      <span onClick={() => handleClick('sp')} className="sp" title="Spanish">
        ESP
      </span>
      <span onClick={() => handleClick('en')} className="en" title="England">
        ENG
      </span>
    </div>
  );
};

Internationalization.propTypes = {};

export default Internationalization;
