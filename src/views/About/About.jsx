import React from 'react';
import './About.scss'

const About = () => {
    return (
        <div>
        <section>
            <div class = "content">
                <h2>About Us</h2>
                <span></span>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>

                <ul class = "links">
                    <li><a href = "#">work</a></li>

                    <div class = "vertical-line"></div>

                    <li><a href = "#">service</a></li>

                    <div class = "vertical-line"></div>
                    
                    <li><a href = "#">contact</a></li>
                </ul>

                <ul class = "icons">
                    <li>
                        <i class = "fa fa-twitter"></i>
                    </li>
                    <li>
                        <i class = "fa fa-facebook"></i>
                    </li>
                    <li>
                        <i class = "fa fa-github"></i>
                    </li>
                    <li>
                        <i class = "fa fa-pinterest"></i>
                    </li>
                </ul>
            </div>
        </section>
        </div>
    );
};

export default About;