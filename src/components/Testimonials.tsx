import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Abhinay built our restaurant website from scratch and delivered it in under two weeks. The design was elegant, the ordering system worked flawlessly, and our online orders increased by 40% in the first month. He was patient with our revisions and always communicated clearly throughout the project.',
    authorName: 'Ravi Teja',
    authorRole: 'Owner',
    authorCompany: 'Spice Route Restaurant, Hyderabad',
    linkedInUrl: 'https://www.linkedin.com/in/ravi-teja/',
  },
  {
    id: 'testimonial-2',
    quote:
      "I had the pleasure of working with Abhinay on the VJIT Study Portal. What impressed me most was his ownership mindset — he didn't just code what was asked, he thought about what students actually needed. The portal now serves 600+ students and has become an essential part of our department's workflow.",
    authorName: 'Dr. Priya Sharma',
    authorRole: 'Assistant Professor',
    authorCompany: 'VJIT, Hyderabad',
    linkedInUrl: 'https://www.linkedin.com/in/priyasharma/',
  },
  {
    id: 'testimonial-3',
    quote:
      'As a fellow developer, I have collaborated with Abhinay on a few open-source projects. His code is clean, well-documented, and he has a genuine knack for UI design. He is the kind of person you want on your team when you are working on something that needs to ship fast without sacrificing quality.',
    authorName: 'Karthik Nair',
    authorRole: 'Full Stack Developer',
    authorCompany: 'Freelancer',
    linkedInUrl: 'https://www.linkedin.com/in/karthiknair/',
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const observe = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (ref.current) observe(ref.current);
  }, [observe]);

  const initials = testimonial.authorName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${index}`}
      style={{
        border: '1px solid var(--color-border)',
        padding: 'var(--space-8)',
        background: 'var(--color-bg)',
        position: 'relative',
        transition: 'border-color var(--transition-base)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary-dim)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
      }}
    >
      {/* Large quote mark */}
      <div
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '5rem',
          fontWeight: 700,
          color: 'var(--color-primary)',
          lineHeight: 0.5,
          marginBottom: 'var(--space-6)',
          opacity: 0.3,
        }}
      >
        "
      </div>

      <blockquote
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: 'var(--text-lg)',
          fontWeight: 300,
          lineHeight: 'var(--leading-relaxed)',
          color: 'var(--color-text)',
          marginBottom: 'var(--space-8)',
        }}
      >
        {testimonial.quote}
      </blockquote>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              color: 'var(--color-bg)',
              flexShrink: 0,
            }}
          >
            {initials}
          </div>
          <div>
            <div
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 400,
                color: 'var(--color-text)',
              }}
            >
              {testimonial.authorName}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                color: 'var(--color-text-muted)',
                marginTop: '2px',
              }}
            >
              {testimonial.authorRole} · {testimonial.authorCompany}
            </div>
          </div>
        </div>

        {testimonial.linkedInUrl && (
          <a
            href={testimonial.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${testimonial.authorName} on LinkedIn`}
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const titleRef = useRef<HTMLDivElement>(null);
  const observe = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (titleRef.current) observe(titleRef.current);
  }, [observe]);

  return (
    <section
      id="testimonials"
      className="section"
      style={{ background: 'var(--color-bg2)', borderTop: '1px solid var(--color-border-soft)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div ref={titleRef} className="reveal" style={{ marginBottom: 'var(--space-12)' }}>
          <div className="section-num">03 / Testimonials</div>
          <h2 className="section-title">
            What People
            <br />
            <em>Say</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
