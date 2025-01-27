import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="title">Anthony Mendez</h1>
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/projects" className="link">Projects</Link>
      </nav>
    </header>
  );
}

export default Header;
