import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ACHIEVEMENTS = [
  {
    year: '2026',
    title: '1st Place — ACM Competition',
    detail: 'Secured first position in competition conducted by ACM',
  },
  {
    year: '2026',
    title: 'Hackathon Winner — GIG-A-THON',
    detail: 'Won the GIG-A-THON hackathon organized for innovative student projects',
  },
  {
    year: '2025',
    title: 'Arcade Legend Tier — Google Skills Arcade',
    detail: '95 Arcade points, Season 2 of Google Skills Arcade 2025',
  },
  {
    year: '2025',
    title: 'Java & DBMS Certifications — Infosys Springboard',
    detail: 'Completed JAVA and DBMS certifications through Infosys Springboard',
  },
];

export default function Achievements() {
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const observe = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (titleRef.current) observe(titleRef.current);
    if (listRef.current) {
      observe(listRef.current);
      listRef.current.classList.add('reveal-delay-1');
    }
  }, [observe]);

  return (
    <section
      id="achievements"
      className="section"
      style={{ background: 'var(--color-bg2)', borderTop: '1px solid var(--color-border-soft)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div ref={titleRef} className="reveal" style={{ marginBottom: 'var(--space-12)' }}>
          <div className="section-num">04 / Recognition</div>
          <h2 className="section-title">
            Awards &amp;
            <br />
            <em>Achievements</em>
          </h2>
        </div>

        <div
          ref={listRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {ACHIEVEMENTS.map((achievement, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: 'var(--space-6)',
                padding: 'var(--space-6) 0',
                borderBottom: '1px solid var(--color-border-soft)',
                borderTop: i === 0 ? '1px solid var(--color-border-soft)' : 'none',
                transition: 'border-color var(--transition-base)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary-dim)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-soft)';
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 700,
                  color: 'var(--color-primary-dim)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  paddingTop: '4px',
                }}
              >
                {achievement.year}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 400,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-1)',
                    lineHeight: 'var(--leading-snug)',
                  }}
                >
                  {achievement.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {achievement.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
