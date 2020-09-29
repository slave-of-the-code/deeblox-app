import React from 'react';
import { useForm } from 'react-hook-form';

import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

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

  const { SocialNetwork: socialNetworkData, Contact: page } = Data;

  const inputs = page.inputs;
  const textArea = page.textArea;
  const mainTitle = page.mainTitle;
  const buttonSend = page.buttonSend;
  const listSocialNetwork = [
    { url: socialNetworkData.urlTwitter, icon: faTwitter },
    { url: socialNetworkData.urlFacebook, icon: faFacebookF },
    { url: socialNetworkData.urlInstagram, icon: faInstagram },
    { url: socialNetworkData.urlYoutube, icon: faYoutube }
  ];
  const imageEnvelopeStyle = {
    background: `url(${imageEnvelope}) no-repeat center center`,
    backgroundSize: 'contain'
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
                      <span className="inputLabel">{input.title}</span>
                      <input
                        ref={register({ required: true })}
                        className={`inputText ${inputInvalid}`}
                        name={input.name}
                      ></input>
                    </div>
                  );
                })}
              </div>
              <div className="input-textarea">
                <span className="inputLabel">{textArea.title}</span>
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
          <SocialNetwork listSocialNetwork={listSocialNetwork} />
          <div className="imageEnvelope" style={imageEnvelopeStyle}></div>
        </div>
      </section>
    </>
  );
};

Contact.propTypes = {};

export default Contact;
