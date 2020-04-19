import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import Logo from "../../Logo.png";

const authenticatedOptions = (
    <>
        <NavLink className="link" to="/add-product">Create Post</NavLink>
        <NavLink className="link" to="/sign-out">Sign Out</NavLink>
    </>
)

const unauthenticatedOptions = (
    <>
    <NavLink className="link" to="/sign-in">Login</NavLink>
    <NavLink className="link" to="/sign-up">Sign Up</NavLink>
    </>
)





const Nav = ({ user }) => {
    
        return (
            <nav>
            <div className="nav">
                    <NavLink className="logo" to="/"><img src={Logo} alt="Logo" /></NavLink>
                    <div className="links">
                        {user && <div className="link welcome">Welcome, {user.username || user.user.username}</div>}
                        
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        ) 
        
}

export default Nav