import React from "react";
import classes from './ProfileInfo.module.css';

 const ProfileInfo=()=> {
 return (
      <div className={classes.profile}>
          <img className={classes.profile__img} src='https://yt3.ggpht.com/a/AATXAJwS6Vr-jVeRm2qg29TcfkgiwJtWZOJfXEPQBdtNkw=s900-c-k-c0x00ffffff-no-rj' alt="" />
          <div>Login</div>
          <div>User name</div>  
      </div>
      )
  }

  export default ProfileInfo