import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SocialNetwork.css';

const SocialNetwork = ({ listSocialNetwork }) => (
  <>
    <ul className="socialNetwork">
      {listSocialNetwork.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.url} target="_blank">
              <FontAwesomeIcon icon={item.icon} />
            </Link>
          </li>
        );
      })}
    </ul>
  </>
);

export default SocialNetwork;
