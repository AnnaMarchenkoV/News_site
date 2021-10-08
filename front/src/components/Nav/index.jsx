import React from 'react';
import { NavLink } from 'react-router-dom';

import { takeFromLS } from '../../store/helpers';

import classes from './Nav.module.css';

let menuItems = [
  { title: 'Newsfeeds', path: '/content' },
];

const Nav = () => {
  if (takeFromLS) {
    menuItems = [
      { title: 'My profile', path: '/profile' },
      { title: 'Newsfeeds', path: '/content' },
    ];
  }
  return (
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
};

export default Nav;
