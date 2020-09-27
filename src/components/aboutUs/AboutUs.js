import React from 'react';
import { Link } from 'react-router-dom';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import Button from '../shared/button/Button';
import SocialNetwork from '../shared/socialNetwork/SocialNetwork';

import aboutUs from '../../assets/img-web/aboutUs.png';
import plane from '../../assets/img-site/plane.png';

import './AboutUs.css';

import { Data } from '../../data/data';

export default class AboutUs extends React.Component {
  constructor() {
    super();

    const { SocialNetwork } = Data;

    this.state = {
      imgStyle: {
        background: `url(${aboutUs}) no-repeat right center`,
        backgroundSize: 'contain'
      },
      imgEnvelopeStyle: {
        background: `url(${plane}) no-repeat center bottom`,
        backgroundSize: 'contain'
      },
      listSocialNetwork: [
        { url: SocialNetwork.urlTwitter, icon: faTwitter },
        { url: SocialNetwork.urlFacebook, icon: faFacebookF },
        { url: SocialNetwork.urlInstagram, icon: faInstagram },
        { url: SocialNetwork.urlYoutube, icon: faYoutube }
      ]
    };
  }

  render() {
    const { AboutUs: dataAboutUS } = Data;
    const { title, subTitle, paragraph, textButton } = dataAboutUS;

    const { imgEnvelopeStyle, imgStyle, listSocialNetwork } = this.state;
    return (
      <>
        <section id="aboutUs">
          <div className="container">
            <div className="info">
              <div className="title">
                <div style={imgEnvelopeStyle} className="imagePlane"></div>
                <span>{title}</span>
                <span>{subTitle}</span>
              </div>
              <p className="text">{paragraph}</p>
              <Link to="/more-info" className="moreInfoButton">
                <Button text={textButton} />
              </Link>
            </div>
            <div className="image" style={imgStyle}></div>
            <SocialNetwork listSocialNetwork={listSocialNetwork} />
          </div>
        </section>
      </>
    );
  }
}
