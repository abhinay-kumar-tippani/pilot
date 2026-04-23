import React from 'react';

const MARQUEE_ITEMS = [
  'Business Website',
  'Landing Page',
  'E-Commerce',
  'SEO Optimization',
  'Web App',
  'Chrome Extension',
  'AI Integration',
  'React Development',
];

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'var(--space-4) 0',
        overflow: 'hidden',
        background: 'var(--color-bg2)',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 20s linear infinite',
        }}
      >
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                padding: '0 var(--space-6)',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: 'var(--color-primary)',
                padding: '0',
                fontSize: '0.5rem',
              }}
            >
              ◆
            </span>
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
