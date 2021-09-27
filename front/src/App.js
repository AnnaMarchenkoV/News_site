import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      
      <Profile />   
    </div>
  );
}

export default App;