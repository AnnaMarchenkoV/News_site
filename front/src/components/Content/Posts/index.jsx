import React, { useEffect, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Pagination from '@mui/material/Pagination';

import Post from './Post/index';
import { fetchPosts } from '../../../store/actions/postActions';

const limitPosts = 5;

const Posts = memo(({ searchTerm }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);

  const { items, error, isFetching } = useSelector((state) => state.posts);

  const searchItem = (item) => item.includes(searchTerm.tempSearch);

  const filterPosts = items.filter((item) => {
    switch (searchTerm.selectOption) {
      case 'all':
        return (
          [item.body, item.title, item.user.login].some(searchItem)
        );

      case 'author':
        return [item.user.login].some(searchItem);

      case 'tags':
        return [item.tags].some(searchItem);

      default:
        return true;
    }
  });

  const handleChange = (event, newPage) => setCurrentPage(newPage);

  const totalPages = Math.ceil(filterPosts.length / limitPosts);

  const postsOnPage = filterPosts?.slice((currentPage - 1) * limitPosts, currentPage * limitPosts);

  if (error) {
    let message;
    if (process.env.NODE_ENV !== 'production') message = error.message;
    else message = 'Loading error';
    return <Alert variant="danger">{message}</Alert>;
  }

  return (
    <>
      <div>
        {isFetching && <Spinner animation="border" />}
        {postsOnPage?.map((post) => <Post post={post} key={post.id} />)}
      </div>
      <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
    </>
  );
});

Posts.propTypes = {
  searchTerm: PropTypes.shape({
    tempSearch: PropTypes.string.isRequired,
    selectOption: PropTypes.string.isRequired,
  }).isRequired,
};

export default Posts;
