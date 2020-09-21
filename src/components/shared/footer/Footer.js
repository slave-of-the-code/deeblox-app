import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarker,
  faPhoneAlt,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import SocialNetwork from '../socialNetwork/SocialNetwork';
import './Footer.css';

const Footer = () => {
  const listSocialNetwork = [
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faFacebookF },
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faTwitter },
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faInstagram },
    { url: 'https://www.linkedin.com/in/gustavoml/', icon: faYoutube }
  ];
  return (
    <>
      <footer id="footer">
        <div className="data">
          <div className="container-detail-data">
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +54 11 2821 9000
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} /> contact@deeblox.com
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Avda. Ricardo Balbín
                  2437 - CABA - Buenos Aires.
                </span>
              </li>
            </ul>
          </div>
          <div className="container-social-network">
            <SocialNetwork listSocialNetwork={listSocialNetwork} /> /Deeblox
          </div>
        </div>
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vulputate at felis sed condimentum. Curabitur lorem nunc, dictum at
            nulla dictum, tempus tristique tortor. Nulla facilisi. Nullam mollis
            ligula a ullamcorper ultricies. Nulla odio est, facilisis sed mauris
            id, malesuada gravida ipsum.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
