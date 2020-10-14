import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import './SocialNetwork.css';

const SocialNetwork = () => {
  const { t } = useTranslation();
  const listSocialNetwork = i18n.t('socialNetwork', { returnObjects: true });

  return (
    <>
      <ul className="socialNetwork">
        {listSocialNetwork.map((item, index) => {
          return (
            <li key={index}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={t(item.url)}
                title={t(item.name)}
              >
                {showIcon(t(item.name))}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );

  function showIcon(key) {
    switch (key.trim().toLowerCase()) {
      case 'facebook':
        return <FontAwesomeIcon icon={faFacebookF} />;
      case 'twitter':
        return <FontAwesomeIcon icon={faTwitter} />;
      case 'instagram':
        return <FontAwesomeIcon icon={faInstagram} />;
      case 'youtube':
        return <FontAwesomeIcon icon={faYoutube} />;
      default:
        return <span>{key}</span>;
    }
  }
};

export default SocialNetwork;
