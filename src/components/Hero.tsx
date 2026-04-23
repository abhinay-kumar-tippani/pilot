import { useState, useEffect, useRef } from 'react';

const TYPEWRITER_WORDS = [
  'I build scalable React apps that ship fast and look great.',
  'MERN stack developer crafting clean, user-focused interfaces.',
  'Turning complex problems into simple, elegant solutions.',
];

function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentWord.length) {
            setText(currentWord.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (text.length > 0) {
            setText(text.slice(0, -1));
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span>
      {text}
      <span style={{ opacity: 1, animation: 'blink 1s step-end infinite' }}>|</span>
    </span>
  );
}

function MobileHeroGraphic() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '60%',
        height: '40%',
        opacity: 0.15,
        pointerEvents: 'none',
      }}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" stroke="var(--color-primary)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" stroke="var(--color-primary)" strokeWidth="0.5" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="40" stroke="var(--color-primary)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="8" fill="var(--color-primary)" opacity="0.6" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="var(--color-primary)" strokeWidth="0.3" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="var(--color-primary)" strokeWidth="0.3" />
      </svg>
    </div>
  );
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let mx = -9999;
    let my = -9999;

    // Use window dimensions — reliable before layout paint
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const N = 90;

    type Particle = { x: number; y: number; vx: number; vy: number; r: number };
    const pts: Particle[] = [];
    for (let i = 0; i < N; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 1.8 + 0.7,
      });
    }

    // Listen on window so cursor works across the whole page
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onLeave = () => { mx = -9999; my = -9999; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    const CONNECT = 130;
    const REPEL = 120;

    const draw = () => {
      // clearRect keeps canvas transparent — hero CSS gradient shows through
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < N; i++) {
        const p = pts[i];

        const dx = p.x - mx;
        const dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < REPEL && d > 0) {
          p.vx += (dx / d) * 0.5;
          p.vy += (dy / d) * 0.5;
        }

        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Gold dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = '#C4A35A';
        ctx.fill();

        // Connection lines
        for (let j = i + 1; j < N; j++) {
          const q = pts[j];
          const dx2 = p.x - q.x;
          const dy2 = p.y - q.y;
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist < CONNECT) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(196,163,90,${(1 - dist / CONNECT) * 0.22})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 var(--space-10) var(--space-16)',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 70% 50%, #1C1810 0%, #111009 60%, #0D0C08 100%)',
      }}
    >
      {/* Warm glow accent */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle 500px at 30% 60%, rgba(200,169,110,0.06), transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Gold particles desktop / SVG graphic mobile */}
      {!isMobile ? <ParticleField /> : <MobileHeroGraphic />}

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 'var(--space-8)',
          right: 'var(--space-10)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-2)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '64px',
            background: 'linear-gradient(to bottom, transparent, var(--color-primary-dim))',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      {/* Hero Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: 'var(--space-8)',
          alignItems: 'flex-end',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Left: Name */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-6)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
            }}
          >
            <span style={{ width: '32px', height: '1px', background: 'var(--color-primary)' }} />
            React Developer
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 8vw, 6.875rem)',
              fontWeight: 400,
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              color: 'var(--color-text)',
              marginBottom: 'var(--space-8)',
            }}
          >
            Abhinay
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>Kumar</em>
            <br />
            Tippani.
          </h1>
        </div>

        {/* Right: Tagline, CTAs, Socials */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            gap: 'var(--space-8)',
            paddingBottom: 'var(--space-2)',
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-muted)',
              maxWidth: '360px',
              textAlign: isMobile ? 'left' : 'right',
            }}
          >
            <Typewriter words={TYPEWRITER_WORDS} />
          </p>

          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <button
              onClick={scrollToProjects}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-bg)',
                background: 'var(--color-primary)',
                padding: 'var(--space-4) var(--space-6)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-text)';
                (e.currentTarget as HTMLElement).style.gap = 'var(--space-5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)';
                (e.currentTarget as HTMLElement).style.gap = 'var(--space-3)';
              }}
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text)',
                background: 'transparent',
                padding: 'var(--space-4) var(--space-6)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-text)';
              }}
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
            {[
              {
                label: 'GitHub',
                href: 'https://github.com/abhinay-kumar-tippani',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/abhinay-kumar-tippani/',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: 'Twitter',
                href: 'https://x.com/abhinay_dev',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  color: 'var(--color-text-muted)',
                  transition: 'color var(--transition-base)',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '10%',
          background: 'linear-gradient(to bottom, transparent, var(--color-bg))',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}