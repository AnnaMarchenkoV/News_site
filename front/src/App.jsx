import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Content from './components/Content/index';
import Header from './components/Header/index';
import Profile from './components/Profile/index';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/profile/:id" component={Profile} />
        <Route exact path="/" component={Content} />
      </div>
    </Router>
  );
}

export default App;
