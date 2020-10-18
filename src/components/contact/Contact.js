import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

import Button from '../shared/button/Button';
import SocialNetwork from '../shared/socialNetwork/SocialNetwork';

import imageEnvelope from '../../assets/img-site/envelope.png';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const inputs = i18n.t('contact.inputs', { returnObjects: true });

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.table(data);
  };

  // console.log(watch('firstname')); // watch input value by passing the name of it

  const imageEnvelopeStyle = {
    background: `url(${imageEnvelope}) no-repeat center center`,
    backgroundSize: 'contain'
  };

  const redAsterisc = () => {
    return <strong style={{ color: 'red', margin: '0.5em' }}>*</strong>;
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contacto">
            <span className="title">{t('contact.title')}</span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputs">
                {inputs.map((input, index) => {
                  const isTextArea = t(input.isTextArea) === 'true';
                  const inputInvalid = (errors[input.name] && 'isInvalid') || '';
                  return (
                    <div
                      key={index}
                      className={isTextArea ? 'container-textarea' : 'container-input'}
                    >
                      <span className="inputLabel">
                        {t(input.text)}
                        {inputInvalid && redAsterisc()}
                      </span>

                      {(isTextArea && (
                        <>
                          <textarea
                            className={`inputTextArea ${inputInvalid}`}
                            name={t(input.name)}
                            ref={register({ required: true })}
                          ></textarea>
                        </>
                      )) || (
                        <input
                          className={`inputText ${inputInvalid}`}
                          type="text"
                          ref={register({ required: true })}
                          name={t(input.name)}
                        ></input>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="button-Send">
                <Button type="submit" text={t('contact.buttonSend')} />
              </div>
            </form>
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
