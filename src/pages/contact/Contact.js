import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

import SocialNetwork from 'components/socialNetwork/SocialNetwork';
import FormContact from 'components/formContact/FormContact';

import './Contact.scss';

import imageEnvelope from 'assets/img-site/envelope.png';

const Contact = () => {
  const { t } = useTranslation();

  const imageEnvelopeStyle = {
    background: `url(${imageEnvelope}) no-repeat center center`,
    backgroundSize: 'contain'
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contacto">
            <span className="title">{t('contact.title')}</span>
            <FormContact />
          </div>
          <SocialNetwork />
          <div className="imageEnvelope" style={imageEnvelopeStyle}></div>
        </div>
        <a href="#header" className="backHome">
          <FontAwesomeIcon icon={faArrowAltCircleUp} size="1x" />
        </a>
      </section>
    </>
  );
};

Contact.propTypes = {};

export default Contact;
