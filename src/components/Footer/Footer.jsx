import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
const Footer = () => {

  const { user } = useAuthContext();


  return (
      <footer className="footer">
        <div className="l-footer">
            <img src="https://i.postimg.cc/y62wcLBq/logo.png" alt="" />

              {user?.image ? (
                  <Link to="/profile">
                    <img src={user.image} alt="" className="FooterImage" />
                  </Link> 
                ) : (
                  <Link to="/profile">
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" className="FooterImage" />
                  </Link>
                )}
        </div>
{/*         <ul className="r-footer">
          <li>
            <h2 className="FooterTitles">Social</h2>
            <div className="box_social">

                    <a href="https://www.facebook.com/login/?lang=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>

                    <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>

                    <a href="https://twitter.com/login/?lang=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>

                    <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>

            </div>
          </li>
          <li className="features">
            <h2 className="FooterTitles">Information</h2>
            <ul className="box h-box">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Tickets</a>
              </li>
              <li>
                <a href="#">Certifications</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="FooterTitles">Legal</h2>
            <ul className="box">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contract</a>
              </li>
            </ul>
          </li>
        </ul> */}
        <div className="b-footer">
          <p>All rights reserved by <span style={{color:'#52BF04'}}>©</span> SaveIT 2022 </p>
        </div>
      </footer>
  );
};

export default Footer;
