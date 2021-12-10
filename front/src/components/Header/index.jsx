import React from 'react';
import { useSelector } from 'react-redux';

import Nav from '../Nav';
import Authorization from './Authorization';

import classes from './Header.module.css';

const Header = () => {
  const userData = useSelector((state) => state.user.userData);
  return (
    <header className={classes.header}>
      <div>
        <div id="e61c6c0e-c8d0-4896-bf2a-97262987b250" className={classes.header__greetings}>
          Hello,
          {' '}
          {userData?.name}
          {' '}
        </div>
        <Nav />
        <Authorization />
      </div>
    </header>
  );
};

export default Header;
