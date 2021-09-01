import React from 'react';
import {NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <nav className="navbar_menu">
        

         
        
          <NavLink exact activeClassName="active_class" className="link_Style" to="/">Home</NavLink>
          <NavLink exact activeClassName="active_class" className="link_Style" to="/login">Login</NavLink>
          <NavLink exact activeClassName="active_class" className="link_Style" to="/signup">Register</NavLink>
          <NavLink exact activeClassName="active_class" className="link_Style" to="/gallery">Gallery</NavLink>
          <NavLink exact activeClassName="active_class" className="link_Style" to="/profile">Profile</NavLink>
        
         
           
        </nav>
    </>)
}

export default Home
