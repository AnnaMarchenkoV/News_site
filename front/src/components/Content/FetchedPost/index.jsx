import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import Post from './Post/index';
import { fetchPosts } from '../../../store/actions/actions';

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const {
    fetchedPosts,
    error,
    // eslint-disable-next-line no-unused-vars
    fetching,
  } = useSelector((state) => state.posts);
  if (error) {
    const variant = 'danger';
    return (
      <Alert variant={variant}>
        Error
      </Alert>
    );
  }
  if (fetchedPosts) {
    return fetchedPosts.map((post) => (
      <Post post={post} />
    ));
  }
  return (<Spinner />);
};

export default Posts;
