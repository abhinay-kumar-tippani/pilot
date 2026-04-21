import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

function Contact() {
  const titleRef = useReveal();
  const introRef = useReveal();
  const detailsRef = useReveal('reveal-delay-1');

  const phoneRef = useReveal();
  const emailRef = useReveal('reveal-delay-1');
  const locationRef = useReveal('reveal-delay-2');

  const formRef = useReveal('reveal-delay-1');

  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', businessType: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="section-num">05 / Contact</div>
      <div className="contact-grid">
        <div className="contact-left">
          <h2 className="section-title reveal" ref={titleRef}>Let's Build<br /><em>Together</em></h2>
          <p className="contact-intro reveal" ref={introRef}>Ready to give your business the website it deserves? Let's talk — no jargon, just results.</p>
          <div className="contact-details">
            <a href="tel:8074782997" className="contact-item reveal" ref={phoneRef}>
              <div className="contact-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Phone / WhatsApp</div>
                <div className="contact-item-value">+91 8074782997</div>
              </div>
            </a>
            <a href="mailto:tippaniabhinay@gmail.com" className="contact-item reveal" ref={emailRef}>
              <div className="contact-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">tippaniabhinay@gmail.com</div>
              </div>
            </a>
            <div className="contact-item reveal" ref={locationRef}>
              <div className="contact-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">Hyderabad, Telangana</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right reveal reveal-delay-1" ref={formRef}>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                className="form-input"
                id="name"
                name="name"
                type="text"
                placeholder="Business owner name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="businessType">Business Type</label>
              <input
                className="form-input"
                id="businessType"
                name="businessType"
                type="text"
                placeholder="e.g. Restaurant, Clinic, Shop..."
                required
                value={formData.businessType}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone / WhatsApp</label>
              <input
                className="form-input"
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">What do you need?</label>
              <textarea
                className="form-textarea"
                id="message"
                name="message"
                placeholder="Tell me about your business..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="form-submit"
              style={submitted ? { background: '#4a7c59', color: '#e8f5e8' } : {}}
            >
              {submitted ? 'Message Sent ✓' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;