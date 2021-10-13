import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';

const newsfeeds = { title: 'Newsfeeds', path: '/content' };
const profile = { title: 'My profile', path: '/profile' };

const Nav = () => {
  const routesAuthorized = [newsfeeds, profile];
  const routesUnauthorized = [newsfeeds];
  const [menuItems, setMenuItems] = useState(routesUnauthorized);
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    setMenuItems(routesAuthorized);
  }, [userData]);

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
