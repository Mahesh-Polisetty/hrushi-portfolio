import React from 'react';
import './Projects.css';
import { FaReact, FaHtml5, FaAws, FaExternalLinkAlt } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'Movie Ticket Booking Platform',
      description: 'Developed a responsive movie ticket booking platform replicating BookMyShow\'s core features using React.js, delivering a seamless multi-device experience with Service Workers.',
      features: [
        'Implemented dynamic routing for individual movie pages with consistent UI and custom CSS styling',
        'Designed interactive movie listings with event sections and horizontal card layouts for engaging user experience',
        'Utilized reusable component architecture to optimize code structure, scalability, and maintainability'
      ],
      technologies: ['React.js', 'CSS', 'Service Workers', 'Responsive Design'],
      icon: <FaReact />,
      gradient: 'gradient-1'
    },
    {
      title: 'SkillBux - Finance Website',
      description: 'Built a finance-focused website using Woogie AI to create responsive layouts and optimize content delivery.',
      features: [
        'Created user personas using User Persona.dev to guide design choices and feature prioritization',
        'Developed cohesive brand identity leveraging NameIx for naming and Sologo for logo design',
        'Optimized for responsive layouts and content delivery'
      ],
      technologies: ['Woogie AI', 'User Persona.dev', 'NameIx', 'Sologo'],
      icon: <FaHtml5 />,
      gradient: 'gradient-2'
    },
    {
      title: 'Responsive Website with AWS',
      description: 'Built a responsive and user-friendly website using HTML, CSS, and Bootstrap to ensure optimal usability across devices.',
      features: [
        'Implemented interactive UI components including dropdowns, modals, and buttons to enhance functionality',
        'Deployed on AWS infrastructure, leveraging Amazon S3 for hosting and CloudFront for content delivery',
        'Conducted cross-browser testing to ensure compatibility and consistent performance across major web browsers'
      ],
      technologies: ['HTML', 'CSS', 'Bootstrap', 'AWS S3', 'CloudFront'],
      icon: <FaAws />,
      gradient: 'gradient-3'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className={`project-header ${project.gradient}`}>
                <div className="project-icon">
                  {project.icon}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

