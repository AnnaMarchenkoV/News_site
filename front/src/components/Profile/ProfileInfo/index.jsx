import React from 'react';
import { useSelector } from 'react-redux';

import Avatar from '@mui/material/Avatar';

import UpdateProfile from '../UpdateProfile';

import classes from './ProfileInfo.module.css';
import avatar from './assets/avatar.jpg';

const ProfileInfo = () => {
  const { currentUser, userData } = useSelector((state) => state.user);

  return (
    <div>

      <div className={classes.profile}>
        <div>
          <Avatar
            alt="Avatar"
            src={currentUser?.avatar ? currentUser?.avatar : avatar}
            sx={{ width: 56, height: 56 }}
          />
          <b>User login: </b>
          { currentUser?.name }
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
