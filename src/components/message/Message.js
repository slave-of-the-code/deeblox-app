import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({ title, message, type, timeSec, unmountMe }) => {
  const divBoxRef = useRef();
  const timeMs = timeSec * 1000;

  setTimeout(() => {
    divBoxRef.current.style['display'] = 'none';
    setTimeout(unmountMe(), 1000);
  }, timeMs);

  return (
    <div className="message">
      <div className={`message__box ${type}`} ref={divBoxRef}>
        <h1>{title}</h1>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

Message.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
  timeSec: PropTypes.number
};
Message.defaultProps = {
  title: '',
  message: '',
  type: 'info',
  timeSec: 5
};

export default Message;
