import React, { useEffect, useRef, useState } from 'react';

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px';
        dotRef.current.style.top = mouseY + 'px';
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top = ringY + 'px';
      }
      animationId = requestAnimationFrame(animateRing);
    };

    const expandCursor = () => {
      if (dotRef.current) dotRef.current.style.width = '16px';
      if (dotRef.current) dotRef.current.style.height = '16px';
      if (ringRef.current) ringRef.current.style.width = '50px';
      if (ringRef.current) ringRef.current.style.height = '50px';
    };

    const shrinkCursor = () => {
      if (dotRef.current) dotRef.current.style.width = '10px';
      if (dotRef.current) dotRef.current.style.height = '10px';
      if (ringRef.current) ringRef.current.style.width = '36px';
      if (ringRef.current) ringRef.current.style.height = '36px';
    };

    const selectors = 'a, button, .project-card, .service-card';
    document.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animateRing);

    const elements = document.querySelectorAll(selectors);
    elements.forEach(el => {
      el.addEventListener('mouseenter', expandCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', expandCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}

export default Cursor;