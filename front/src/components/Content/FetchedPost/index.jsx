import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post/index';
import { fetchPosts } from '../../../store/actions/actions';

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts.fetchedPosts);
  return posts?.map((post) => (
    <Post post={post} />
  ));
};

export default Posts;
