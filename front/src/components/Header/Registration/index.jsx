import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import {
  userRegistrationRequest,
} from '../../../store/actions/userActions';

const Registration = () => {
  const dispatch = useDispatch();

  const [isModalShown, setShownModal] = useState(false);
  const handleShow = () => setShownModal(true);
  const handleClose = () => setShownModal(false);

  const onSubmitReg = (event) => {
    event.preventDefault();

    const dataReg = new FormData(event.target);

    const payload = {
        avatar: "https://news-feed.dunice-testing.com/api/v1/file/89932e83-d505-4dc6-8d90-0b729e71f161.jpeg",
        email: dataReg.get('emailReg'),
        name: dataReg.get('loginReg'),
        password: dataReg.get('passwordReg'),
        role: 'base',  
    };

    dispatch(userRegistrationRequest(payload));
    handleClose();
  };

  const { userData } = useSelector((state) => state.user);

  if (userData) {
    return (
      <div />
    );
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>
      <Modal show={isModalShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>

        <Form onSubmit={onSubmitReg}>
          <Form.Group className="m-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="emailReg"
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter login"
              name="loginReg"
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="passwordReg"
            />
          </Form.Group>

          <Form.Group className="m-3" controlId="formFileLg">
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="file" size="lg" name="avatar" />
          </Form.Group>

          <Button variant="secondary" onClick={handleClose} className="m-3">
            Close
          </Button>
          <Button className="m-3" variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Registration;
