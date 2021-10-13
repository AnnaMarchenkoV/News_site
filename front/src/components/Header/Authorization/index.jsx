import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sha256 from 'crypto-js/sha256';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

import {
  userLogin,
  userRegistrationRequest,
  userLogOut,
} from '../../../store/actions/userActions';

const Authorization = () => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const dataLogIn = new FormData(event.target);
    const payload = {
      user: {
        email: dataLogIn.get('email'),
        password: sha256(dataLogIn.get('password')).toString(),
      },
    };
    dispatch(userLogin(payload));
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onSubmitReg = (event) => {
    event.preventDefault();

    const dataReg = new FormData(event.target);

    const payload = {
      user: {
        email: dataReg.get('emailReg'),
        password: sha256(dataReg.get('passwordReg')).toString(),
        login: dataReg.get('loginReg'),
      },
    };
    dispatch(userRegistrationRequest(payload));
    handleClose();
  };

  const signOut = () => {
    dispatch(userLogOut());
  };

  const { error, userData } = useSelector((state) => state.user);

  if (userData) {
    return (
      <Button onClick={signOut} className="h-25" variant="primary">
        Sign Out
      </Button>
    );
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
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
            <Form.Control type="file" size="lg" />
          </Form.Group>

          <Button variant="secondary" onClick={handleClose} className="m-3">
            Close
          </Button>
          <Button className="m-3" variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal>
      {error && <Alert variant="danger">{error.message}</Alert>}
    </div>
  );
};

export default Authorization;
