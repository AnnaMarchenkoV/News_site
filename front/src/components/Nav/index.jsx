import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './Nav.module.css';

const newsfeeds = { title: 'Newsfeeds', path: '/content' };
const profile = { title: 'My profile', path: '/profile' };
const routesAuthorized = [newsfeeds, profile];
const routesUnauthorized = [newsfeeds];

const Nav = () => {
  const { userData } = useSelector((state) => state.user);
  const menuItems = useMemo(
    () => (userData ? routesAuthorized : routesUnauthorized),
    [userData],
  );

  return (
    <div className={classes.navigation}>
      {menuItems.map(({ title, path }) => (
        <NavLink
          to={path}
          className={classes.navigation__item}
          activeClassName={classes.active}
          key={title}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
