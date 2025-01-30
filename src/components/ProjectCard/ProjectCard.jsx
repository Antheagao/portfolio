import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, languages, link, description }) {
  // Function to sanitize language names
  const sanitizeLanguage = (lang) => {
    return lang
    .toLowerCase()
    .replace('c++', 'cpp')
    .replace('node.js', 'node')
    .replace(/\s+/g, '-');
  };

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <div className="project-languages">
        {languages.map((lang, index) => (
          <span key={index} className={`language-badge ${sanitizeLanguage(lang)}`}>
            {lang}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project
      </a>
      <ul className="project-description">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
