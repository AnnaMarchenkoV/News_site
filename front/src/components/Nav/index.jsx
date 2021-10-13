import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';

const menuItems1 = { title: 'Newsfeeds', path: '/content' };
const menuItems2 = { title: 'My profile', path: '/profile' };
const Nav = () => {
  const menuItems = [menuItems1];
  const { userData } = useSelector((state) => state.user);
  if (userData) {
    menuItems.push(menuItems2);
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
