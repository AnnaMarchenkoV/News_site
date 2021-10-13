/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = memo(({
  post: {
    user: { login, email },
    title, body, tags,
  },
}) => {
  const user = { login, email };
  return (
    <div className="card">
      <h3 className="card-title">{ title }</h3>
      <h5 className="card-title">{ body }</h5>
      <h5 className="card-title">{ tags }</h5>
      <NavLink user={user} to={`/profile/${login}`}>
        { login }
      </NavLink>
    </div>
  );
});

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({ login: PropTypes.string.isRequired }).isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
