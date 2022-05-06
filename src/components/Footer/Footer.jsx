import React from "react";
import "./Footer.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import logo from '../../public/images/Logo-SaveIT.svg'


const Footer = () => {

  const { user } = useAuthContext();
  const navigate = useNavigate();


  return (
      <footer className="footer">
        <div className="l-footer">
        <Link to={'/'}>
            <img className="logo" src={logo} alt="SaveIT" />
        </Link>

        {user?.image ? (
            <Link to="/profile">
              <img src={user.image} alt="" className="FooterImage" />
            </Link> 
          ) : (
            <Link to="/profile">
              <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" className="FooterImage" />
            </Link>
          )}
          <div className="arrow">

          <i className="fas fa-arrow-alt-circle-left fa-5x" onClick={() => navigate(-1)}></i>
          </div>

        </div>
        <div className="b-footer">
          <p>All rights reserved by <span style={{color:'#52BF04'}}>©</span> SaveIT 2022 </p>
        </div>
      </footer>
  );
};

export default Footer;
