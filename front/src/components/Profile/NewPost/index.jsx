import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { sendPost } from '../../../store/actions/postActions';

const NewPost = () => {
  const dispatch = useDispatch();

  const [isModalShown, setShownModal] = useState(false);
  const handleShow = () => setShownModal(true);
  const handleClose = () => setShownModal(false);

  const onSubmit = (event) => {
    event.preventDefault();

    const dataPost = new FormData(event.target);
    const payload = {
        description: dataPost.get('body'),
        image: dataPost.get('picture'),
        tags: [dataPost.get('tags')],
        title: dataPost.get('title'),
    };
    dispatch(sendPost(payload));
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="mt-3">
        New Post
      </Button>

      <Modal show={isModalShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new post</Modal.Title>
        </Modal.Header>

        <Form onSubmit={onSubmit}>
          <Form.Group className="m-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Post</Form.Label>
            <Form.Control
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
            <Form.Control type="text" name="tags" placeholder="#tag1#tag2#tag3" />
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

export default NewPost;
