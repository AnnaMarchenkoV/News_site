import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post/index.jsx';
import { fetchPosts } from '../../../store/actions/actions';

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts.fetchedPosts);
  return posts?.map((p) => (
    <Post b={p.body} t={p.title} tg={p.tags} u={p.user_id} key={p.id} />
  ));
};

export default Posts;
