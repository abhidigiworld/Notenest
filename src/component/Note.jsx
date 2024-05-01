import React, { useState, useEffect } from 'react';
import mockData from '../MOCK_DATA.json';
import Header from './Header';
import Footer from './Footer';

function Note() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        setNotes(mockData);
    }, []);

    const filteredNotes = notes.filter(note => note['noteType'] === 'regular');

    return (
        <>
            <Header />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Note List</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredNotes.map((note, index) => (
                        <div className="bg-white p-4 rounded-lg shadow-md" key={index}>
                            <h3 className="text-lg font-semibold mb-2">Author Name: {note['authorName']}</h3>
                            <p className="text-gray-600 mb-2">Note Title: {note['noteTitle']}</p>
                            <p className="text-gray-600">Note Description: {note['noteDescription']}</p>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">
                                <a href={note['noteLink']} target="_blank" rel="noopener noreferrer">Open Link</a>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Note;
