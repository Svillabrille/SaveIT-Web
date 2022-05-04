import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import "./Profile.scss"

const Profile = () => {
    const { user, getUser } = useAuthContext()
    return (
        <div>
            <div className="card-container">
                <span className="pro">PRO</span>

                {user?.image ? (
                    <img src={user.image} alt="" className="round" />
                ) : (
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" className="round" />
                )}

                <h3>{user?.name}</h3>
                <h6>New York</h6>
                <p className='ProfileParagraph'>User interface designer and <br/> front-end developer</p>
                <div className="buttons">
                    <button className="primary">
                        My tickets
                    </button>
                    <button className="primary ghost">
                        Following
                    </button>
                </div>
                <div className="skills">
                    <h6>Liked Supermarkets</h6>
                    <ul>
                        <li>UI / UX</li>
                        <li>Front End Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;