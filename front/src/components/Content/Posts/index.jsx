import React, {
  useEffect, useMemo, memo, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Pagination from '@mui/material/Pagination';

import usePaging from '../../../hooks/use-pagination';
import Post from './Post/index';
import { fetchPosts } from '../../../store/actions/postActions';

const ITEMS_PER_PAGE = 3;

const Posts = memo(({ searchTerm }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { items, error, isFetching } = useSelector((state) => state.posts);

  const checkIncludes = useCallback((item) => item?.includes(searchTerm.tempSearch),
    searchTerm.tempSearch);

  const filteredPosts = useMemo(items.filter((item) => {
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
  }), items);

  const {
    totalPages,
    currentPage,
    setCurrentPage,
    pageItems: postsPageItems,
  } = usePaging(filteredPosts, ITEMS_PER_PAGE);

  const onChangePage = (e, newPage) => {
    setCurrentPage(newPage);
  };

    <Alert variant="danger">{process.env.NODE_ENV !== 'production' ? error.message : 'Loading error'}</Alert>;

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

Posts.propTypes = {
  searchTerm: PropTypes.shape({
    tempSearch: PropTypes.string.isRequired,
    selectOption: PropTypes.string.isRequired,
  }).isRequired,
};

export default Posts;
