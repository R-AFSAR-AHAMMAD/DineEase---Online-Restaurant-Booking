import React from 'react';
import "./index.css";

const Navbar = () => {
  return (
      <nav className="nav-container">
        <h1 className="logo">DineEase</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>About</li>
          <li>Team</li>
        </ul>
        <button className="our-menu-btn">Our Menu</button>
      </nav>
  );
};

export default Navbar;