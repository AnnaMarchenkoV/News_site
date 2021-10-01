import React from "react";
import { Form, Button } from 'react-bootstrap';
// import classes from './Authorization.module.css';
import { connect } from "react-redux";

const Authorization=(props)=> {
  const { onRequestToken } = props;


  const onSubmit = ((event) => {
    event.preventDefault();
    console.log(event.target.email.value)  
    console.log(event.target.password.value)
    onRequestToken({data: {
      email: event.target.email.value,
      password: event.target.password.value
    }});     
  });
    return(

<Form onSubmit={onSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="m-3" variant="primary" type="submit">
    Log In
  </Button>
  <Button variant="primary" type="submit">
    Sign Up
  </Button>
</Form>)
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    token: state.token,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestToken: (payload) => dispatch({ type: "REQUESTED_TOKEN" , payload})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);