import React from 'react';
import { useTranslation } from 'react-i18next';

import SocialNetwork from 'components/shared/socialNetwork/SocialNetwork';
import FormContact from 'components/shared/formContact/FormContact';

import './Contact.css';

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
      </section>
    </>
  );
};

Contact.propTypes = {};

export default Contact;
