import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-section-title">Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Book Review App"
          languages={['JavaScript', 'React', 'PostgreSQL', 'Node.js']}
          link="https://github.com/Antheagao/book-notes-app"
          description={[
            'Developed a full-stack web app to manage book review notes, with adding, editing, and deleting books.',
            'Designed a responsive user interface using React and CSS for navigation across pages.',
            'Implemented RESTful APIs using Node.js and Express.js to handle CRUD operations for book data.',
            'Integrated a PostgreSQL database to store and retrieve book information efficiently.'
          ]}
        />
        <ProjectCard
          title="E-commerce Web App"
          languages={['Java', 'React', 'PostgreSQL' , 'Spring Boot',]}
          link="https://github.com/Antheagao/ecommerce-app"
          description={[
            'Developed a full-stack e-commerce platform with user authentication, product management, cart functionality, and cart functionality.',
            'Built a secure REST API using Spring Boot, implementing JWT and Bcrypt for authentication and authorization.',
            'Integrated PostgreSQL for product and user data management.',
            'Created a React.js frontend with features for product listing, cart management, and a checkout system.'
          ]}
        />
        <ProjectCard
          title="Weather API Application"
          languages={['JavaScript', 'Node', 'Express', 'EJS']}
          link="https://github.com/Antheagao/public-api-project"
          description={[
            'Developed a Node.js weather application using Express.js and integrated the WeatherAPI to fetch real-time weather data based on user input or IP geolocation.',
            'Implemented robust error handling and dynamic rendering of weather information on the homepage using EJS templates, ensuring a seamless user experience.',
            'Utilized middleware for static file hosting and URL-encoded form processing, enabling efficient user interactions and data submission.',
          ]}
        />
        <ProjectCard
          title="Authentication secrets"
          languages={['JavaScript', 'React', 'Node.js', 'Express', 'postgreSQL']}
          link="https://github.com/Antheagao/Web_development/tree/main/keeper-app-part-4"
          description={[
            'Developed a secure user authentication system in Node.js using Passport.js, supporting both local login with hashed passwords and OAuth 2.0 integration with Google.',
            'Designed a PostgreSQL-backed database for user management, including registration, login, and storage of user-submitted data such as secrets.',
            'Implemented middleware for session management, enabling persistent user sessions and dynamic rendering of personalized content based on authentication status.',
          ]}
        />
        <ProjectCard
          title="Note Keeper app"
          languages={['JavaScript', 'React']}
          link="https://github.com/Antheagao/Web_development/tree/main/keeper-app-part-4"
          description={[
            'Built a React.js note-taking application with dynamic functionality to create, view, and delete notes using state management with the useState hook.',
            'Designed a modular component-based architecture, including CreateArea, Note, Header, and Footer, to promote reusability and clean code structure.',
            'Implemented efficient note rendering and updates by leveraging array mapping and filtering for real-time content manipulation.',
          ]}
        />
        <ProjectCard
          title="Blog Web App"
          languages={['JavaScript', 'Node', 'Express', 'PostgreSQL', 'EJS']}
          link="https://github.com/Antheagao/Blog-Web-App-Project"
          description={[
            'Designed and implemented a dynamic blog management system using Node.js and Express.js, enabling users to create, edit, view, and delete blog posts.',
            'Utilized EJS templating to render dynamic content, providing seamless updates to the homepage and individual blog pages in response to user actions.',
            'Implemented RESTful routes with robust URL parameter handling and state management to ensure efficient and intuitive blog functionality.',
          ]}
        />
        <ProjectCard
          title="8-Table Puzzle Solver"
          languages={['C++']}
          link="https://github.com/yourusername/8-table-puzzle-solver"
          description={[
            'Developed an AI solver for the 8-Table puzzle problem, utilizing BFS and advanced pruning techniques.',
            'Implemented multiple search strategies, including Misplaced Tile, and Manhattan Distance Heuristic',
            'Optimized performance with the Manhattan Distance Heuristic, reducing expanded nodes by 90%'
          ]}
        />
        <ProjectCard
          title="Ai Shipping Container"
          languages={['Python']}
          link="https://github.com/Antheagao/Shipping_Container_Project"
          description={[
            'Designed and implemented an AI system to provide the user with directions for balancing, loading, and unloading shipping containers on a cargo ship.',
            'Applied the A-Star algorithm for efficient pathfinding and container management, leveraging heuristics to speed up graph searching by up to 4x.',
          ]}
        />
        <ProjectCard
          title="DCHP Server"
          languages={['Python']}
          link="https://github.com/Antheagao/dhcp-server"
          description={[
            'Developed a fully functional Dynamic Host Configuration Protocol (DHCP) server using Python',
            'Designed and implemented core features to support IP address allocation, client identification, and network communication.',
            'Created a dynamic IP address pool with automatic subnet and user-based increments to generate 48 unique IP addresses.',
            'Extracted and processed client MAC addresses and transaction IDs (XID) for personalized communication.',
            'Adhered to DHCP protocol standards by supporting discovery, offer, request, and acknowledgment phases.'
          ]}
        />
        <ProjectCard
          title="Seven Segment Converter"
          languages={['C++']}
          link="https://github.com/Antheagao/seven-segment-converter"
          description={[
            'Developed a multi-threaded solution in C++ to efficiently convert arrays of integers into their seven-segment display representations, leveraging parallel processing to optimize performance',
            'Designed and implemented a worker function architecture, distributing workloads across threads to handle chunks of data based on the machines core count.',
            'Utilized bitwise operations and an optimized lookup table to ensure O(M) complexity for individual integer conversions, where M is the number of digits.',
          ]}
        />
        <ProjectCard
          title="Seven Segment Converter"
          languages={['C++']}
          link="https://github.com/Antheagao/Matrix-Exponentiation"
          description={[
            'Designed and implemented matrix multiplication with tiling in C++ to optimize cache performance, achieving O(n³) complexity while targeting an 8x speedup.',
            'Developed a matrix exponentiation algorithm using exponentiation by squaring (O(log n)) for efficient computation of matrix powers.',
            'Enhanced performance through manual loop unrolling and matrix transposition to maximize data locality and leverage hardware optimizations.',
          ]}
        />
        <ProjectCard
          title="Nine Men in a Trench"
          languages={['Python']}
          link="https://github.com/Antheagao/cs_205_project1"
          description={[
            'Designed and implemented an AI-based solver in Python for the "Nine Men in a Trench" puzzle, leveraging search algorithms like Uniform Cost Search, Misplaced Tile Heuristic, and Manhattan Distance Heuristic.',
            'Built a modular Node-based state representation to efficiently manage puzzle states, enabling operations like child generation, heuristic calculations, and goal state validation.',
            'Optimized performance with priority queues (heapq) to ensure efficient state expansion and real-time tracking of nodes expanded, search depth, and maximum queue size.',
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
