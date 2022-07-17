import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {State,Route} from 'react-router-dom';
import Header from './components/header';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import Ambience from "./Ambience";
import Card from './components/card';
import Wall from './components/wall';
import {Link} from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
