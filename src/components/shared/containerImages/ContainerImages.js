import React from 'react';
import './ContainerImages.css';

const ContainerImages = ({ url }) => {
  const divStyle = {
    background: 'url(' + url + ') no-repeat center',
    'background-size': 'cover'
  };

  return (
    <>
      <article className="image-container">
        <div style={divStyle} title="job-4" className="image" />
        <div className="info">
          <span>Titular</span>
          <p>
            dolor sit amet, consectetur adipisc Lorem ipsum dolor amet,
            consectetur adipisc ing elit. Integer vulputate at sed condimen tum.
            Curabitur lorem nunc, dictum at
          </p>
        </div>
      </article>
    </>
  );
};

export default ContainerImages;
