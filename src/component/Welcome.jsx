import React from 'react';
import student from '../assets/pic.png'
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <>
            <div className="flex justify-center h-screen">
                <div className="text-center">
                    <div className="bg-blue-400 w-100 text-white py-6 rounded-b-3xl">
                        <h1 className="text-4xl">NoteNest Website</h1>
                        <div className="quote-container">
                            <p>Explore the NoteNest website and Unlock your creativity, one note at a time.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <img src={student} alt="student" />
                    </div>
                    <div className="flex justify-center mt-8 space-x-4">
                        <button className="bg-green-500 text-white px-8 py-4 rounded hover:bg-white hover:text-green-500 transition duration-500"> 
                            <Link to={'/login'}>Log In</Link> 
                        </button>
                        <button className="bg-purple-700 text-white px-8 py-4 rounded hover:bg-white hover:text-purple-700 transition duration-500">
                            <Link to={'/signup'}>Sign Up</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;
