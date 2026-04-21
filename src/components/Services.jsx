import React from 'react';
import useReveal from '../hooks/useReveal';

function Services() {
  const titleRef = useReveal();

  return (
    <section id="services">
      <div className="section-num">04 / Services</div>
      <h2 className="section-title reveal" ref={titleRef}>What I <em>Offer</em></h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div className="service-name">Business Website</div>
          <div className="service-desc">A professional, mobile-friendly website for your business — perfect for restaurants, clinics, shops, and service-based businesses looking to go online.</div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <div className="service-name">Landing Page</div>
          <div className="service-desc">A high-converting single page to promote your product, service, or event — built to capture leads and turn visitors into customers fast.</div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
          </div>
          <div className="service-name">E-Commerce</div>
          <div className="service-desc">A custom online store with product listings, cart, and checkout — ideal for boutiques, resellers, and small businesses ready to sell online.</div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="service-name">SEO</div>
          <div className="service-desc">Search engine optimization to help your website rank higher on Google — includes meta tags, speed optimization, and local SEO setup for your city.</div>
        </div>
      </div>
    </section>
  );
}

export default Services;