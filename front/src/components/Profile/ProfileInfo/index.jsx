import React from 'react';
import { useSelector } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import Alert from 'react-bootstrap/Alert';

import UpdateProfile from '../UpdateProfile';
import ERRORS from '../../../store/helpers/errors';

import classes from './ProfileInfo.module.css';
import avatar from './assets/avatar.jpg';

const ProfileInfo = () => {
  const { currentUser, userData } = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);

  if (error || ERRORS[error] === 'unknown') {
    return (
      <Alert id="f2fe6fe9-a3a1-4463-b3a0-2ef88b4c11f4" variant="danger" className={classes.danger}>{ERRORS[error]}</Alert>
    );
  }

  return (
    <div>

      <div className={classes.profile}>
        <div>
          <Avatar
            alt="Avatar"
            src={currentUser?.avatar ? currentUser?.avatar : avatar}
            sx={{ width: 56, height: 56 }}
          />
          <b id="f4c47dd7-4a64-43cb-9ce3-056c351263fe">User login: </b>
          { currentUser?.name }
        </div>
        <div>
          <b id="c6f5fecd-aec5-470d-9b85-21eb4fdd8b2d">User e-mail: </b>
          { currentUser?.email }
        </div>
      </div>
      {currentUser?.id === userData?.id && <UpdateProfile />}
    </div>
  );
};

export default ProfileInfo;
