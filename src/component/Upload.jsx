import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Upload() {
  const [formData, setFormData] = useState({
    noteLink: '',
    authorName: '',
    noteType: '', // Updated to include noteType
    noteTitle: '',
    noteDescription: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const errors = {};
    if (!formData.noteLink) {
      errors.noteLink = 'Note Link is required';
    }
    if (!formData.authorName) {
      errors.authorName = 'Author Name is required';
    }
    if (!formData.noteType) {
      errors.noteType = 'Note Type is required';
    }
    if (!formData.noteTitle) {
      errors.noteTitle = 'Note Title is required';
    }
    if (!formData.noteDescription) {
      errors.noteDescription = 'Note Description is required';
    }
    setErrors(errors);

    // If no errors, submit form data to the backend
    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <>
      <Header />
      <div className="w-3/4 mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-xl mb-9">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Notes</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="noteLink" className="block mb-2">Note Link:</label>
            <input type="text" id="noteLink" name="noteLink" value={formData.noteLink} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            {errors.noteLink && <p className="text-red-500">{errors.noteLink}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="authorName" className="block mb-2">Author Name:</label>
            <input type="text" id="authorName" name="authorName" value={formData.authorName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            {errors.authorName && <p className="text-red-500">{errors.authorName}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="noteType" className="block mb-2">Note Type:</label>
            <select id="noteType" name="noteType" value={formData.noteType} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select Note Type</option>
              <option value="regular">Regular Notes</option>
              <option value="placementPreparation">Placement Preparation Notes</option>
            </select>
            {errors.noteType && <p className="text-red-500">{errors.noteType}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="noteTitle" className="block mb-2">Note Title:</label>
            <input type="text" id="noteTitle" name="noteTitle" value={formData.noteTitle} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            {errors.noteTitle && <p className="text-red-500">{errors.noteTitle}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="noteDescription" className="block mb-2">Note Description:</label>
            <textarea id="noteDescription" name="noteDescription" value={formData.noteDescription} onChange={handleChange} rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
            {errors.noteDescription && <p className="text-red-500">{errors.noteDescription}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none">Submit</button>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Upload;
