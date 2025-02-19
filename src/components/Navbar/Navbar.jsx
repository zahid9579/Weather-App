import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 className="nav-title">Weather App</h1>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
      <button className="navbar-btn" onClick={() => navigate('/login')}>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
