import React from 'react';
import './About.scss'

const About = () => {
    return (
        <div>
        <section>
            <div className = "content">
                <h2>About Us</h2>
                <span></span>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>

                <ul className = "links">
                    <li><a href = "#">work</a></li>

                    <div className = "vertical-line"></div>

                    <li><a href = "#">service</a></li>

                    <div className = "vertical-line"></div>
                    
                    <li><a href = "#">contact</a></li>
                </ul>

                <ul className = "icons">
                    <li>
                        <a href="https://www.facebook.com/login/?lang=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook SocialMedia"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram SocialMedia"></i></a>                    
                    </li>
                    <li>
                        <a href="https://twitter.com/login/?lang=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter SocialMedia"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in SocialMedia"></i></a>                    
                    </li>
                </ul>
            </div>
        </section>
        </div>
    );
};

export default About;