import React from 'react';

import Nav from '../Nav';
import Authorization from './Authorization';
import Greeting from './Greeting';

import classes from './Header.module.css';

const Header = () => (
  <header>
    <div className={classes.header}>
      <Nav />
      <Greeting />
      <Authorization />
    </div>
  </header>
);

export default Header;
