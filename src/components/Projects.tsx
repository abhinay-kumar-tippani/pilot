import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { Project } from '../types';

const FEATURED_PROJECTS: Project[] = [
  {
    id: 'coinpredict',
    title: 'CoinPredict AI',
    type: 'AI Tool',
    description: 'An AI-powered cryptocurrency trading assistant that predicts buy, sell, and hold signals for BTC, ETH, and SOL.',
    problemStatement: 'Retail crypto investors lack access to clear, simple trading signals without paying for expensive subscriptions.',
    role: 'Solo Developer — Full Stack',
    techStack: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'CoinGecko API'],
    challenges: [
      'Integrating real-time market data from multiple crypto APIs without rate limiting',
      'Building a lightweight ML model to classify trading signals with limited historical data',
      'Designing a clean UI that makes complex market data accessible to non-technical users',
    ],
    impact: 'Used by 120+ crypto enthusiasts; featured in a local tech newsletter with 2,000 subscribers.',
    githubUrl: 'https://github.com/abhinay-kumar-tippani/coinpredict-ai',
    liveUrl: 'https://coinpredict.vercel.app',
    featured: true,
    filterTags: ['React', 'Node.js', 'Full Stack', 'AI'],
  },
  {
    id: 'vjit-study',
    title: 'VJIT Study Portal',
    type: 'Education Platform',
    description: 'A comprehensive study portal for VJIT college students with notes, resources, academic tools, and past papers.',
    problemStatement: 'VJIT students lacked a centralized platform to access organized study materials, resulting in wasted time searching across WhatsApp groups and random websites.',
    role: 'Founder & Developer',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    challenges: [
      'Onboarding 600+ students with varying technical comfort levels',
      'Building a file upload and categorization system for professors to contribute content',
      'Ensuring mobile performance for students accessing primarily via low-end smartphones',
    ],
    impact: '600+ active students, 85% reduction in time spent searching for study materials, adopted by 3 departments.',
    githubUrl: 'https://github.com/abhinay-kumar-tippani/vjit-study-portal',
    featured: true,
    filterTags: ['React', 'Node.js', 'Full Stack'],
  },
  {
    id: 'lifeos',
    title: 'LifeOS',
    type: 'Productivity OS',
    description: 'A productivity operating system with daily planning, habit streaks, Pomodoro sessions, and weekly reflection — built for clarity.',
    problemStatement: 'Students and young professionals juggle too many disconnected productivity apps (notes, timers, habit trackers), leading to context switching and dropped habits.',
    role: 'Solo Developer',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    challenges: [
      'Designing a cohesive UI that felt like an OS, not a patchwork of features',
      'Implementing a flexible scheduling system that adapts to user work patterns',
      'Building a streak engine that handles timezone changes and missed days gracefully',
    ],
    impact: 'Beta tested with 45 users; average session length of 18 minutes, 72% weekly retention.',
    githubUrl: 'https://github.com/abhinay-kumar-tippani/lifeos',
    liveUrl: 'https://lifeos.vercel.app',
    featured: true,
    filterTags: ['React', 'TypeScript', 'Node.js', 'Full Stack'],
  },
];

const ALL_PROJECTS: Project[] = [
  ...FEATURED_PROJECTS,
  {
    id: 'focusflow',
    title: 'FocusFlow',
    type: 'Chrome Extension',
    description: 'A Chrome extension for people with dyslexia and ADHD that summarizes web pages into clear, digestible bullet points.',
    problemStatement: '',
    role: 'Developer',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension API'],
    challenges: [],
    impact: '',
    githubUrl: 'https://github.com/abhinay-kumar-tippani/focusflow',
    featured: false,
    filterTags: ['JavaScript'],
  },
  {
    id: 'jarvis',
    title: 'JARVIS',
    type: 'AI Assistant',
    description: 'An AI talking virtual assistant that can chat, answer questions, and automate daily tasks with voice interaction.',
    problemStatement: '',
    role: 'Developer',
    techStack: ['Python', 'Speech Recognition', 'OpenAI API', 'pyttsx3'],
    challenges: [],
    impact: '',
    githubUrl: 'https://github.com/abhinay-kumar-tippani/jarvis',
    featured: false,
    filterTags: ['Python', 'AI'],
  },
];

const FILTER_TABS = ['All', 'React', 'Node.js', 'Full Stack', 'TypeScript', 'AI', 'Python'];

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const observe = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (ref.current) observe(ref.current);
  }, [observe]);

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${index}`}
      style={{
        background: 'var(--color-bg3)',
        border: '1px solid var(--color-border-soft)',
        padding: 'var(--space-8)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color var(--transition-base)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary-dim)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-soft)';
      }}
    >
      {/* Project number watermark */}
      <div
        style={{
          position: 'absolute',
          top: 'var(--space-4)',
          right: 'var(--space-6)',
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          fontWeight: 700,
          color: 'rgba(200,169,110,0.06)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          pointerEvents: 'none',
        }}
      >
        0{index + 1}
      </div>

      {/* Type tag */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-primary)',
          marginBottom: 'var(--space-4)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
        }}
      >
        <span style={{ width: '20px', height: '1px', background: 'var(--color-primary)' }} />
        {project.type}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--text-2xl)',
          fontWeight: 600,
          color: 'var(--color-text)',
          marginBottom: 'var(--space-4)',
          lineHeight: 'var(--leading-snug)',
        }}
      >
        {project.title}
      </h3>

      {/* Problem Statement */}
      {project.problemStatement && (
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.08em',
            color: 'var(--color-primary)',
            marginBottom: 'var(--space-3)',
            textTransform: 'uppercase',
          }}
        >
          Problem: {project.problemStatement}
        </p>
      )}

      <p
        style={{
          fontSize: 'var(--text-base)',
          fontWeight: 300,
          lineHeight: 'var(--leading-relaxed)',
          color: 'var(--color-text-muted)',
          marginBottom: 'var(--space-5)',
          maxWidth: '600px',
        }}
      >
        {project.description}
      </p>

      {/* Role */}
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.08em',
          color: 'var(--color-text-dim)',
          marginBottom: 'var(--space-4)',
        }}
      >
        <span style={{ color: 'var(--color-text-muted)' }}>Role:</span> {project.role}
      </p>

      {/* Tech Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
        {project.techStack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              color: 'var(--color-text-muted)',
              border: '1px solid var(--color-border)',
              padding: 'var(--space-1) var(--space-3)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Key Challenges */}
      {project.challenges.length > 0 && (
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text-dim)',
              marginBottom: 'var(--space-3)',
            }}
          >
            Key Challenges
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {project.challenges.map((challenge, i) => (
              <li
                key={i}
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 300,
                  color: 'var(--color-text-muted)',
                  paddingLeft: 'var(--space-4)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'var(--color-primary-dim)',
                  }}
                />
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Impact */}
      {project.impact && (
        <div
          style={{
            background: 'rgba(200,169,110,0.05)',
            border: '1px solid rgba(200,169,110,0.15)',
            padding: 'var(--space-4)',
            marginBottom: 'var(--space-6)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-2)',
            }}
          >
            Impact
          </div>
          <p style={{ fontSize: 'var(--text-sm)', fontWeight: 300, color: 'var(--color-text-muted)' }}>
            {project.impact}
          </p>
        </div>
      )}

      {/* Links */}
      <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-primary)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            transition: 'gap var(--transition-base)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.gap = 'var(--space-3)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.gap = 'var(--space-2)';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View Source
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              transition: 'gap var(--transition-base)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.gap = 'var(--space-3)';
              (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.gap = 'var(--space-2)';
              (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
            }}
          >
            Live Demo
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const titleRef = useRef<HTMLDivElement>(null);
  const observe = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (titleRef.current) observe(titleRef.current);
  }, [observe]);

  const nonFeatured = ALL_PROJECTS.filter((p) => !p.featured);
  const filteredNonFeatured =
    activeFilter === 'All'
      ? nonFeatured
      : nonFeatured.filter((p) => p.filterTags.includes(activeFilter));

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section" style={{ background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'var(--space-16)',
            flexWrap: 'wrap',
            gap: 'var(--space-6)',
          }}
        >
          <div ref={titleRef} className="reveal">
            <div className="section-num">02 / Work</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Selected
              <br />
              <em>Projects</em>
            </h2>
          </div>
          <button
            onClick={scrollToContact}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              transition: 'color var(--transition-base)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
            }}
          >
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Featured Projects — Case Study Format */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-16)' }}>
          {FEATURED_PROJECTS.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-2)',
            flexWrap: 'wrap',
            marginBottom: 'var(--space-8)',
            paddingBottom: 'var(--space-6)',
            borderBottom: '1px solid var(--color-border-soft)',
          }}
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: 'var(--space-2) var(--space-4)',
                border: '1px solid',
                borderColor: activeFilter === tab ? 'var(--color-primary)' : 'var(--color-border)',
                color: activeFilter === tab ? 'var(--color-primary)' : 'var(--color-text-muted)',
                background: activeFilter === tab ? 'rgba(200,169,110,0.08)' : 'transparent',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Compact Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1px',
            background: 'var(--color-border-soft)',
            border: '1px solid var(--color-border-soft)',
          }}
        >
          {filteredNonFeatured.map((project) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const cardObserve = useIntersectionObserver({ threshold: 0.05 });

            useEffect(() => {
              if (cardRef.current) cardObserve(cardRef.current);
            }, [cardObserve]);

            return (
              <div
                key={project.id}
                ref={cardRef}
                className="reveal"
                style={{
                  background: 'var(--color-bg)',
                  padding: 'var(--space-6)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background var(--transition-base)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--color-bg3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--color-bg)';
                }}
              >
                {/* Hover top line */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--color-primary)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform var(--transition-slow) ease',
                  }}
                  className="project-card-line"
                />

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
                  {project.type}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 300,
                    color: 'var(--color-text-muted)',
                    lineHeight: 'var(--leading-relaxed)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--space-4)' }}>
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        letterSpacing: '0.06em',
                        color: 'var(--color-text-dim)',
                        border: '1px solid var(--color-border-soft)',
                        padding: '3px 8px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-1)',
                  }}
                >
                  View
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
