import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-heading">Anthony Mendez</h1>
        <p className="hero-subtext">
          Software Engineer
        </p>
        <div className="hero-buttons">
          <Link to="/about" className="hero-button">
            About Me
          </Link>
          <Link to="/projects" className="hero-button">
            View Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
