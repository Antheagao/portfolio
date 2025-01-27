import React from 'react';
import './CertificationCard.css';

function CertificationCard({ title, organization, link }) {
  return (
    <div className="certification-card">
      <h3 className="certification-title">{title}</h3>
      <p className="certification-organization">{organization}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="certification-link"
        >
          View Certificate
        </a>
      )}
    </div>
  );
}

export default CertificationCard;
