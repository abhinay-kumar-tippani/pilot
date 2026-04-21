import React, { useState, useEffect } from 'react';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const padding = scrolled ? '16px 48px' : '24px 48px';

  return (
    <nav style={{ padding }}>
      <a href="#hero" className="nav-logo">Abhinay.</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#achievements">Awards</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;