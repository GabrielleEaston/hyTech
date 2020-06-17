import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';




const authenticatedOptions = (
  <>
    
    <NavLink className="link" to="/add-post">
      Create Post
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  
  </>
);

const unauthenticatedOptions = (
  <>

    <NavLink className="link" to="/sign-in">
      Login
    </NavLink>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
  
  </>
);

const Nav = ({ user }) => {
  return (
      <nav className="nav-bar" >
        <NavLink className="logo" to="/">
          <h1>HyTech</h1>
        </NavLink>
        <div className="links">
          {user && <div className="link-welcome"><p style={{textTransform: "capitalize"}}>Welcome, {user.username}</p></div>}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
        </nav>


  );
};

export default Nav;
