import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Form, Button, Modal } from 'react-bootstrap';

import { updateUser, deleteUser } from '../../../store/actions/userActions';

import classes from './UpdateProfile.module.css';

const UpdateProfile = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.user);

  const [isModalShown, setShownModal] = useState(false);
  const handleShow = () => setShownModal(true);
  const handleClose = () => setShownModal(false);

  const onSubmitUpdate = (event) => {
    event.preventDefault();

    const dataUpdate = new FormData(event.target);

    const payload = {
      avatar: dataUpdate.get('avatar').name ? dataUpdate.get('avatar') : userData.avatar,
      email: dataUpdate.get('email') || userData.email,
      name: dataUpdate.get('name') || userData.name,
      role: 'user',
    };

    dispatch(updateUser(payload));
    handleClose();
  };

  const deleteUserProfile = () => {
    const answer = window.confirm('Delete profile?');
    if (answer) {
      dispatch(deleteUser());
    }
  };

  return (
    <div>
      <Button id="c6c211f7-5712-44d2-a5d5-15460df9f0b4" variant="primary" onClick={handleShow} className={classes.button}>
        Update
      </Button>
      <NavLink
        className={classes.delete_button}
        to="/"
        activeClassName={classes.active}
        onClick={deleteUserProfile}
      >
        Delete profile
      </NavLink>
      <Modal id="d9d74d54-8599-43dc-8e3e-f6f43d10ac76" show={isModalShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>

        <Form onSubmit={onSubmitUpdate}>

          <Form.Group className="m-3">
            <Form.Label>New E-mail</Form.Label>
            <Form.Control
              id="626fa43b-bc2f-4780-8218-40f5545786e7"
              type="email"
              placeholder="Enter new e-mail"
              name="email"
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>New Name</Form.Label>
            <Form.Control
              id="8aa6efcf-f264-478a-b22a-c43d421c326e"
              type="text"
              placeholder="Enter new name"
              name="name"
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              id="33575b36-a7f2-4419-96c9-d6e6892a56f6"
              type="file"
              size="lg"
              name="avatar"
              accept=".jpg,.png,.jpeg"
            />
          </Form.Group>

          <Button id="41a026b8-5d32-49d0-a2dd-35c5a1078539" variant="secondary" onClick={handleClose} className="m-3">
            Close
          </Button>
          <Button id="ae8fbc07-a8f5-4866-8ac2-d7768cf54982" className="m-3" variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateProfile;
