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
  const { userData, currentUser, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id, userData?.updated_at]);

  if (!currentUser) {
    return <Alert variant="danger">Войдите или зарегистрируйтесь</Alert>;
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
