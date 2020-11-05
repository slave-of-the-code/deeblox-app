import React, { memo, useEffect, useState } from 'react';

const BurgerButton = memo(({ setShow, activeButton }) => {
  const $body = document.querySelector('body');
  const [active, setActive] = useState(activeButton);

  const toggleMenuButton = (e) => {
    setActive(!active);
    setShow((s) => !s);

    !active ? $body.classList.add('overflow-hidden') : $body.classList.remove('overflow-hidden');
  };

  useEffect(() => {
    setActive(activeButton);
    // return () => {
    //   cleanup
    // }
  }, [activeButton]);

  return (
    <div className="button-burguer" onClick={toggleMenuButton}>
      <div className={active ? 'line1 --toggle' : 'line1'}></div>
      <div className={active ? 'line2 --toggle' : 'line2'}></div>
      <div className={active ? 'line3 --toggle' : 'line3'}></div>
    </div>
  );
});

BurgerButton.propTypes = {};

export default BurgerButton;
