import React from "react";
import classes from './Nav.module.css';

 const Nav=()=> {
 return (
  <nav className={classes.navigation}>
    <div className={classes.navigation__item}><a className={classes.navigation__link} href='/'>My profile</a></div>
    <div className={classes.navigation__item}><a className={classes.navigation__link} href='/'>Newsfeeds</a></div>
  </nav>
  )
  }

  export default Nav