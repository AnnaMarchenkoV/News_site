import React from 'react';

import Authorization from './Authorization';

import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header}>
    <img
      className={classes.header__img}
      src="https://pbs.twimg.com/profile_images/561955768509808640/pTRXMhET.png"
      alt=""
    />
    <Authorization />
  </header>
);

export default Header;
