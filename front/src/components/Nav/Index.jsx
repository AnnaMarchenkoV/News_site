import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Nav.module.css';

 const Nav=()=> {
 return (
  <nav className={classes.navigation}>
    <div className={classes.navigation__item}><NavLink to='/profile' activeClassName={classes.active} className={classes.navigation__link}>My profile</NavLink></div>
    <div className={classes.navigation__item}><NavLink to='/content' activeClassName={classes.active} className={classes.navigation__link}>Newsfeeds</NavLink></div>
  </nav>
  )
  }

  export default Nav