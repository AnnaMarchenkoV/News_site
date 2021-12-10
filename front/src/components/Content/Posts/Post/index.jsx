import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from 'react-bootstrap';

import { deletePost } from '../../../../store/actions/postActions';

import news from './assets/news.jpeg';
import classes from './Post.module.css';
import UpdatePost from './UpdatePost';

const Post = memo(({ post }) => {
  const tagsArray = post?.tags.map((tag) => tag?.title || tag);
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.user.userData?.id);

  const deleteNews = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.posts}>
      <CardMedia
        component="img"
        alt="news image"
        height="140"
        image={post?.image ? post.image : news}
        className={classes.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { post?.title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { post?.description }
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          #
          { post.tags[0].title ? (tagsArray?.join(' #')) : post?.tags.join(' #') }
        </Typography>
      </CardContent>
      <NavLink to={`/profile/${post?.userId}`}>
        { post?.username }
      </NavLink>
      {post.userId === currentUserId
      && (
      <div className={classes.buttons}>
        <UpdatePost post={post} />
        <Button variant="primary" className={classes.button} onClick={deleteNews}>
          Delete
        </Button>
      </div>
      )}
    </Card>
  );
});

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
