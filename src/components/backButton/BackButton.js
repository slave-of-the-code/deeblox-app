import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

import './backButton.scss';

const BackButton = () => {
  return (
    <>
      <a href="#container" className="backHome">
        <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" />
      </a>
    </>
  );
};

BackButton.propTypes = {};

export default BackButton;
