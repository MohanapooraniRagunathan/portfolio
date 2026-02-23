import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = id => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <ul>
        {navLinks.map(link => (
          <li
            key={link.id}
            className={active === link.id ? 'active' : ''}
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
