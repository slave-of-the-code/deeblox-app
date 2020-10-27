import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

import Button from '../button/Button';

const FormContact = (props) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data) => {
    console.table(data);
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
    fetch('http://localhost:3001/api/email', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('RESULT API EMAIL', result);
      })
      .catch((err) => {
        console.error('ERROR API EMAIL', err);
      });
    // ====================================================
  };
  // console.log(watch('telephone')); // watch input value by passing the name of it
  //   watch(['telephone', 'number']);
  //   const handleChangeTelephone = (e) => {
  //     // let telephone = e.target.value;

  //     // if (!Number(telephone)) {
  //     //   return;
  //     // }
  //     const re = /^[0-9\b]+$/;
  //     if (re.test(e.currentTarget.value)) {
  //       return true;
  //     }
  //     return false;
  //   };

  const { t } = useTranslation();
  const { firstname, surname, telephone, email, message } = i18n.t('contact.inputs', {
    returnObjects: true
  });

  const redAsterisc = () => {
    return <strong style={{ color: 'red', margin: '0.5em' }}>*</strong>;
  };

  const styleMaxCharacter = {
    color: 'gray',
    fontSize: '10px'
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
        <div className="container-input">
          <span className="inputLabel">
            {t(firstname.text)}
            {errors.firstname && redAsterisc()}
          </span>
          <input
            className={`inputText ${errors.firstname && 'isInvalid'}`}
            type="text"
            ref={register({ required: true, maxLength: 50, pattern: /^[A-Za-z]+$/i })}
            name="firstname"
          ></input>
          <small style={styleMaxCharacter}>
            <em>max. 50</em>
          </small>
        </div>
        <div className="container-input">
          <span className="inputLabel">
            {t(surname.text)}
            {errors.surname && redAsterisc()}
          </span>
          <input
            className={`inputText ${errors.surname && 'isInvalid'}`}
            type="text"
            ref={register({ required: true, maxLength: 50, pattern: /^[A-Za-z]+$/i })}
            name="surname"
          ></input>
          <small style={styleMaxCharacter}>
            <em>max. 50</em>
          </small>
        </div>
        <div className="container-input">
          <span className="inputLabel">
            {t(email.text)}
            {errors.email && redAsterisc()}
          </span>
          <input
            className={`inputText ${errors.email && 'isInvalid'}`}
            type="email"
            ref={register({
              required: true,
              maxLength: 30,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
            name="email"
          ></input>
          <small style={styleMaxCharacter}>
            <em>max. 30</em>
          </small>
        </div>
        <div className="container-input">
          <span className="inputLabel">
            {t(telephone.text)}
            {errors.telephone && redAsterisc()}
          </span>
          <input
            className={`inputText ${errors.telephone && 'isInvalid'}`}
            type="text"
            ref={register({
              required: true,
              maxLength: 20,
              pattern: /^\d+$/
            })}
            name="telephone"
          ></input>
          <small style={styleMaxCharacter}>
            <em>max. 20</em>
          </small>
        </div>
        <div className="container-textarea">
          <span className="inputLabel">
            {t(message.text)}
            {errors.message && redAsterisc()}
          </span>
          <textarea
            className={`inputTextArea ${errors.message && 'isInvalid'}`}
            name="message"
            ref={register({ required: true, maxLength: 300 })}
          ></textarea>
          <small style={styleMaxCharacter}>
            <em>max. 300</em>
          </small>
        </div>
      </div>
      <div className="button-Send">
        <Button type="submit" text={t('contact.buttonSend')} />
      </div>
    </form>
  );
};

export default FormContact;
