import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Content from './components/Content/index';
import Header from './components/Header/index';
import Nav from './components/Nav/index';
import Profile from './components/Profile/index';
import { userAuthenticate } from './store/actions/userActions';

import classes from './App.modules.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAuthenticate());
  }, [dispatch]);
  return (
    <Router>
      <div className={classes.app_wrapper}>
        <Header />
        <Nav />
        <Route path="/content" component={Content} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
