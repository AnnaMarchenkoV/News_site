import React, { useEffect, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Pagination from '@mui/material/Pagination';

import Post from './Post/index';
import { fetchPosts } from '../../../store/actions/postActions';

const Posts = memo(({ props: { tempSearch, selectOption } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { items, error, isFetching } = useSelector((state) => state.posts);

  const [currentPage, setCurrentPage] = useState(1);

  let filterPosts;
  switch (selectOption) {
    case 'all':
      filterPosts = items.filter((item) => item.title.includes(tempSearch)
      || item.body.includes(tempSearch) || item.tags.includes(tempSearch));
      break;

    case 'author':
      filterPosts = items.filter((item) => item.user.login.includes(tempSearch));
      break;
    case 'tags':
      filterPosts = items.filter((item) => item.tags.includes(tempSearch));
      break;

    default:
      filterPosts = items;
      break;
  }

  const limitPosts = 5;
  const handleChange = (event, newPage) => setCurrentPage(newPage);
  const totalPages = Math.ceil(filterPosts.length / limitPosts);

  const postsOnPage = filterPosts.slice((currentPage - 1) * limitPosts, currentPage * limitPosts);

  if (isFetching) {
    return <Spinner animation="border" />;
  }

  if (error) {
    let message;
    if (process.env.NODE_ENV !== 'production') message = error.message;
    else message = 'Loading error';
    return <Alert variant="danger">{message}</Alert>;
  }

  return (
    <>
      <div>
        {postsOnPage?.map((post) => <Post post={post} key={post.id} />)}
      </div>
      <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
    </>
  );
});

Posts.propTypes = {
  props: PropTypes.shape({
    tempSearch: PropTypes.string.isRequired,
    selectOption: PropTypes.string.isRequired,
  }).isRequired,
};

export default Posts;
