import React from 'react';
import './Footer.css';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              Designed & Built by <span className="highlight">Hrushikesh Polisetty</span>
            </p>
          </div>

          <div className="footer-social">
            <a href="https://github.com/Hrushikesh2405" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hrushikesh-narayan-polisetty-" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaLinkedin />
            </a>
            <a href="mailto:mail2hrushikesh24@gmail.com" className="footer-link">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hrushikesh Polisetty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

