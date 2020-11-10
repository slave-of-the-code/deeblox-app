import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SocialNetwork from 'components/socialNetwork/SocialNetwork';
import FormContact from 'components/formContact/FormContact';
import Loading from 'components/loading/Loading';
import Message from 'components/message/Message';
import BackButton from 'components/backButton/BackButton';

import './Contact.scss';

import imageEnvelope from 'assets/img-site/envelope.png';

const Contact = () => {
  const { t } = useTranslation();

  const imageEnvelopeStyle = {
    background: `url(${imageEnvelope}) no-repeat center center`,
    backgroundSize: 'contain'
  };

  // const { data: moviesList, loading, messageError } = useFetchMovies();
  const [form, setForm] = useState({
    loading: false,
    reset: false,
    alert: {
      message: '',
      type: ''
    }
  });

  const url_API_EMAIL = 'https://deeblox-app-backend.herokuapp.com/api/email';

  const handleSubmitFormEmail = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: data.firstname,
        surname: data.surname,
        telephone: data.telephone,
        to: data.email,
        text: data.message
      })
    };

    setForm({ ...form, loading: true });

    fetch(url_API_EMAIL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('RESULT API EMAIL', result);
        if (result.response.indexOf('Ok') >= 0) {
          setForm({
            ...form,
            reset: true,
            alert: { message: t('messages.emailSuccess'), type: 'success' }
          });
        } else {
          setForm({
            ...form,
            reset: false,
            alert: { message: t('messages.emailError'), type: 'danger' }
          });
        }
      })
      .catch((err) => {
        console.error('ERROR API EMAIL', err);
        setForm({
          ...form,
          reset: false,
          alert: { message: t('messages.emailError'), type: 'danger' }
        });
      })
      .finally(() => {
        // setForm({ ...form, loading: false });
      });
  };

  const handleMessageUnMount = () => {
    setForm({
      ...form,
      reset: false,
      alert: { message: '', type: '' }
    });
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contacto">
            <span className="title">{t('contact.title')}</span>
            <FormContact onSubmit={handleSubmitFormEmail} resetForm={form.reset} />
          </div>
          <SocialNetwork />
          <div className="imageEnvelope" style={imageEnvelopeStyle}></div>
        </div>
        <BackButton />
      </section>
      {form.loading && <Loading />}

      {!!form.alert.message && (
        <Message
          title={t(`messages.type.${form.alert.type}`)}
          message={form.alert.message}
          type={form.alert.type}
          timeSec={5}
          unmountMe={handleMessageUnMount}
        />
      )}
    </>
  );
};

Contact.propTypes = {};

export default Contact;
