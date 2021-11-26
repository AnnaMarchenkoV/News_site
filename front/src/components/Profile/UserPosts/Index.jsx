import React, {
  useEffect, memo, useCallback,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import { Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import Post from '../../Content/Posts/Post/index';
import { currentPosts } from '../../../store/actions/postActions';
import { ERRORS } from '../../../store/helpers/errors';

const UserPosts = memo(() => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const userItems = useSelector((state) => state.posts.userItems);
  const error = useSelector((state) => state.posts.error);
  const isFetching = useSelector((state) => state.posts.isFetching);
  const numberOfElements = useSelector((state) => state.posts.numberOfElements);

  useEffect(() => {
    dispatch(currentPosts({id, page}));
  }, [dispatch, id, page]);

  const scrollHandler = useCallback(
    (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
          300 &&
          userItems?.length < numberOfElements &&
        !isFetching
      ) {
        setPage((prevState) => prevState + 1);
      }
    },
    [userItems, isFetching, page]
  );

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  if (error) {
    return <Alert variant="danger">{ERRORS.error}</Alert>;
  }

  return (
    <>
      <div>
        {isFetching && <Spinner animation="border" />}
        {userItems?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
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
