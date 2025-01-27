import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text"> © {new Date().getFullYear()} Anthony Mendez. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Antheagao" target="_blank" rel="noopener noreferrer" className="footer-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/antheagao/" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
        <a href="mailto:anthonymendez.dev@gmail.com" className="footer-link">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
