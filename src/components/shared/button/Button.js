import React from 'react';

import './Button.css';

const Button = ({ text }) => (
  <>
    <input type="submit" value={text} className="button"></input>
  </>
);

export default Button;
