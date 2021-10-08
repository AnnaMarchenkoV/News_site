/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Post = React.memo((props) => {
  const { post } = props;
  const {
    title, body, tags, user_id,
  } = post;
  return (
    <div className="card">
      <h3 className="card-title">{ title }</h3>
      <h5 className="card-title">{ body }</h5>
      <h5 className="card-title">{ tags }</h5>
      <h5 className="card-title">{ user_id }</h5>
    </div>
  );
});

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Post;
