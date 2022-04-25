import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { logout } from '../../store/AccessTokenStore'
import "./Navbar.scss";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { user } = useAuthContext();


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
          {!user ? 
            
                (
                    <>
                        <li>
                            <NavLink to="/register" onClick={() => setShowMediaIcons(false)}>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" onClick={() => setShowMediaIcons(false)}>Login</NavLink>
                        </li>
                    </>
                    
                ) : (
                    <>
                        <li>
                            <NavLink to="/profile" onClick={() => setShowMediaIcons(false)}>Profile</NavLink>
                        </li>
                        <li>
                            <p className="logout" onClick={logout}>Logout</p>
                        {/* <NavLink to="/logout" onClick={() => setShowMediaIcons(false)}>Login</NavLink> */}
                        </li>
                    </>
                )


          }
          </ul>
        </div>

        {/* 3rd social media links eliminar todas las clases!!!!!!! */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <i className="fas fa-bars" onClick={() => setShowMediaIcons(!showMediaIcons)}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;