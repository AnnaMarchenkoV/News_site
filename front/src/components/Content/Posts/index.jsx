import React, {
  useEffect, memo, useState, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import Post from './Post/index';
import { fetchPosts } from '../../../store/actions/postActions';

const Posts = memo(({ searchTerm }) => {
  const dispatch = useDispatch();

  const isFetching = useSelector((state) => state.posts.isFetching);
  const numberOfElements = useSelector((state) => state.posts.numberOfElements);
  const items = useSelector((state) => state.posts.items);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page, items?.length]);

  const scrollHandler = useCallback(
    (e) => {
      if (
        e.target.documentElement.scrollHeight
          - (e.target.documentElement.scrollTop + window.innerHeight)
          < 300
        && items?.length < numberOfElements
        && !isFetching
      ) {
        setPage((prevState) => prevState + 1);
      }
    },
    [items, isFetching, page],
  );

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  const checkIncludes = (item) => item?.toUpperCase().includes(searchTerm.tempSearch.toUpperCase());

  const filteredPosts = items?.filter((item) => {
    switch (searchTerm.selectOption) {
      case 'all':
        return [item.description, item.title, item.username].some(
          checkIncludes,
        );

      case 'author':
        return [item.username].some(checkIncludes);

      case 'tags':
        return [item.tags[0]?.title].some(checkIncludes);

      default:
        return true;
    }
  });

    <Alert
      id="29da6e04-d768-4588-a918-a01a997245ef"
      variant="danger"
    >
      {' '}
      Loading error
      {' '}

    </Alert>;

    return (
      <>
        <div>
          {isFetching && <Spinner animation="border" />}
          {filteredPosts?.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
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
