import logo from './logo.svg';
import React from 'react';    
import './App.css';
import './Userlogin.css';
import Userlogin from './Userlogin';
import Signup from './Signup';
import ForgotPwd from './ForgotPwd';
import Profile from './Profile';
import Gallery from './Gallery';
import NavBar from './NavBar';
// import Menu from './Menu';
import Home from './Home';
import { Route, Switch } from 'react-router';


function App() {
  return (
    <>
    
      <NavBar/>

      
       <Switch>
      <Route exact path="/" component={Home}/>
       <Route exact path="/login" component={Userlogin}/>
       <Route exact path="/signup" component={Signup}></Route>
       <Route exact path="/gallery" component={Gallery}/>
       <Route exact path="/profile" component={Profile}/>
       <Route  path="/forgotpwd" component={ForgotPwd}></Route>

     </Switch> 
    
  


    </>
  );
};

export default App;
