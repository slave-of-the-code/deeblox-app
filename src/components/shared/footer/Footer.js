import React from 'react';
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

export default class Footer extends React.Component {
  constructor() {
    super();

    const { SocialNetwork, Footer: pageData } = Data;

    this.state = {
      pageData: pageData,
      listSocialNetwork: [
        { url: SocialNetwork.urlTwitter, icon: faTwitter },
        { url: SocialNetwork.urlFacebook, icon: faFacebookF },
        { url: SocialNetwork.urlInstagram, icon: faInstagram },
        { url: SocialNetwork.urlYoutube, icon: faYoutube }
      ]
    };
  }

  render() {
    const { pageData, listSocialNetwork } = this.state;
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
  }
}
