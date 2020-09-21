import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarker
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="data">
          <FontAwesomeIcon icon="check-square" />
          <ul className="detail">
            <li>
              <span>
                {/* <i className="fas fa-phone-alt"></i> */}
                <FontAwesomeIcon icon={faPhone} /> +54 11 2821 9000
              </span>
            </li>
            <li>
              <span>
                {/* <i className="fas fa-envelope"></i> */}
                <FontAwesomeIcon icon={faEnvelope} /> contact@deeblox.com
              </span>
            </li>
            <li>
              <span>
                {/* <i className="fas fa-map-marker-alt"></i> */}
                <FontAwesomeIcon icon={faMapMarker} /> Avda. Ricardo Balbín 2437
                - CABA - Buenos Aires.
              </span>
            </li>
          </ul>

          <ul className="socialNetwork">
            <li>
              {/* <i className="fab fa-twitter"></i> */}
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              {/* <i className="fab fa-facebook-f"></i> */}
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li>
              {/* <i className="fab fa-instagram"></i> */}
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <i className="fab fa-youtube"></i>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
            <span>/Deeblox</span>
          </ul>
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
