import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="brand">Sales Skills-Hub</h1>

      {/* Hamburger Icon */}
      <button
        className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link></li>
        <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
