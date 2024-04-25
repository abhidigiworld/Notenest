import React, { useState } from 'react';
import image from '../assets/pic.png';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('Please fill out all fields');
        } else {
            //when we create backend at that time i add the logic for it
        }
    };

    // Function to clear error message when user starts typing
    const handleInputChange = () => {
        setErrorMessage('');
    };

    return (
        <>
            <div className="headings">
                <Link to={"/"}><h1>NoteNest Website</h1>
                    <div className="quote-container">
                        <p>Explore the NoteNest website and Unlock your creativity, one note at a time.</p>
                    </div></Link>
            </div>
            <div className="main">
                <div className="left">
                    <img src={image} alt="image " />
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                        <input
                            type="text"
                            placeholder="username"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                handleInputChange();
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                handleInputChange();
                            }}
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
