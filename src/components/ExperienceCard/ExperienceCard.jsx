import React from 'react';
import './ExperienceCard.css';

function ExperienceCard({ position, location, organization, dates, responsibilities }) {
  return (
    <div className="experience-card">
      <h3 className="experience-position">{position}</h3>
      <p className="experience-meta">
        {organization} – {location}
        <br />
        <span className="experience-dates">{dates}</span>
      </p>
      <ul className="experience-responsibilities">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
