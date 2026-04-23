import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SERVICES = [
  {
    title: 'Business Website',
    description:
      'A professional, mobile-friendly website for your business — perfect for restaurants, clinics, shops, and service-based businesses looking to establish an online presence.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Landing Page',
    description:
      'A high-converting single page to promote your product, service, or event — built to capture leads and turn visitors into customers fast.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Full Web Application',
    description:
      'A custom web app with authentication, database, real-time features, and API integrations — built for startups and growing businesses ready to scale.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: 'SEO & Performance',
    description:
      'Search engine optimization to help your website rank higher on Google — includes meta tags, speed optimization, structured data, and local SEO setup.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const observe = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (titleRef.current) observe(titleRef.current);
  }, [observe]);

  return (
    <section
      id="services"
      className="section"
      style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border-soft)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div ref={titleRef} className="reveal" style={{ marginBottom: 'var(--space-12)' }}>
          <div className="section-num">05 / Services</div>
          <h2 className="section-title">
            What I
            <br />
            <em>Offer</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'var(--color-border-soft)',
            border: '1px solid var(--color-border-soft)',
          }}
          className="services-grid"
        >
          {SERVICES.map((service, i) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const cardObserve = useIntersectionObserver({ threshold: 0.05 });

            useEffect(() => {
              if (cardRef.current) {
                cardObserve(cardRef.current);
                cardRef.current.classList.add('reveal');
                if (i > 0) cardRef.current.classList.add(`reveal-delay-${Math.min(i, 3)}`);
              }
            }, [cardObserve]);

            return (
              <div
                key={service.title}
                ref={cardRef}
                style={{
                  background: 'var(--color-bg)',
                  padding: 'var(--space-8) var(--space-5)',
                  transition: 'background var(--transition-base)',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--color-bg3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--color-bg)';
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-6)',
                    color: 'var(--color-primary)',
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-3)',
                    lineHeight: 'var(--leading-snug)',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 300,
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
