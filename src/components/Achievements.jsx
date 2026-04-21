import React from 'react';
import useReveal from '../hooks/useReveal';

function Achievements() {
  const titleRef = useReveal();

  return (
    <section id="achievements">
      <div className="section-num">03 / Recognition</div>
      <h2 className="section-title reveal" ref={titleRef}>Awards &<br /><em>Achievements</em></h2>
      <div className="achievements-grid">
        <div className="achievements-left">
          <div className="achievement-item">
            <div className="achievement-year">2026</div>
            <div>
              <div className="achievement-title">1st Place — ACM Competition</div>
              <div className="achievement-detail">Secured first position in competition conducted by ACM</div>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-year">2026</div>
            <div>
              <div className="achievement-title">Hackathon Winner — GIG-A-THON</div>
              <div className="achievement-detail">Won the GIG-A-THON hackathon</div>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-year">2025</div>
            <div>
              <div className="achievement-title">Arcade Legend Tier — Google Skills Arcade</div>
              <div className="achievement-detail">95 Arcade points, Season 2 of Google Skills Arcade 2025</div>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-year">2025</div>
            <div>
              <div className="achievement-title">Java & DBMS Certifications — Infosys Springboard</div>
              <div className="achievement-detail">Completed JAVA and DBMS certifications</div>
            </div>
          </div>
        </div>
        <div className="achievements-right">
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <div className="testimonial-text">Replace this with a real testimonial from your first client.</div>
            <div className="testimonial-author">
              <div className="author-avatar">FC</div>
              <div>
                <div className="author-name">Your First Client</div>
                <div className="author-biz">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;