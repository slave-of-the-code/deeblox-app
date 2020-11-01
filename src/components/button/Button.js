import React from 'react';

import './Button.scss';

const Button = ({ text, type = 'button' }) => (
  <>
    <input type={type} value={text} className="button"></input>
  </>
);

export default Button;
