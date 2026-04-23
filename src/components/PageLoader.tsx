import { useState, useEffect } from 'react';

interface PageLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function PageLoader({ onComplete, duration = 800 }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#080808',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        animation: 'loaderFadeOut 0.4s ease forwards',
        animationDelay: `${duration - 200}ms`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-6)',
        }}
      >
        {/* Initials logo */}
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 600,
            color: 'var(--color-text)',
            letterSpacing: '0.02em',
            animation: 'loaderPulse 1.2s ease-in-out infinite',
          }}
        >
          AK
        </div>

        {/* Loading bar */}
        <div
          style={{
            width: '120px',
            height: '2px',
            background: 'var(--color-border-soft)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'var(--color-primary)',
              borderRadius: 'var(--radius-full)',
              animation: 'loaderBar 0.8s ease-in-out forwards',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loaderPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes loaderBar {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes loaderFadeOut {
          from { opacity: 1; }
          to { opacity: 0; pointer-events: none; }
        }
      `}</style>
    </div>
  );
}
