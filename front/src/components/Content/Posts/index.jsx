import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import Post from './Post/index';
import { fetchPosts } from '../../../store/actions/postActions';

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { items, error, fetching } = useSelector((state) => state.posts);

  if (fetching) {
    return <Spinner animation="border" />;
  }

  if (error) {
    let message;
    if (process.env.NODE_ENV !== 'production') message = error.message;
    else message = 'Loading error';
    return <Alert variant="danger">{message}</Alert>;
  }

  return items?.map((post) => <Post post={post} key={post.id} />);
};

export default Posts;
