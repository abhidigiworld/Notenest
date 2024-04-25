import React from 'react';
import './Welcome.css';
import student from '../assets/pic.png'
import { Link } from 'react-router-dom';
// Welcome page

const Welcome = () => {
    return (
        <>
            <div className="box">
                <div className="welcome-container">
                    <div className="headings">
                        <h1>NoteNest Website</h1>
                        <div className="quote-container">
                            <p>Explore the NoteNest website and Unlock your creativity, one note at a time.</p>
                        </div>
                    </div>
                    <div className="image">
                        <img src={student}/>
                    </div>
                    <div className="buttons-container">
                        <button className="login-button"><Link to={'/login'}>Log In</Link> </button>
                        <button className="signup-button"><Link to={'/Signup'}>Sign Up</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;
