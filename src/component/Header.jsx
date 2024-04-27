import React from 'react';

function Header() {
  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="logo.png" alt="Notenest Logo" className="h-8 mr-2" />
        <span className="text-lg font-semibold">Notenest</span>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Home
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          About
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Upload Notes
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Notes
        </button>
      </div>
    </div>
  );
}

export default Header;
