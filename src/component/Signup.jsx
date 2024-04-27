import React, { useState } from 'react';
import image from '../assets/pic.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
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
      setErrorMessage(''); // Clear error message if all fields are filled and passwords match
      // Perform sign up logic here when you add the backend integration
    }
  };

  return (
    <>
      <div className="headings">
        <Link to={"/"}><h1>NoteNest Website</h1>
          <div className="quote-container">
            <p>Explore the NoteNest website and Unlock your creativity, one note at a time.</p>
          </div>
        </Link>
      </div>
      <div className="main">
        <div className="left">
          <img src={image} alt="" />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
