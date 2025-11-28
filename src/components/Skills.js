import React from 'react';
import './Skills.css';
import { 
  FaHtml5, FaCss3Alt, FaPython, FaReact, FaGitAlt, 
  FaAws, FaBootstrap, FaDatabase 
} from 'react-icons/fa';
import { 
  SiJavascript, SiVisualstudio 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
        { name: 'React JS', icon: <FaReact />, color: '#61DAFB' }
      ]
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'VS Code', icon: <SiVisualstudio />, color: '#007ACC' },
        { name: 'ChatGPT', icon: '🤖', color: '#10a37f' }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      skills: [
        { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' }
      ]
    },
    {
      title: 'Cloud',
      skills: [
        { name: 'AWS S3', icon: <FaAws />, color: '#FF9900' },
        { name: 'CloudFront', icon: <FaAws />, color: '#FF9900' }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

