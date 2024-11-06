import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 w-full shadow-md">
      <div className="mx-auto flex flex-row justify-between items-center max-w-7xl">
        
        <div className="text-2xl font-extrabold text-white font-sans">
          Opinion
        </div>

        <div className="flex space-x-8 items-center">
          <ul className="flex space-x-8 text-white font-medium text-lg">
            <li>
              <Link href="#home" className="hover:text-gray-300 transition duration-300">Home</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-300 transition duration-300">About</Link>
            </li>
            <li>
              <Link href="#features" className="hover:text-gray-300 transition duration-300">Features</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Sign In
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
