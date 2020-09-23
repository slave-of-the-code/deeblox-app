import React from 'react';
import ContainerImages from '../shared/containerImages/ContainerImages';

import jobs1 from '../../assets/jobs-1.jpg';
import jobs2 from '../../assets/jobs-2.jpg';
import jobs3 from '../../assets/jobs-3.jpg';
import jobs4 from '../../assets/jobs-4.jpg';

import './Jobs.css';

const Jobs = () => {
  const listImage = [
    { url: jobs1 },
    { url: jobs2 },
    { url: jobs3 },
    { url: jobs4 }
  ];
  return (
    <>
      <section id="jobs">
        <div className="container">
          <span>Nuestros Servicios</span>
          <div className="grid-image">
            {listImage.map((img, index) => {
              return <ContainerImages url={img.url} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
