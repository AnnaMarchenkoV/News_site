import React from 'react';

const Post = (props) => {
  const post = props;
  return (
    <div className="card">
      <h3 className="card-title">{post.t}</h3>
      <h5 className="card-title">{post.b}</h5>
      <h5 className="card-title">{post.tg}</h5>
      <h5 className="card-title">{post.u}</h5>
    </div>
  );
};

export default Post;
