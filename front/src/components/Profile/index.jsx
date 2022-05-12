import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import Alert from 'react-bootstrap/Alert';

import NewPost from './NewPost/index';
import ProfileInfo from './ProfileInfo/index';
import UserPosts from './UserPosts/Index';

import { getUser } from '../../store/actions/userActions';

import classes from './Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userData, currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id, userData]);

  if (!userData) {
    return <Alert id="15b069a0-fed0-4a57-a91c-2accb6b8c92a" className={classes.alert} variant="warning">Log in or register</Alert>;
  }

  return (
    <div data-testid="simple-menu" className={classes.profile}>
      <div id="fdc1bf8a-4c91-436d-a44a-4cba2294ee18" className={classes.profile__posts}>User info</div>
      <div data-testid="sign-out"> 
        <ProfileInfo />
        <div className={classes.profile__posts}>User posts</div>
        {currentUser?.id === userData?.id && <NewPost />}
        <UserPosts />
      </div>
    </div>
  );
};

export default Profile;
