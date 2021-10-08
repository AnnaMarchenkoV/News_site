import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Content from './components/Content/index';
import Header from './components/Header/index';
import Nav from './components/Nav/index';
import Profile from './components/Profile/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.modules.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={classes.app_wrapper}>
          <Header />
          <Nav />
          <Route path="/content" component={Content} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
