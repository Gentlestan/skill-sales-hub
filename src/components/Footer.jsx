import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <a href="mailto:Salesskillshub@gmail.com">Email Us</a>
          <a
            href="https://www.linkedin.com/in/okoronkwo-victor-bb17ba267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <button
          className="footer-top-btn"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Top
        </button>
      </div>

      <div className="footer-legal">
        <small>© {new Date().getFullYear()} Okoronkwo Victor. All rights reserved.</small>
      </div>
    </footer>
  );
}
