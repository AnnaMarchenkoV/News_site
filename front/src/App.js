import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Content from './components/Content/Index';
import Header from './components/Header/Index';
import Nav from './components/Nav/Index';
import Profile from './components/Profile/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store'
import {Provider} from 'react-redux'


function App(props) {

  return (
    <Provider store={store}>
      <Router>    
        <div className="app-wrapper">
          <Header />
          <Nav />
          <Route path='/content' render={()=> <Content postData={props.postData} />} />
          <Route path='/profile' render={()=> <Profile />} />
        </div>
    </Router>
    </Provider>
    
  );
}

export default App;