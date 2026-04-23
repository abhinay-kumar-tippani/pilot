import { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollSpy';

export default function ScrollToTop() {
  const scrollY = useScrollPosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrollY > 400);
  }, [scrollY]);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        onClick={scrollUp}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: 'var(--space-8)',
          right: 'var(--space-8)',
          width: '44px',
          height: '44px',
          background: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-muted)',
          cursor: 'pointer',
          zIndex: 'var(--z-above)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all var(--transition-base)',
          pointerEvents: visible ? 'auto' : 'none',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)';
          (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
          (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <style>{`
        @media (max-width: 768px) {
          button[aria-label="Scroll to top"] {
            right: var(--space-4);
            bottom: var(--space-4);
          }
        }
      `}</style>
    </>
  );
}
