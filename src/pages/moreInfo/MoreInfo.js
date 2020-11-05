import React from 'react';

const MoreInfo = (props) => {
  const centerStyle = {
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <section>
      <h1 style={centerStyle}>more info</h1>
    </section>
  );
};

MoreInfo.propTypes = {};

export default MoreInfo;
