import React from 'react';
import useReveal from '../hooks/useReveal';

function About() {
  const titleRef = useReveal();
  const bio1Ref = useReveal('reveal-delay-1');
  const bio2Ref = useReveal('reveal-delay-2');
  const rightRef = useReveal('reveal-delay-2');

  return (
    <section id="about">
      <div className="section-num">01 / About</div>
      <div className="about-grid">
        <div className="about-left">
          <h2 className="section-title reveal" ref={titleRef}>Crafting Digital<br /><em>Experiences</em></h2>
          <p
            className="about-bio reveal"
            ref={bio1Ref}
            dangerouslySetInnerHTML={{ __html: "I'm <strong>Abhinay Kumar Tippani</strong>, a <strong>MERN Stack web developer</strong> based in Hyderabad. I build full-stack web applications that are fast, scalable, and designed to actually work for your business." }}
          />
          <p
            className="about-bio reveal"
            ref={bio2Ref}
            dangerouslySetInnerHTML={{ __html: "I help <strong>local businesses</strong> — from startups to shops — get online presence with custom websites. Whether you need a simple business page or a full e-commerce store, I deliver <strong>clean, modern solutions</strong> without the fluff." }}
          />
        </div>
        <div className="about-right reveal reveal-delay-2" ref={rightRef}>
          <div className="stats-grid">
            <div className="stat-box"><div className="stat-num">15+</div><div className="stat-label">Projects Done</div></div>
            <div className="stat-box"><div className="stat-num">100%</div><div className="stat-label">Dedication</div></div>
            <div className="stat-box"><div className="stat-num">1+</div><div className="stat-label">Years Learning</div></div>
            <div className="stat-box"><div className="stat-num">100%</div><div className="stat-label">Customer Satisfaction</div></div>
          </div>
          <div className="skills-list">
            <span className="skill-tag">C</span>
            <span className="skill-tag">C++</span>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Netlify</span>
            <span className="skill-tag">Django</span>
            <span className="skill-tag">NodeJS</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">TailwindCSS</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;