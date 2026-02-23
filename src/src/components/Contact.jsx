import React from 'react';
import { FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>

      <div className="contact-card">
        <p>Email: poorani.ragunath@gmail.com</p>
        <p>Location: Chennai, India</p>

        <div className="contact-icons">

          <a
            href="https://www.linkedin.com/in/mohanapoorani-ragunathan-a8aa072a1"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.hackerrank.com/profile/poorani_ragunath"
            target="_blank"
            rel="noreferrer"
          >
            <FaHackerrank />
          </a>

          <a
            href="https://leetcode.com/u/lxy5ztwDjH/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;