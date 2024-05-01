import React, { useState } from 'react';
import axios from 'axios'; 
import image from '../assets/pic.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Signup page

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      setErrorMessage('Please fill out all fields');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');

      try {
        const response = await axios.post('http://localhost:3000/signup', { 
          email,
          password,
        });
        if(response.status===200){
          alert("Data saved successfully");
        } 
        if (response.status===200) {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error:', error);
        if (error.response) {
          setErrorMessage(error.response.data.error);
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      }
    }
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
          <div className="flex justify-center mb-6">
            <img src={image} alt="image" className="w-25" />
          </div>
          <form onSubmit={handleSubmit} method='post'>
            <h2 className="text-2xl mb-4 text-center">Sign Up</h2>
            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded py-2 px-3 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded py-2 px-3 mb-3"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded py-2 px-3 mb-3"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
