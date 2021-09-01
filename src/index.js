import React from 'react';
import ReactDOM from 'react-dom';
import './Userlogin.css';
import App from './App';
import Userlogin from './Userlogin';
import Signup from './Signup';
import Gallery from './Gallery';
import { BrowserRouter } from 'react-router-dom';
import PicData from './PicData';


ReactDOM.render(
  <>
   <BrowserRouter>
   <App/>
   </BrowserRouter>
  </>,
  document.getElementById('root')
);
