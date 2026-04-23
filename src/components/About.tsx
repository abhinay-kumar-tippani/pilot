import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FRONTEND_SKILLS = [
  'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS',
];

const BACKEND_SKILLS = ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Python', 'Django'];

const TOOLS_SKILLS = ['Git', 'GitHub', 'Netlify', 'Vercel', 'NPM', 'REST APIs'];

const LEARNING_SKILLS = ['Next.js', 'GraphQL', 'PostgreSQL'];

export default function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const bio1Ref = useRef<HTMLParagraphElement>(null);
  const bio2Ref = useRef<HTMLParagraphElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const observe = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    const nodes = [titleRef.current, bio1Ref.current, bio2Ref.current, rightRef.current];
    nodes.forEach((node, i) => {
      if (node) {
        observe(node);
        if (i > 0) {
          node.classList.add(`reveal-delay-${i}`);
        }
      }
    });
  }, [observe]);

  const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
    <div style={{ marginBottom: 'var(--space-6)' }}>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-primary)',
          marginBottom: 'var(--space-3)',
        }}
      >
        {title}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              letterSpacing: '0.08em',
              color: 'var(--color-text-muted)',
              border: '1px solid var(--color-border)',
              padding: 'var(--space-1) var(--space-3)',
              transition: 'all var(--transition-base)',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)';
              (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
              (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="section" style={{ background: 'var(--color-bg2)', borderTop: '1px solid var(--color-border-soft)' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-16)',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Left Column */}
        <div>
          <div className="section-num reveal" ref={titleRef}>01 / About</div>
          <h2 className="section-title reveal" style={{ marginBottom: 'var(--space-8)' }}>
            Crafting Digital
            <br />
            <em>Experiences</em>
          </h2>

          <p
            ref={bio1Ref}
            className="reveal"
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-5)',
            }}
          >
            I'm <strong style={{ color: 'var(--color-text)' }}>Abhinay Kumar Tippani</strong>, a MERN stack web developer based in{' '}
            <strong style={{ color: 'var(--color-text)' }}>Hyderabad, India</strong>. My journey into development started
            with curiosity — I wanted to understand how things on the internet actually worked. That curiosity turned into a
            passion for building things that live on screens.
          </p>

          <p
            ref={bio2Ref}
            className="reveal"
            style={{
              fontSize: 'var(--text-md)',
              fontWeight: 300,
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-dim)',
            }}
          >
            Today, I specialize in building full-stack web applications that are fast, scalable, and actually solve
            real problems. Whether it's a custom business website, a productivity tool, or an AI-powered assistant — I
            care deeply about writing clean code and creating experiences that feel intentional.
          </p>
        </div>

        {/* Right Column — Stats & Skills */}
        <div ref={rightRef} className="reveal reveal-delay-2">
          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: 'var(--color-border-soft)',
              border: '1px solid var(--color-border-soft)',
              marginBottom: 'var(--space-10)',
            }}
          >
            {[
              { num: '15+', label: 'Projects Shipped' },
              { num: '1+', label: 'Years Coding' },
              { num: '100%', label: 'Learning Mode' },
              { num: '600+', label: 'VJIT Students Helped' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'var(--color-bg2)',
                  padding: 'var(--space-6) var(--space-4)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                    fontWeight: 600,
                    lineHeight: 1,
                    color: 'var(--color-primary)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    marginTop: 'var(--space-1)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <SkillGroup title="Frontend" skills={FRONTEND_SKILLS} />
          <SkillGroup title="Backend" skills={BACKEND_SKILLS} />
          <SkillGroup title="Tools & DevOps" skills={TOOLS_SKILLS} />

          {/* Currently Learning */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-3)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  boxShadow: '0 0 6px #4ade80',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              Currently Learning
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              {LEARNING_SKILLS.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    letterSpacing: '0.08em',
                    color: '#4ade80',
                    border: '1px solid rgba(74, 222, 128, 0.3)',
                    padding: 'var(--space-1) var(--space-3)',
                    background: 'rgba(74, 222, 128, 0.05)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-10) !important;
          }
        }
      `}</style>
    </section>
  );
}
