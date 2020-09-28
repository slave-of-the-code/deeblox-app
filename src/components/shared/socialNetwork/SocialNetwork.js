import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SocialNetwork.css';

const SocialNetwork = ({ listSocialNetwork }) => (
  <>
    <ul className="socialNetwork">
      {listSocialNetwork.map((item, index) => {
        return (
          <li key={index}>
            <a target="_blank" rel="noopener noreferrer" href={item.url}>
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  </>
);

export default SocialNetwork;
