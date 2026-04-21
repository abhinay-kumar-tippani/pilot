import React, { useEffect, useState, useRef, useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { TextHoverEffect } from './ui/TextHoverEffect';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 900) setLoaded(true);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const canvas = containerRef.current.querySelector('canvas');
    if (!canvas) return;
    canvas.dispatchEvent(
      new MouseEvent('mousemove', {
        bubbles: true,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
      })
    );
  }, []);

  return (
    <section
      id="hero"
      style={{ overflow: 'hidden', position: 'relative' }}
      onMouseMove={handleMouseMove}
    >
      <div className="spotlight"></div>
      <div className="scroll-line"><span>Scroll</span></div>

      {/* TextHoverEffect — fills the empty upper-left */}
      <div className="hero-watermark">
        <TextHoverEffect text="DEVELOPER" />
      </div>

      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-label">Freelance Web Developer</div>
          <h1 className="hero-name">
            Abhinay<br /><span className="italic">Kumar</span><br />Tippani.
          </h1>
        </div>
        <div className="hero-right">
          <p className="hero-desc">
            I build fast, functional websites for local businesses using the MERN stack — from restaurants to startups.
          </p>
          <a href="#contact" className="hero-cta">
            Let's Work Together
            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-3d" ref={containerRef}>
        {loaded && (
          <Spline
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            style={{ pointerEvents: 'all', width: '100%', height: '100%' }}
          />
        )}
      </div>
    </section>
  );
}

export default Hero;