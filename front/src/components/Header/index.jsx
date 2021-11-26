import React from 'react';

import Authorization from './Authorization';

import logo from './assets/logo.png';
import classes from './Header.module.css';
import Registration from './Registration';

const Header = () => (
  <header className={classes.header}>
    <img
      className={classes.header__img}
      src={logo}
      alt=""
    />
    <div>
      <Authorization />
      <Registration />
    </div>
  </header>
);

export default Header;
