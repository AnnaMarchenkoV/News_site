import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <div className="card">
    <h3 className="card-title">{ post.title }</h3>
    <h5 className="card-title">{ post.body }</h5>
    <h5 className="card-title">{ post.tags }</h5>
    <h5 className="card-title">{ post.user_id }</h5>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    user_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
