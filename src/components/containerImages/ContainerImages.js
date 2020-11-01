import React from 'react';
import './ContainerImages.scss';

const ContainerImages = ({ url, isAlignRight, title, text }) => {
  const borderRadius = isAlignRight ? '0 40px 40px 40px ' : '40px 40px 0 40px ';
  const divStyle = {
    background: 'url(' + url + ') no-repeat center',
    backgroundSize: 'cover',
    borderRadius: borderRadius
  };

  return (
    <>
      <article className="image-container">
        <div style={divStyle} title="job-4" className="image" />
        <div className="info">
          <span>{title}</span>
          <p>{text}</p>
        </div>
      </article>
    </>
  );
};

export default ContainerImages;
