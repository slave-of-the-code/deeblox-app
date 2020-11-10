import React from 'react';

import AboutUs from 'pages/aboutUs/AboutUs';
import Jobs from 'pages/jobs/Jobs';
import Contact from 'pages/contact/Contact';

const Home = () => {
  return (
    <>
      <AboutUs />
      <Jobs />
      <Contact />
    </>
  );
};

Home.propTypes = {};

export default Home;
