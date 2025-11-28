import React from 'react';
import './About.css';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate software engineer with a Bachelor of Technology 
              in Electronics and Communication Engineering from Swarnandhra College of Engineering and Technology.
            </p>
            <p className="about-description">
              Driven towards software engineering with a foundation in coding and logical thinking, 
              I'm interested in developing innovative solutions that enhance user experience. I continuously 
              improve my skills to meet the demands of evolving software practices.
            </p>

            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaCode />
                </div>
                <h3>Clean Code</h3>
                <p>Writing maintainable and scalable code following best practices</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaLightbulb />
                </div>
                <h3>Problem Solver</h3>
                <p>Strong logical thinking and analytical problem-solving skills</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaRocket />
                </div>
                <h3>Innovation</h3>
                <p>Creating innovative solutions that enhance user experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

