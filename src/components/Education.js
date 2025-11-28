import React from 'react';
import './Education.css';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-content">
          <div className="education-card">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            
            <div className="education-details">
              <h3 className="degree-title">Bachelor of Technology</h3>
              <h4 className="major">Electronics and Communication Engineering</h4>
              <p className="institution">Swarnandhra College of Engineering and Technology</p>
              
              <div className="education-meta">
                <div className="meta-item">
                  <FaCalendarAlt />
                  <span>November 2021 - March 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

