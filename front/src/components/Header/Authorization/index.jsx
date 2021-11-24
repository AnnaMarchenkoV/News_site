import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import {
  userLogin,
  userLogOut,
} from '../../../store/actions/userActions';

const Authorization = () => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const dataLogIn = new FormData(event.target);
    const payload = {
        email: dataLogIn.get('email'),
        password: dataLogIn.get('password'),
      }
    dispatch(userLogin(payload));
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

      {error && <Alert variant="danger">{error.message}</Alert>}
    </div>
  );
};

export default Authorization;
