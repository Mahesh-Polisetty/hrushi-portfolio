import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-intro">
            <p>
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="contact-info">
            <a href="mailto:mail2hrushikesh24@gmail.com" className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>mail2hrushikesh24@gmail.com</p>
              </div>
            </a>

            <a href="tel:9908395772" className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 9908395772</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/hrushikesh-narayan-polisetty-" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </div>
            </a>

            <a href="https://github.com/Hrushikesh2405" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p>Check out my repos</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

