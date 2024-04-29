import React from 'react';
import imageOfYourself from '../assets/pic.png';
import Header from './Header';
import Footer from './Footer';

function About() {
    return (
        <>
            <Header />
            <div className="bg-gray-100">
                <div className="max-w-4xl mx-auto px-4 py-8">
              
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="mb-8 md:mb-0 md:pr-8">
                            <img src={imageOfYourself} alt="Your Image" className="rounded-full w-full" />
                        </div>
                        <div className="md:w-2/3">
                            <div className="text-center md:text-left mb-8">
                                <h1 className="text-3xl font-bold">About NoteNest</h1>
                                <p className="text-lg mt-2">NoteNest is your go-to place for all things study-related. It's like a treasure trove of study materials where you can find notes, guides, and resources to help you ace your exams and assignments. But it's not just about grabbing info; it's also about connecting with other students, sharing knowledge, and supporting each other's learning journey. Think of it as your study buddy online, making learning easier and more fun for everyone.</p>
                            </div>
                        </div>
                    </div>

       
                    <div className="mt-8 bg-white p-6 rounded-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
                        <form className="max-w-lg mx-auto">
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2">Name:</label>
                                <input type="text" id="name" name="name" placeholder="Your name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2">Email:</label>
                                <input type="email" id="email" name="email" placeholder="Your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2">Message:</label>
                                <textarea id="message" name="message" placeholder="Your message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none mx-auto block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
