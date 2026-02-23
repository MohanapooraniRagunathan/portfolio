import React, { useState } from "react";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certList = [
  {
    title: "NPTEL",
    details: "Certified in Joy of Computing using Python and Introduction to Machine Learning"
  },
  {
    title: "INFOSYS",
    details: "Certified Front-End Web Developer"
  },
  {
    title: "NASSCOM",
    details: "Certified in Python Basics, SQL Fundamentals, Data Structures & Algorithms (Accenture), and Data Acquisition"
  },
  {
    title: "UDEMY",
    details: "Full-Stack Web Development Certification"
  },
  {
    title: "ORACLE",
    details: "Oracle Cloud Infrastructure 2024 – Generative AI Certified"
  },
  {
    title: "UiPath",
    details: "UiPath Automation Starter & Automation Developer Associate Training"
  }
];

  return (
    <section className="section" id="certifications">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {certList.map((cert, index) => (
          <div
            key={index}
            className="cert-card"
            onClick={() => setSelectedCert(cert)}
          >
            🏆 {cert.title}
          </div>
        ))}
      </div>

      {/* 🔥 Popup Modal */}
      {selectedCert && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedCert.title}</h3>
            <p>{selectedCert.details}</p>

            <button
              className="close-btn"
              onClick={() => setSelectedCert(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;