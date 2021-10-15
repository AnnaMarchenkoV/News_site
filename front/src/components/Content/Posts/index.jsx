import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Pagination from '@mui/material/Pagination';

import usePaging from '../../../hooks/use-pagination';
import Post from './Post/index';
import { fetchPosts } from '../../../store/actions/postActions';

const PER_PAGE = 3;

const Posts = memo(({ searchTerm }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { items, error, isFetching } = useSelector((state) => state.posts);

  const checkIncludes = (item) => item.includes(searchTerm.tempSearch);

  const filterPosts = items.filter((item) => {
    switch (searchTerm.selectOption) {
      case 'all':
        return [item.body, item.title, item.user.login].some(checkIncludes);

      case 'author':
        return [item.user.login].some(checkIncludes);

      case 'tags':
        return [item.tags].some(checkIncludes);

      default:
        return true;
    }
  });

  const {
    totalPages,
    currentPage,
    setCurrentPage,
    pageItems: postsPageItems,
  } = usePaging(filterPosts, PER_PAGE);

  const handleChange = (e, newPage) => {
    setCurrentPage(newPage);
  };

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
        {postsPageItems()?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />
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
