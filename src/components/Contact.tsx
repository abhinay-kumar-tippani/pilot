import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { ContactFormData } from '../types';

const SUBJECT_OPTIONS = [
  { value: 'job-opportunity', label: 'Job Opportunity' },
  { value: 'freelance', label: 'Freelance Project' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'other', label: 'Other' },
];

function Toast({ message, type }: { message: string; type: 'success' | 'error' }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'var(--space-8)',
        right: 'var(--space-8)',
        background: type === 'success' ? '#166534' : '#991b1b',
        color: '#fff',
        padding: 'var(--space-4) var(--space-6)',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        letterSpacing: '0.08em',
        zIndex: 'var(--z-toast)',
        boxShadow: 'var(--shadow-lg)',
        animation: 'slideIn 0.3s ease',
      }}
    >
      {message}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const observe = useIntersectionObserver({ threshold: 0.1 });

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const nodes = [titleRef.current, leftRef.current, rightRef.current];
    nodes.forEach((node, i) => {
      if (node) {
        observe(node);
        if (i > 0) node.classList.add(`reveal-delay-${i}`);
      }
    });
  }, [observe]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name.';
    if (!formData.email.trim()) return 'Please enter your email.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email address.';
    if (!formData.subject) return 'Please select a subject.';
    if (!formData.message.trim()) return 'Please enter a message.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setToast({ message: error, type: 'error' });
      setTimeout(() => setToast(null), 4000);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'     // Replace with your EmailJS public key
      );

      setToast({ message: 'Message sent successfully! I will get back to you within 24 hours.', type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setToast({ message: 'Failed to send message. Please try again or email directly.', type: 'error' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 5000);
    }
  };

  const contactDetails = [
    {
      label: 'Email',
      value: 'tippaniabhinay@gmail.com',
      href: 'mailto:tippaniabhinay@gmail.com',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'Abhinay Kumar Tippani',
      href: 'https://www.linkedin.com/in/abhinay-kumar-tippani/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'abhinay-kumar-tippani',
      href: 'https://github.com/abhinay-kumar-tippani',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: null,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="section"
      style={{ background: 'var(--color-bg2)', borderTop: '1px solid var(--color-border-soft)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-16)',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: Title, intro, contact details */}
          <div ref={leftRef} className="reveal">
            <div ref={titleRef} className="reveal">
              <div className="section-num">05 / Contact</div>
              <h2 className="section-title">
                Let's Build
                <br />
                <em>Together</em>
              </h2>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontSize: 'var(--text-lg)',
                fontWeight: 300,
                color: 'var(--color-text-muted)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-10)',
                maxWidth: '400px',
              }}
            >
              Have a project in mind or just want to say hello? I am always open to discussing new opportunities,
              collaborations, or ideas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4) 0',
                    borderBottom: '1px solid var(--color-border-soft)',
                    textDecoration: detail.href ? 'none' : 'none',
                    cursor: detail.href ? 'pointer' : 'default',
                    transition: 'border-color var(--transition-base)',
                  }}
                  {...(detail.href
                    ? {
                        onClick: () => window.open(detail.href, '_blank'),
                        onMouseEnter: (e: React.MouseEvent) => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary-dim)';
                        },
                        onMouseLeave: (e: React.MouseEvent) => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-soft)';
                        },
                      }
                    : {})}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--color-primary)',
                    }}
                  >
                    {detail.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginBottom: '2px',
                      }}
                    >
                      {detail.label}
                    </div>
                    <div
                      style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: 400,
                        color: 'var(--color-text)',
                      }}
                    >
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time trust signal */}
            <div
              style={{
                marginTop: 'var(--space-8)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.1em',
                color: 'var(--color-text-dim)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Response within 24 hours
            </div>
          </div>

          {/* Right: Contact Form */}
          <div ref={rightRef} className="reveal reveal-delay-1">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border-soft)',
                padding: 'var(--space-8)',
              }}
            >
              {/* Name */}
              <div style={{ marginBottom: 'var(--space-5)' }}>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  style={{
                    width: '100%',
                    background: 'var(--color-bg2)',
                    border: '1px solid var(--color-border-soft)',
                    color: 'var(--color-text)',
                    padding: 'var(--space-3) var(--space-4)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 300,
                    outline: 'none',
                    transition: 'border-color var(--transition-base)',
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--color-primary)';
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--color-border-soft)';
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: 'var(--space-5)' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  style={{
                    width: '100%',
                    background: 'var(--color-bg2)',
                    border: '1px solid var(--color-border-soft)',
                    color: 'var(--color-text)',
                    padding: 'var(--space-3) var(--space-4)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 300,
                    outline: 'none',
                    transition: 'border-color var(--transition-base)',
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--color-primary)';
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--color-border-soft)';
                  }}
                />
              </div>

              {/* Subject */}
              <div style={{ marginBottom: 'var(--space-5)' }}>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    background: 'var(--color-bg2)',
                    border: '1px solid var(--color-border-soft)',
                    color: formData.subject ? 'var(--color-text)' : 'var(--color-text-dim)',
                    padding: 'var(--space-3) var(--space-4)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 300,
                    outline: 'none',
                    transition: 'border-color var(--transition-base)',
                    cursor: 'pointer',
                    appearance: 'none',
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--color-primary)';
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--color-border-soft)';
                  }}
                >
                  <option value="" disabled>
                    Select a subject...
                  </option>
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and budget..."
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    background: 'var(--color-bg2)',
                    border: '1px solid var(--color-border-soft)',
                    color: 'var(--color-text)',
                    padding: 'var(--space-3) var(--space-4)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 300,
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '120px',
                    transition: 'border-color var(--transition-base)',
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--color-primary)';
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--color-border-soft)';
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? 'var(--color-primary-dim)' : 'var(--color-primary)',
                  border: 'none',
                  color: 'var(--color-bg)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: 'var(--space-4)',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background var(--transition-base)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-3)',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    (e.currentTarget as HTMLElement).style.background = 'var(--color-text)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)';
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <div
                      style={{
                        width: '14px',
                        height: '14px',
                        border: '2px solid rgba(8,8,8,0.3)',
                        borderTopColor: 'var(--color-bg)',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} />}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
