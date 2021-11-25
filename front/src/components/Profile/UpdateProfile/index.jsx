import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Button, Modal } from 'react-bootstrap';

import { updateUser } from '../../../store/actions/userActions';

const UpdateProfile = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.user);

  const [isModalShown, setShownModal] = useState(false);
  const handleShow = () => setShownModal(true);
  const handleClose = () => setShownModal(false);

  const onSubmitReg = (event) => {
    event.preventDefault();

    const dataUpdate = new FormData(event.target);

    const payload = {
        avatar: dataUpdate.get('avatar').name? dataUpdate.get('avatar') : userData.avatar,
        email : dataUpdate.get('email') || userData.email,
        name : dataUpdate.get('name') || userData.name,
        role: 'user'
    };

    dispatch(updateUser(payload));
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>
      <Modal show={isModalShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>

        <Form onSubmit={onSubmitReg}>

        <Form.Group className="m-3">
            <Form.Label>New E-mail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new e-mail"
              name="email"
            />
          </Form.Group>
          
          <Form.Group className="m-3">
            <Form.Label>New Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new name"
              name="name"
            />
          </Form.Group>

          <Form.Group className="m-3">
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

export default UpdateProfile;
