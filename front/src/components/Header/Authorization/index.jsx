/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { NavLink } from "react-router-dom";

import { userLogin, userLogOut } from "../../../store/actions/userActions";
import ERRORS from "../../../store/helpers/errors";

import classes from "./Authorization.module.css";
import Registration from "../Registration";

const Authorization = () => {
  const { error, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const dataLogIn = new FormData(event.target);
    const payload = {
      email: dataLogIn.get("email"),
      password: dataLogIn.get("password"),
    };
    dispatch(userLogin(payload));
  };

  const signOut = () => {
    dispatch(userLogOut());
  };

  if (userData) {
    return (
      <NavLink
        id="ac7a5588-95ca-4c3f-9602-b7300eea0b8a"
        className={classes.signout_button}
        to="/"
        activeClassName={classes.active}
        onClick={signOut}
      >
        Sign Out
      </NavLink>
    );
  }

  return (
    <div data-testid="authorization" className={classes.form}>
      <Form onSubmit={onSubmit} className={classes.login}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className={classes.label}>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className={classes.label}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Button
          id="5ab921e1-2311-4bdc-a125-fe5da8a481e4"
          className="mb-3"
          variant="primary"
          type="submit"
          className={classes.button}
        >
          Log In
        </Button>
        <Registration />
      </Form>
      {(error || ERRORS[error] === "unknown") && (
        <Alert
          data-testid="error"
          id="474c0109-0e53-4336-8677-c7c128b99261"
          variant="danger"
          className={classes.danger}
        >
          {ERRORS[error]}
        </Alert>
      )}
    </div>
  );
};

export default Authorization;
