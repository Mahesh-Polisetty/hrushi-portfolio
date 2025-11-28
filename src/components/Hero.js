import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-subtitle">Hello, I'm</div>
          <h1 className="hero-title">
            Hrushikesh Polisetty
          </h1>
          <div className="hero-tagline">
            <span className="typing-text">Software Engineer</span>
          </div>
          <p className="hero-description">
            Driven towards software engineering with a foundation in coding and logical thinking.
            Interested in developing innovative solutions that enhance user experience.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="https://drive.google.com/file/d/1lNujwlzm_4ukJFX8-rwyTd6yGsxstBwq/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaDownload style={{ marginRight: '8px' }} />
              Download Resume
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Hrushikesh2405" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hrushikesh-narayan-polisetty-" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:mail2hrushikesh24@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
            <a href="tel:9908395772" className="social-link">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;

