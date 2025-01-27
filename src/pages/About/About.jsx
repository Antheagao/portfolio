import React from 'react';
import Degree from '../../components/Degree/Degree';
import SkillCard from '../../components/SkillCard/SkillCard';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import CertificationCard from '../../components/CertificationCard/CertificationCard';
import './About.css';


function About() {
  return (
    <div className="about-container">
      {/* Education Section */}
      <section className="about-section">
        <h2 className="section-title">Education</h2>
        <Degree
          school="University of California, Riverside"
          location="Riverside, CA"
          degree="Master of Science in Computer Science"
          gpa="3.5"
          dates="March 2023 – March 2024"
        />
        <Degree
          school="University of California, Riverside"
          location="Riverside, CA"
          degree="Bachelor of Science in Computer Science"
          gpa="3.6"
          dates="September 2021 – March 2023"
        />
        <Degree
          school="Riverside City College"
          location="Riverside, CA"
          degree="Associate of Science in Computer Science"
          gpa="3.2"
          dates="August 2018 – June 2021"
        />
      </section>

      {/* Skills Section */}
      <section className="about-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <SkillCard
            heading="Programming Languages"
            skills={[
              'C++',
              'C',
              'Python',
              'JavaScript',
              'HTML',
              'CSS',
              'SQL (Postgres)',
            ]}
          />
          <SkillCard
            heading="Frameworks & Libraries"
            skills={['jQuery', 'Node.js', 'Express.js', 'React.js']}
          />
          <SkillCard
            heading="Web Development"
            skills={[
              'REST APIs',
              'Authentication',
              'Full-Stack',
              'Frontend',
              'Backend',
            ]}
          />
          <SkillCard
            heading="Technologies & Concepts"
            skills={[
              'Git',
              'Unit Testing',
              'Linux',
              'UNIX',
              'OOP',
              'Parallelism',
              'Distributed Systems',
            ]}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-section">
        <h2 className="section-title">Experience</h2>
        <ExperienceCard
          position="Teaching Assistant – Software Construction"
          location="Riverside, CA"
          organization="University of California, Riverside"
          dates="March 2023 – Dec. 2023"
          responsibilities={[
            'Instructed labs and discussions for 250 students in CS 100 - Software Construction',
            'Taught and applied software engineering principles, including Agile methodologies, Scrum frameworks, and design patterns',
            'Reinforced industry best practices such as test-driven development, Object-Oriented Design, and the SOLID principles to improve code quality and maintainability',
          ]}
        />
      </section>

      {/* Certifications Section */}
      <section className="about-section">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          <CertificationCard
            title="The Complete 2024 Web Development Bootcamp"
            organization="Udemy"
            link="https://www.udemy.com/certificate/UC-8f9ac9fd-32bd-47fc-891d-14e3125e55f4/"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
