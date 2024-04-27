import React from 'react';
import imageOfYourself from '../assets/pic.png';
import Header from './Header';
import Footer from './Footer';

function About() {
    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-8 flex">

                <div className="w-1/3 pr-8">
                    <img src={imageOfYourself} alt="Your Image" className="rounded-full w-full" />
                </div>


                <div className="w-2/3">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold">About Me</h1>
                        <p className="text-lg">My name is Abhishek Kumar Sharma. I identified a problem related to my peers that they waste a lot of time searching for good notes. So, I designed this website to address that issue.</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2">Name:</label>
                                <input type="text" id="name" name="name" placeholder="Your name" className="w-full px-4 py-2 border rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2">Email:</label>
                                <input type="email" id="email" name="email" placeholder="Your email" className="w-full px-4 py-2 border rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2">Message:</label>
                                <textarea id="message" name="message" placeholder="Your message" rows="4" className="w-full px-4 py-2 border rounded-md"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default About;
