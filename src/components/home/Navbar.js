import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-white">
          <img src="logo.png" alt="Logo" className="h-8 mr-2" />
          <span className="font-semibold text-lg">Your Site Name</span>
        </Link>
        <ul className="flex space-x-4">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-white">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-white">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
