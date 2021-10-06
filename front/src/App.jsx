import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Content from './components/Content/index.jsx';
import Header from './components/Header/index.jsx';
import Nav from './components/Nav/index.jsx';
import Profile from './components/Profile/index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-wrapper">
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
