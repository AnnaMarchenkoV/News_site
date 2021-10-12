import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sha256 from 'crypto-js/sha256';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

import {
  requestedToken,
  userRegistrationRequest,
  userLogOut,
} from '../../../store/actions/userActions';

const Authorization = () => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const pass = event.target.password.value;

    const payload = {
      data: {
        email: event.target.email.value,
        password: sha256(pass).toString(),
      },
    };
    dispatch(requestedToken(payload));
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onSubmitReg = (event) => {
    event.preventDefault();
    const passReg = event.target.passwordReg.value;

    const payload = {
      data: {
        email: event.target.emailReg.value,
        password: sha256(passReg).toString(),
        login: event.target.loginReg.value,
      },
    };
    dispatch(userRegistrationRequest(payload));
    handleClose();
  };

  const signOut = (event) => {
    event.preventDefault();
    dispatch(userLogOut());
  };

  const { error, token } = useSelector((state) => state.user);

  if (token) {
    return (
      <Button onClick={signOut} className="h-25" variant="primary" type="submit">
        Sign Out
      </Button>
    );
  }

  if (error) {
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
        <Alert variant="danger">{error.message}</Alert>
      </div>
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
    </div>
  );
};

export default Authorization;
