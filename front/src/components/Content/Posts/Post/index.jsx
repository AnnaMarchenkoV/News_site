import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import news from './assets/news.jpeg';

const Post = memo(({
  post: {
    user: { login, id },
    title, body, picture, tags,
  },
}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="news image"
      height="140"
      image={picture.url ? process.env.REACT_APP_API_URL + picture.url : news}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        { title }
      </Typography>
      <Typography variant="body2" color="text.secondary">
        { body }
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        { tags }
      </Typography>
    </CardContent>
    <NavLink to={`/profile/${id}`}>
      { login }
    </NavLink>
  </Card>
));

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
