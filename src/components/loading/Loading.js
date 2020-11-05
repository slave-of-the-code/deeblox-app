import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon icon={faSpinner} size="2x" spin />
      loading
    </div>
  );
};

export default Loading;
