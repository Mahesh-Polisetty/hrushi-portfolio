import React from 'react';
import './Certifications.css';
import { FaCertificate, FaAward } from 'react-icons/fa';
import { SiIbm, SiGoogle, SiMicrosoft } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      title: 'Web Development Fundamentals',
      issuer: 'IBM SkillsBuild',
      icon: <SiIbm />,
      color: '#0062ff'
    },
    {
      title: 'Foundations In Generative AI',
      issuer: 'IBM SkillsBuild',
      icon: <SiIbm />,
      color: '#0062ff'
    },
    {
      title: 'Prompt Design in Vertex AI',
      issuer: 'Google Cloud',
      icon: <SiGoogle />,
      color: '#4285f4'
    },
    {
      title: 'Applying AI Principles with Google Cloud',
      issuer: 'Google',
      icon: <SiGoogle />,
      color: '#4285f4'
    },
    {
      title: 'Scale AI in Your Organization',
      issuer: 'Microsoft',
      icon: <SiMicrosoft />,
      color: '#00a4ef'
    }
  ];

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-badge">
                <FaAward />
              </div>
              
              <div className="cert-icon" style={{ color: cert.color }}>
                {cert.icon}
              </div>
              
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">by {cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

