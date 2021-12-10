import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import {
  userRegistrationRequest,
} from '../../../store/actions/userActions';

import classes from './Registration.module.css';

const Registration = () => {
  const dispatch = useDispatch();

  const [isModalShown, setShownModal] = useState(false);
  const handleShow = () => setShownModal(true);
  const handleClose = () => setShownModal(false);

  const onSubmitReg = (event) => {
    event.preventDefault();

    const dataReg = new FormData(event.target);

    const payload = {
      avatar: dataReg.get('avatar'),
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
      <Button id="dec55b87-1b8a-474e-a042-89932f1cef03" variant="primary" onClick={handleShow} className={classes.form}>
        Sign Up
      </Button>
      <Modal id="984c0fb9-de8b-4d06-a16e-816c08ff6fe8" show={isModalShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>

        <Form onSubmit={onSubmitReg}>
          <Form.Group className="m-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="76ba5e32-d012-4ee6-aad4-3cc7a0b4fd63"
              type="email"
              placeholder="Enter email"
              name="emailReg"
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Login</Form.Label>
            <Form.Control
              id="74765daa-d4ca-4094-a0e5-04b08515fc3b"
              type="text"
              placeholder="Enter login"
              name="loginReg"
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="e1fb522f-5fc7-41fe-9916-1b61bd8cba04"
              type="password"
              placeholder="Password"
              name="passwordReg"
            />
          </Form.Group>

          <Form.Group className="m-3" controlId="formFileLg">
            <Form.Label>Avatar</Form.Label>
            <Form.Control id="5f573d3b-8c26-4640-a02c-a4dea74fc5ee" type="file" size="lg" name="avatar" />
          </Form.Group>

          <Button id="464e1650-f362-4870-b71e-d6b7b3bb2b64" variant="secondary" onClick={handleClose} className="m-3">
            Close
          </Button>
          <Button id="97dcd2b9-b22b-4036-ac33-40aaea98bd0c" className="m-3" variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Registration;
