import React from 'react';

import classes from './ProfileInfo.module.css';

const ProfileInfo = () => (
  <div className={classes.profile}>
    <img
      className={classes.profile__img}
      src=""
      alt=""
    />
    <div>Login</div>
    <div>User name</div>
  </div>
);

export default ProfileInfo;
