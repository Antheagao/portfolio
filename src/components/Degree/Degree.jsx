import React from 'react';
import './Degree.css';

function Degree({ school, location, degree, gpa, dates }) {
  return (
    <div className="degree">
      <h3 className="degree-title">
        {school} – {location}
      </h3>
      <p className="degree-details">
        <strong>{degree}</strong> {gpa && `(GPA: ${gpa})`}
        <br />
        {dates}
      </p>
    </div>
  );
}

export default Degree;
