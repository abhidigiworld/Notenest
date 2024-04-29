import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="bg-gray-100 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="Notenest Logo" className="h-8 mr-2" />
                <span className="text-lg font-semibold">Notenest</span>
            </div>
            <div className="flex space-x-4">
                <Link to={"/Main1"}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        Home
                    </button>
                </Link>
                <Link to={"/About"}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        About
                    </button>
                </Link>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                    <Link to={"/Upload"}>
                    Upload
                    </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                    <Link to={"/Note"}>
                    Notes
                    </Link>
                </button>
                <Link to={"/"}>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                        Logout
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
