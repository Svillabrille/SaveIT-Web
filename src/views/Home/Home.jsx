import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext";
import './Home.scss'


const Home = () => {


    const { user } = useAuthContext();

    return (


        <div className='Home'>

        <h1>Welcome to SaveIT the App that will help you find the best prices for your shopping list!</h1>

        { !user ? 
            <h1>Log in in order to see the products that you can find</h1>
        :
        <div>
            <h3>Add a new ticket to your profile and colaborate with the comunity!</h3>
            <Link to={'/new-ticket'}>New Ticket</Link>
        </div>
        }
        </div>
    );
};

export default Home;