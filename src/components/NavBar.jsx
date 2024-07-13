import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faApplePay } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import img from '../components/assests/logo.png';
const NavBar = () => {
  return (
    <nav className="bg-gradient-to-l from-teal-100 to-white  p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={img} alt="Logo" className="h-8 mr-4" />
    
      </div>

      <div className="flex items-center space-x-6">
        <div className="space-x-4">
          <a href="/" className="text-gray-500 hover:text-red-300">Home</a>
          <a href="/" className="text-gray-500 hover:text-red-300">Features</a>
          <a href="/" className="text-gray-500 hover:text-red-300">Details</a>
          <a href="/" className="text-gray-500 hover:text-red-300">Download</a>
        </div>

        <div className="relative">
          <button className="text-gray-500 hover:text-red-300">
            Drop
            <FontAwesomeIcon icon={faAngleDown } className="mr-2 text-gray-500 hover:text-red-300" />

          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 hidden">
            <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-red-300">Option 1</a>
            <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-red-300">Option 2</a>
            <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-red-300">Option 3</a>
          </div>
        </div>

        <FontAwesomeIcon icon={faApple} size="2x" className="text-blue-800 hover:text-pink-800" />
        <FontAwesomeIcon icon={faApplePay} size="2x" className="text-blue-800 hover:text-pink-800" />
      </div>  
    </nav>
  );
};

export default NavBar;
