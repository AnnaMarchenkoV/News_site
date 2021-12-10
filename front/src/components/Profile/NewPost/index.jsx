/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { sendPost } from '../../../store/actions/postActions';
import classes from './NewPost.module.css';

const NewPost = () => {
  const dispatch = useDispatch();
  const [isModalShown, setShownModal] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleShow = () => setShownModal(true);
  const handleClose = () => setShownModal(false);

  const onSubmit = (event) => {
    event.preventDefault();

    const dataPost = new FormData(event.target);
    const payload = {
      description: dataPost.get('body'),
      image: dataPost.get('picture'),
      tags: (dataPost.get('tags')).split(' '),
      title: dataPost.get('title'),
      username: currentUser.name,
      userId: currentUser.id,
    };
    dispatch(sendPost(payload));
  };

  return (
    <div>
      <Button id="2eef95d1-40b3-4f31-bc15-1f8f33e47b0b" variant="primary" onClick={handleShow} className="mt-3" className={classes.button}>
        New Post
      </Button>

      <Modal id="8331655e-a812-4f30-ba76-e3142356f6ac" show={isModalShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new post</Modal.Title>
        </Modal.Header>

        <Form onSubmit={onSubmit}>
          <Form.Group className="m-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              id="10b54686-db4b-4769-a6a2-01979be78401"
              type="text"
              name="title"
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Post</Form.Label>
            <Form.Control
              id="a7401f05-decd-4c43-8b78-1cb6724c10ff"
              as="textarea"
              placeholder="Leave a post here"
              style={{ height: '100px' }}
              name="body"
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Picture</Form.Label>
            <Form.Control type="file" accept=".jpg,.png,.jpeg" size="lg" name="picture" />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              id="18850c34-8f49-4ea9-a082-ea9062fb055f"
              type="text"
              name="tags"
              placeholder=""
            />
          </Form.Group>

          <Button id="3abe86bc-a4a6-47ab-967d-064efbd2a659" variant="secondary" onClick={handleClose} className="m-3">
            Close
          </Button>
          <Button id="c3eed1ec-426c-4838-b1ce-476f2eeb5b68" className="m-3" variant="primary" type="submit" onClick={handleClose}>
            Save
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default NewPost;
