import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import "./Profile.scss"

const Profile = () => {
    const { user, getUser } = useAuthContext()
    return (
        <div className='Profile'>
            <div className="card-container">

                {user?.image ? (
                    <img src={user.image} alt="" className="round" />
                ) : (
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" className="round" />
                )}

                <h3>{user?.name}</h3>
                <h6>{user?.country}</h6>
                <div className="buttons">
                    <button className="primary">
                        My Tickets
                    </button>
                    <button className="primary ghost">
                        My Lists
                    </button>
                </div>
                <div className="skills">
                    <h6>Liked Supermarkets</h6>
                    <ul>
                    {
                        user?.supermarketPreferences.map( (preference, index) => 
                            
                            <li key={index}>{preference}</li>
                        
                        

                        )
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;