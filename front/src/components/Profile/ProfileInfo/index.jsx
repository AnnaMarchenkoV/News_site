import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getUser } from '../../../store/actions/userActions';

import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch]);

  const { currentUser } = useSelector((state) => state.user);

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

    </div>
  );
};

export default ProfileInfo;
