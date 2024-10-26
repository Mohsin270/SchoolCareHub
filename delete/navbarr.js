import React, { useState } from 'react';


const navbarr = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="toggle" onClick={toggleMenu}>
        &#9776; {/* Menu icon */}
      </div>
      <div className={`menu ${isMenuOpen ? 'show active' : ''}`}>
        <div className="menu-items">
          <div className="nav-item"><a className="link" href="/">Home</a></div>
          <div className="nav-item"><a className="link" href="/about">About</a></div>
          <div className="nav-item"><a className="link" href="/services">Services</a></div>
          <div className="nav-item"><a className="link" href="/contact">Contact</a></div>
          <div className="nav-item"><a className="nav-btn" href="/login">Login</a></div>
          <div className="nav-item register-btn"><a href="/register">Register</a></div>
        </div>
      </div>
    </div>
  );
};

export default navbarr;
