import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import SocialNetwork from 'components/socialNetwork/SocialNetwork';
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();
  const t_company = i18n.t('company', { returnObjects: true });

  for (var prop in t_company) {
    if (prop === 'name' || prop === 'data') delete t_company[prop];
  }

  return (
    <>
      <footer id="footer">
        <div className="data">
          <div className="container-detail-data">
            <ListData />
          </div>
          <div className="container-social-network">
            <SocialNetwork />
            {t('company.name')}
          </div>
        </div>
        <div className="info">
          <p>{t('company.data')}</p>
        </div>
      </footer>
    </>
  );

  function ListData() {
    return (
      <>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faPhoneAlt} />
              {` ${t(t_company.phono)}`}
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              {` ${t(t_company.eMail)}`}
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {` ${t(t_company.street)}`}
            </span>
          </li>
        </ul>
      </>
    );
  }
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
