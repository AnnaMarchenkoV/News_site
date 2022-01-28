import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../accets/duniceLogo.svg';

import classes from './Nav.module.css';

const Nav = () => {
  const { userData } = useSelector((state) => state.user);
  const newsfeeds = { title: 'Newsfeeds', path: '/' };
  const profile = { title: 'My profile', path: `/profile/${userData?.id}` };
  const routesAuthorized = [newsfeeds, profile];
  const routesUnauthorized = [newsfeeds];

  const menuItems = (userData ? routesAuthorized : routesUnauthorized);

  return (
    <div className={classes.navigation}>
      <img src={Logo} alt="Dunice Logo" />
      {menuItems?.map(({ title, path }) => (
        <NavLink
          id="fe39a96d-f68e-435d-9034-1df5ec3c2504"
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
