import React from 'react';

import Authorization from './Authorization';

import logo from './assets/logo.png';
import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header}>
    <img
      className={classes.header__img}
      src={logo}
      alt=""
    />
    <Authorization />
  </header>
);

export default Header;
