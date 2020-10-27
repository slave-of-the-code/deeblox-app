import React from 'react';
import { useTranslation } from 'react-i18next';

import SocialNetwork from '../shared/socialNetwork/SocialNetwork';

import imageEnvelope from '../../assets/img-site/envelope.png';
import './Contact.css';
import FormContact from '../shared/formContact/FormContact';

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
      </section>
    </>
  );
};

Contact.propTypes = {};

export default Contact;
