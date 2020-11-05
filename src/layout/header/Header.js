import React, { useState } from 'react';

import Logo from './Logo';
import Navegation from './Navegation';
import BurgerButton from './BurgerButton';
import Internationalization from 'components/internationalization/Internationalization';

import './Header.scss';

const Header = () => {
  const [showLinks, setShow] = useState(false);

  return (
    <>
      <header id="header">
        <Logo />
        <div className="header__navigation">
          <Navegation showLinks={showLinks} setShow={setShow} />
          <Internationalization />
        </div>
        <BurgerButton setShow={setShow} activeButton={showLinks} />
      </header>
    </>
  );
};

export default Header;
