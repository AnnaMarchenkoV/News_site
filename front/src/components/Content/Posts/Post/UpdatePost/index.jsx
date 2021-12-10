/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { updatePost } from '../../../../../store/actions/postActions';
import classes from './UpdatePost.module.css';

const UpdatePost = ({ post }) => {
  const dispatch = useDispatch();
  const [isModalShown, setShownModal] = useState(false);
  const [titlePost, setTitlePost] = useState(post.title);
  const [file, setFile] = useState();
  const [descriptionPost, setDescriptionPost] = useState(post.description);
  const tagsArray = post?.tags?.map((tag) => tag?.title);
  const tagsString = tagsArray?.join(' ');
  const [tagsPost, setTagsPost] = useState(tagsString);

  const handleShow = () => {
    setShownModal(true);
  };
  const handleClose = () => setShownModal(false);

  const onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      post: {
        description: descriptionPost,
        image: file?.name ? file : post.image,
        tags: tagsPost.split(' '),
        title: titlePost,
      },
      postId: post.id,
    };
    dispatch(updatePost(payload));
  };

  return (
    <div className={classes.buttons}>
      <Button variant="primary" onClick={handleShow} className="mt-3" className={classes.button}>
        Update
      </Button>

      <Modal show={isModalShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update post</Modal.Title>
        </Modal.Header>

        <Form onSubmit={onSubmit}>
          <Form.Group className="m-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={titlePost}
              onChange={(event) => setTitlePost(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Post</Form.Label>
            <Form.Control
              as="textarea"
              value={descriptionPost}
              onChange={(event) => setDescriptionPost(event.target.value)}
              style={{ height: '100px' }}
              name="body"
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="file"
              accept=".jpg,.png,.jpeg"
              size="lg"
              name="picture"
              onChange={(event) => setFile(event.target.files[0])}
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              name="tags"
              value={tagsPost}
              onChange={(event) => setTagsPost(event.target.value)}
            />
          </Form.Group>

          <Button variant="secondary" onClick={handleClose} className="m-3">
            Close
          </Button>
          <Button className="m-3" variant="primary" type="submit" onClick={handleClose}>
            Save
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

UpdatePost.propTypes = {
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

export default UpdatePost;
