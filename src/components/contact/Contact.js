import React from 'react';
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

export default class Contact extends React.Component {
  constructor() {
    super();

    const { SocialNetwork, Contact: page } = Data;

    this.state = {
      inputs: page.inputs,
      textArea: page.textArea,
      mainTitle: page.mainTitle,
      buttonSend: page.buttonSend,
      listSocialNetwork: [
        { url: SocialNetwork.urlTwitter, icon: faTwitter },
        { url: SocialNetwork.urlFacebook, icon: faFacebookF },
        { url: SocialNetwork.urlInstagram, icon: faInstagram },
        { url: SocialNetwork.urlYoutube, icon: faYoutube }
      ],
      imageEnvelopeStyle: {
        background: `url(${imageEnvelope}) no-repeat center center`,
        backgroundSize: 'contain'
      }
    };
  }

  render() {
    const {
      mainTitle,
      inputs,
      textArea,
      buttonSend,
      listSocialNetwork,
      imageEnvelopeStyle
    } = this.state;

    return (
      <>
        <section id="contact">
          <div className="container">
            <div className="contacto">
              <span className="title">{mainTitle}</span>
              <div className="inputs">
                {inputs.map((input, index) => {
                  return (
                    <div key={index}>
                      <span className="inputLabel">{input.title}</span>
                      <input className="inputText"></input>
                    </div>
                  );
                })}
              </div>
              <div className="input-textarea">
                <span className="inputLabel">{textArea.title}</span>
                <textarea className="inputTextArea"></textarea>
              </div>
              <div className="button-Send">
                <Button text={buttonSend.text} />
              </div>
            </div>
            <SocialNetwork listSocialNetwork={listSocialNetwork} />
            <div className="imageEnvelope" style={imageEnvelopeStyle}></div>
          </div>
        </section>
      </>
    );
  }
}
