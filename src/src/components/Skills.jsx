import React from 'react';

const skillsList = [
  { title: "Programming", desc: "C • Java • Python • JavaScript" },
  { title: "Frontend", desc: "HTML • CSS • Angular • Bootstrap" },
  { title: "Machine Learning", desc: "Data Visualization • Model Building • Preprocessing" },
  { title: "Automation", desc: "UiPath" },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsList.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <h4>{skill.title}</h4>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
