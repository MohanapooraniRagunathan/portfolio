import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projectList = [
  {
    title: "SmartEdu+",
    role: "AI/ML Developer",
    description:
      "Developed an explainable multi-class machine learning system using Random Forest and SHAP to predict student dropout risk and enable data-driven academic intervention.",
    tech: "Python • Streamlit • Random Forest • SHAP • Pandas",
    github: "https://github.com/MohanapooraniRagunathan/SmartEdu-Student-Dropout-Prediction"
  },
  {
    title: "CulinaryCloud",
    role: "Full Stack Developer",
    description:
      "Architected a scalable full-stack web application with React frontend and FastAPI backend, integrating RESTful APIs for dynamic recipe search and seamless user interaction.",
    tech: "React • FastAPI • JavaScript • REST API",
    github: "https://github.com/MohanapooraniRagunathan/CulinaryCloud"
  },
  {
    title: "AviatorQ",
    role: "Frontend Developer",
    description:
      "Engineered a responsive startup landing website featuring modern UI design, structured component layout, and interactive front-end functionality.",
    tech: "HTML • CSS • JavaScript",
    github: "https://github.com/MohanapooraniRagunathan/Dronehub-website"
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, idx) => (
          <div className="project-card" key={idx}>
            
            <h3>{project.title}</h3>
            
            <div className="project-role">
              {project.role}
            </div>

            <p className="project-description">
              {project.description}
            </p>

            <p className="project-tech">
              {project.tech}
            </p>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon"
              >
                <FaGithub />
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;