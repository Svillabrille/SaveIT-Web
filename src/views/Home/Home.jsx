import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext";
import './Home.scss'


const Home = () => {


    const { user } = useAuthContext();

    return (


        <div className='Home'>

        <h1 className='HomeText'>Welcome to SaveIT the App that will help you find the best prices for your shopping list!</h1>

        { !user ? 
            <h1>
                <Link className='HomeRedirect' to={'/login'}>Login </Link>
                in order to upload your tickets here
            </h1>
        :

        <div className='HomeTicket'>
            <h3 className='HomeSecondaryText'>Add a new ticket to your profile and colaborate with the comunity!</h3>
            <ul className = "links">
                <Link to={'/new-ticket'}>
                    <li>New Ticket</li>
                </Link>  
            </ul>
        </div>
        }
        </div>
    );
};

export default Home;