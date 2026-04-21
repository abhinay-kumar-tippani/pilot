import React from 'react';
import useReveal from '../hooks/useReveal';

function Projects() {
  const card1Ref = useReveal();
  const card2Ref = useReveal('reveal-delay-1');
  const card3Ref = useReveal('reveal-delay-2');
  const card4Ref = useReveal();
  const card5Ref = useReveal('reveal-delay-1');
  const titleRef = useReveal();

  return (
    <section id="projects">
      <div className="projects-header">
        <div>
          <div className="section-num">02 / Work</div>
          <h2 className="section-title reveal" ref={titleRef}>Selected<br /><em>Projects</em></h2>
        </div>
        <a href="#contact" className="view-all">
          Start Your Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div className="projects-grid">
        <div className="project-card reveal" ref={card1Ref}>
          <div className="project-num">01</div>
          <div className="project-type">AI Tool</div>
          <div className="project-name">CoinPredict AI</div>
          <div className="project-desc">An AI-powered cryptocurrency trading assistant that predicts buy, sell, and hold signals for BTC, ETH, and SOL.</div>
          <div className="project-tech">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">AI</span>
          </div>
          <a href="#" className="project-link">
            View Project
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="project-card reveal reveal-delay-1" ref={card2Ref}>
          <div className="project-num">02</div>
          <div className="project-type">Chrome Extension</div>
          <div className="project-name">FocusFlow</div>
          <div className="project-desc">A Chrome extension built for people with dyslexia and ADHD — summarizes web pages into clear, digestible bullet points.</div>
          <div className="project-tech">
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">CSS</span>
            <span className="tech-tag">Chrome API</span>
          </div>
          <a href="#" className="project-link">
            View Project
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="project-card reveal reveal-delay-2" ref={card3Ref}>
          <div className="project-num">03</div>
          <div className="project-type">Productivity</div>
          <div className="project-name">LifeOS</div>
          <div className="project-desc">A productivity operating system with daily planning, streak building, Pomodoro sessions, and reflection — built for clarity.</div>
          <div className="project-tech">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TailwindCSS</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express</span>
          </div>
          <a href="#" className="project-link">
            View Project
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="project-card reveal" ref={card4Ref}>
          <div className="project-num">04</div>
          <div className="project-type">Education</div>
          <div className="project-name">VJIT Study Portal</div>
          <div className="project-desc">A comprehensive study portal for VJIT students, serving over 600+ students with notes, resources, and academic tools.</div>
          <div className="project-tech">
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">CSS</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">MongoDB</span>
          </div>
          <a href="#" className="project-link">
            View Project
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="project-card reveal reveal-delay-1" ref={card5Ref}>
          <div className="project-num">05</div>
          <div className="project-type">AI Assistant</div>
          <div className="project-name">JARVIS</div>
          <div className="project-desc">An AI talking virtual assistant that can chat, answer questions, and help automate daily tasks with voice interaction.</div>
          <div className="project-tech">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">AI</span>
            <span className="tech-tag">Speech Recognition</span>
          </div>
          <a href="#" className="project-link">
            View Project
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;