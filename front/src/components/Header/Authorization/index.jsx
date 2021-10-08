import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { requestedToken } from '../../../store/actions/userActions';

const Authorization = () => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      data: {
        email: event.target.email.value,
        password: event.target.password.value,
      },
    };
    dispatch(requestedToken(payload));
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Button className="m-3" variant="primary" type="submit">
        Log In
      </Button>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default Authorization;
