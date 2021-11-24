import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import news from './assets/news.jpeg';

const Post = memo(({post}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="news image"
      height="140"
      image={post.image? post.image: news}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {console.log(post.tags[0].title)}
        { post.title }
      </Typography>
      <Typography variant="body2" color="text.secondary">
        { post.description }
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        { post.tags[0].title }
      </Typography>
    </CardContent>
    <NavLink to={`/profile/${post.userId}`}>
      { post.username }
    </NavLink>
  </Card>
));

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
