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
      user_id: userData.id,
      user: {
        id: userData.id,
        login: dataUpdate.get('login'),
        avatar: dataUpdate.get('avatar'),
      },
    };
    console.log(payload);

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
            <Form.Label>New login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new login"
              name="login"
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
