import React from 'react';
import { useSelector } from 'react-redux';

import Alert from 'react-bootstrap/Alert';

import NewPost from './NewPost/index';
import ProfileInfo from './ProfileInfo/index';
import UserPosts from './UserPosts/Index';

import classes from './Profile.module.css';

const Profile = () => {
  const { userData, currentUser, error } = useSelector((state) => state.user);

  if (error) {
    return <Alert variant="danger">Войдите или зарегистрируйтесь, чтобы просматривать информацию пользователей</Alert>;
  }

  return (
    <div>
      <div className={classes.profile}>User info</div>
      <div>
        <ProfileInfo />
        <div className={classes.profile}>User posts</div>
        {currentUser?.id === userData?.id && <NewPost />}
        <UserPosts />
      </div>
    </div>
  );
};

export default Profile;
