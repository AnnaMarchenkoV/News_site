import React from 'react';
import { useSelector } from 'react-redux';

import UpdateProfile from '../UpdateProfile';

import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  const { currentUser, userData } = useSelector((state) => state.user);

  return (
    <div>

      <div className={classes.profile}>
        <div>
          <b>User login: </b>
          { currentUser?.login }
        </div>
        <div>
          <b>User e-mail: </b>
          { currentUser?.email }
        </div>
      </div>
      {currentUser?.id === userData?.id && <UpdateProfile />}

    </div>
  );
};

export default ProfileInfo;
