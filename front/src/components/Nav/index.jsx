import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';

const menuItems = [
  { title: 'My profile', path: '/profile' },
  { title: 'Newsfeeds', path: '/content' },
];

const Nav = () => (
  <div className={classes.navigation}>
    {menuItems.map((link) => (
      <NavLink
        to={link.path}
        className={classes.navigation__item}
        activeClassName={classes.active}
        key={link.title}
      >
        {link.title}
      </NavLink>
    ))}
  </div>
);

export default Nav;
