import Link from 'next/link';
import React from 'react';

interface TLink {
  id: number;
  title: string;
  url: string;
}

const links : TLink[] = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "About",
    url: "/about"
  },
  {
    id: 3,
    title: "Features",
    url: "/features"
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact"
  }
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-gradient-to-r from-blue-400 to-indigo-400 py-4 w-full shadow-md">
      <div className="container flex flex-row justify-between items-center">
        
        <div className="text-2xl font-extrabold text-white font-sans">
          Opinion
        </div>

        <div className="flex space-x-8 items-center">
          <div className="flex space-x-8 text-white font-medium text-lg">
            {links.map(link => (
              <Link key={link.id} href={link.url}  className="hover:text-gray-300 transition duration-300">{link.title}</Link>
          ))}
          </div>
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
