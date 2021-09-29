import React from "react";
import classes from './Header.module.css';

const Header = ()=> {
    return (
        <header className={classes.header}>
        <img className={classes.header__img} src='https://pbs.twimg.com/profile_images/561955768509808640/pTRXMhET.png' alt="" />
        </header>
        )      
}

export default Header