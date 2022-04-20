import React, { useState } from "react";
import "./Navbar.scss";


import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>S</span>aveIT
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setShowMediaIcons(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/register" onClick={() => setShowMediaIcons(false)}>Register</NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={() => setShowMediaIcons(false)}>Login</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links eliminar todas las clases!!!!!!! */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <i className="fas fa-bars"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;