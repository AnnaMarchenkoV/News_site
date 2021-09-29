import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Content from './components/Content/Index';
import Header from './components/Header/Index';
import Nav from './components/Nav/Index';
import Profile from './components/Profile/Index';


function App(props) {

  return (
    <Router>    
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Route path='/content' render={()=> <Content postData={props.postData} />} />
      <Route path='/profile' render={()=> <Profile />} />
    </div>
    </Router>
  );
}

export default App;