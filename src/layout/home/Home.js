import React from 'react';

import AboutUs from 'pages/aboutUs/AboutUs';
import Jobs from 'pages/jobs/Jobs';
import Contact from 'pages/contact/Contact';

const Home = () => {
  const options = document.querySelectorAll('#header > .header__navigation .navigation > li');
  options.forEach((option) => {
    const a = option.innerHTML;
    if (a === '<a href="/">Home</a>') {
      option.setAttribute('style', 'display:none');
    } else {
      option.removeAttribute('style');
    }
  });

  // const [options, handleOptionChange] = useOptions();

  // useEffect(() => {
  //   for (const key in options) {
  //     if (options.hasOwnProperty(key)) {
  //       options[key] = true;
  //     }
  //   }

  //   handleOptionChange(options);
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [handleOptionChange, options]);

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
