import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
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

import { Data } from '../../../data/data';

const Footer = (props) => {
  const { SocialNetwork: socialNetworkData, Footer: pageData } = Data;

  const listSocialNetwork = [
    { url: socialNetworkData.urlTwitter, icon: faTwitter },
    { url: socialNetworkData.urlFacebook, icon: faFacebookF },
    { url: socialNetworkData.urlInstagram, icon: faInstagram },
    { url: socialNetworkData.urlYoutube, icon: faYoutube }
  ];

  const { cellPhone, email, address, companyName, paragraph } = pageData;

  return (
    <>
      <footer id="footer">
        <div className="data">
          <div className="container-detail-data">
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} /> {cellPhone}
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} /> {email}
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {address}
                </span>
              </li>
            </ul>
          </div>
          <div className="container-social-network">
            <SocialNetwork listSocialNetwork={listSocialNetwork} /> /
            {companyName}
          </div>
        </div>
        <div className="info">
          <p>{paragraph}</p>
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
