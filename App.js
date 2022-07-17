import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Ambience from "./Ambience";
import Card from './components/card';
import Wall from './components/wall';
import Login from './Login';
import {Link} from 'react-router-dom';
import Home from './Home'; 
import Signup from './Signup';
import Profile from './Profile';

export let str = "";  

function App() {
  return (
    <div className="App">
        <script src="https://apis.google.com/js/api.js"></script>
        <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ambience' element={<Ambience/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
