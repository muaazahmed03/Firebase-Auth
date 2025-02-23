import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <nav className="navbar">
      <div className="logo">Pakistan Hotel Management System</div>
      <ul className="nav-links">
        <li><a href="#">Booking</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="auth-buttons">
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleSignupClick}>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;