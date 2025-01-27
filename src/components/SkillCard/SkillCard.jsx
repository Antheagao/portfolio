import React from 'react';
import './SkillCard.css';

function SkillCard({ heading, skills }) {
  return (
    <div className="skill-card">
      <h3 className="skill-heading">{heading}</h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
