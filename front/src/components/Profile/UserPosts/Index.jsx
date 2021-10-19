import React, {
  useEffect, memo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import { Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Pagination from '@mui/material/Pagination';

import usePaging from '../../../hooks/use-pagination';
import Post from '../../Content/Posts/Post/index';
import { currentPosts } from '../../../store/actions/postActions';

const ITEMS_PER_PAGE = 3;

const UserPosts = memo(() => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(currentPosts(id));
  }, [dispatch, id]);

  const { userItems, error, isFetching } = useSelector((state) => state.posts);

  const {
    totalPages,
    currentPage,
    setCurrentPage,
    pageItems: postsPageItems,
  } = usePaging(userItems, ITEMS_PER_PAGE);

  const onChangePage = (e, newPage) => {
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
        {postsPageItems?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onChangePage}
      />
    </>
  );
});

UserPosts.propTypes = {
  searchTerm: PropTypes.shape({
    tempSearch: PropTypes.string.isRequired,
    selectOption: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserPosts;
