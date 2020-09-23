import React from 'react';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import Button from '../shared/button/Button';
import SocialNetwork from '../shared/socialNetwork/SocialNetwork';
import './Contact.css';

const Contact = () => {
  const listSocialNetwork = [
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faTwitter },
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faFacebookF },
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faInstagram },
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faYoutube }
  ];
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contacto">
            <span className="title">Contacto</span>
            <div className="inputs">
              <div>
                <span className="inputLabel">Nombre</span>
                <input className="inputText"></input>
              </div>
              <div>
                <span className="inputLabel">Apellido</span>
                <input className="inputText"></input>
              </div>
              <div>
                <span className="inputLabel">Email</span>
                <input className="inputText"></input>
              </div>
              <div>
                <span className="inputLabel">Telefono</span>
                <input className="inputText"></input>
              </div>
            </div>
            <div className="input-textarea">
              <span className="inputLabel">Mensaje</span>
              <textarea className="inputTextArea"></textarea>
            </div>
            <div className="button-Send">
              <Button text="Enviar" />
            </div>
          </div>
          <SocialNetwork listSocialNetwork={listSocialNetwork} />
        </div>
      </section>
    </>
  );
};

export default Contact;
