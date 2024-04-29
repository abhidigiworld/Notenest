import React, { useState } from 'react';
import image from '../assets/pic.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('Please fill out all fields ☠');
        } else {
            //when we create backend at that time i add the logic for it
            navigate("/Main1");
        }
    };

    // Function to clear error message when user starts typing
    const handleInputChange = () => {
        setErrorMessage('');
    };

    return (
        <>
            <div className="bg-blue-400 text-white py-6 text-center">
                <Link to={"/"}>
                    <h1 className="text-4xl">NoteNest Website</h1>
                    <div className="quote-container">
                        <p>Explore the NoteNest website and Unlock your creativity, one note at a time.</p>
                    </div>
                </Link>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-md w-full p-6 border rounded-lg bg-gray-100">
                    <img src={image} alt="image" className="w-full mb-4" />
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl mb-4 text-center">Login</h2>
                        {errorMessage && <div className="text-red-500 text-2xl">{errorMessage}</div>}
                        <input
                            type="text"
                            placeholder="Username"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                handleInputChange();
                            }}
                            className="w-full border rounded py-2 px-3 mb-3"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                handleInputChange();
                            }}
                            className="w-full border rounded py-2 px-3 mb-3"
                        />
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
