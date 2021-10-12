import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = memo(({
  post: {
    title, body, tags, user_id: userId,
  },
}) => (
  <div className="card">
    <h3 className="card-title">{ title }</h3>
    <h5 className="card-title">{ body }</h5>
    <h5 className="card-title">{ tags }</h5>
    <NavLink
      to="/profile"
    >
      {userId}
    </NavLink>
  </div>
));

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Post;
