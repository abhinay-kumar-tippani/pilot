
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhinay-kumar-tippani/' },
    { label: 'GitHub', href: 'https://github.com/abhinay-kumar-tippani' },
    { label: 'Twitter', href: 'https://x.com/abhinay_dev' },
  ];

  return (
    <footer
      style={{
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border-soft)',
        padding: 'var(--space-8) var(--space-10)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'var(--space-6)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--text-xl)',
          fontWeight: 600,
          color: 'var(--color-text)',
        }}
      >
        Abhinay.
      </div>

      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          letterSpacing: '0.1em',
          color: 'var(--color-text-muted)',
        }}
      >
        © {currentYear} · Handcrafted in Hyderabad
      </div>

      <div
        style={{
          display: 'flex',
          gap: 'var(--space-6)',
        }}
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              transition: 'color var(--transition-base)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer {
            flex-direction: column !important;
            text-align: center;
            padding: var(--space-8) var(--space-6) !important;
          }
        }
      `}</style>
    </footer>
  );
}
