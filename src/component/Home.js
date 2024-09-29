import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'; // Ensure the path is correct


const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Invoice Reminder</h1>
            <div className="button-container">
                <Link to="http://localhost:3002/" className="home-btn">Login with Google</Link>
                <Link to="http://localhost:3000/due-invoices" className="home-btn">View Invoices</Link>
            </div>
        </div>
    );
};

export default Home;
