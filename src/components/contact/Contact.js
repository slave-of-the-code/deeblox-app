import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../shared/button/Button';
import SocialNetwork from '../shared/socialNetwork/SocialNetwork';

import imageEnvelope from '../../assets/img-site/envelope.png';
import './Contact.css';

import { Data } from '../../data/data';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.table(data);
  };

  // console.log(watch('firstname')); // watch input value by passing the name of it

  const { Contact: page } = Data;

  const inputs = page.inputs;
  const textArea = page.textArea;
  const mainTitle = page.mainTitle;
  const buttonSend = page.buttonSend;
  const imageEnvelopeStyle = {
    background: `url(${imageEnvelope}) no-repeat center center`,
    backgroundSize: 'contain'
  };

  const redAsterisc = () => {
    return <strong style={{ color: 'red' }}>*</strong>;
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contacto">
            <span className="title">{mainTitle}</span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputs">
                {inputs.map((input, index) => {
                  const inputInvalid = errors[input.name]
                    ? 'isInvalid'
                    : 'valid';
                  return (
                    <div key={index}>
                      <span className="inputLabel">
                        {input.title} {errors[input.name] && redAsterisc()}
                      </span>
                      <input
                        type="text"
                        ref={register({ required: true })}
                        className={`inputText ${inputInvalid}`}
                        name={input.name}
                      ></input>
                    </div>
                  );
                })}
              </div>
              <div className="input-textarea">
                <span className="inputLabel">
                  {textArea.title} {errors[textArea.name] && redAsterisc()}
                </span>
                <textarea
                  className={
                    errors[textArea.name]
                      ? 'inputTextArea isInvalid'
                      : 'inputTextArea valid'
                  }
                  name={textArea.name}
                  ref={register({ required: true })}
                ></textarea>
              </div>
              <div className="button-Send">
                <Button type={buttonSend.type} text={buttonSend.text} />
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
