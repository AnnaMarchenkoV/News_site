import React from 'react';
import { useSelector } from 'react-redux';

import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  const { userData } = useSelector((state) => state.user);
  if (userData) {
    return (
      <div className={classes.profile}>
        <div>{userData.email}</div>
        <div>User name</div>
      </div>
    );
  }
  return (
    <div className={classes.profile}>
      <div>User name</div>
    </div>
  );
};

export default ProfileInfo;
