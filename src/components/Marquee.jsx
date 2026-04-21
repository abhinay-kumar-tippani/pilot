import React from 'react';

function Marquee() {
  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        <span className="marquee-item">Business Website</span>
        <span className="marquee-item marquee-dot">◆</span>
        <span className="marquee-item">Landing Page</span>
        <span className="marquee-item marquee-dot">◆</span>
        <span className="marquee-item">E-Commerce</span>
        <span className="marquee-item marquee-dot">◆</span>
        <span className="marquee-item">SEO</span>
        <span className="marquee-item marquee-dot">◆</span>
        <span className="marquee-item">Business Website</span>
        <span className="marquee-item marquee-dot">◆</span>
        <span className="marquee-item">Landing Page</span>
        <span className="marquee-item marquee-dot">◆</span>
        <span className="marquee-item">E-Commerce</span>
        <span className="marquee-item marquee-dot">◆</span>
        <span className="marquee-item">SEO</span>
        <span className="marquee-item marquee-dot">◆</span>
      </div>
    </div>
  );
}

export default Marquee;