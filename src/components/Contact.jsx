import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please write your message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate async API email send dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <MessageSquare size={16} />
            <span>Get In Touch</span>
          </span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-description">
            I'm currently looking for opportunities where I can learn, contribute, and grow as a software developer. If you're hiring or would like to connect, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-card glass-card">
            <h3 className="info-card-title">Contact Information</h3>
            <p className="info-card-sub">
              Feel free to send an email, give a call, or connect on LinkedIn. I respond promptly!
            </p>

            <div className="contact-details-list">
              {/* Email Item */}
              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <Mail size={20} />
                </div>
                <div className="detail-meta">
                  <span className="detail-label">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="detail-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button 
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="copy-btn"
                  title="Copy email to clipboard"
                >
                  {copiedItem === 'email' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Item */}
              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <Phone size={20} />
                </div>
                <div className="detail-meta">
                  <span className="detail-label">Phone Number</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="detail-value">
                    {personalInfo.phone}
                  </a>
                </div>
                <button 
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="copy-btn"
                  title="Copy phone to clipboard"
                >
                  {copiedItem === 'phone' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Item */}
              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="detail-meta">
                  <span className="detail-label">Current Location</span>
                  <span className="detail-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="contact-social-section">
              <span className="social-label">Find Me Online</span>
              <div className="social-buttons-row">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-card glass-card">
            {submitted ? (
              <div className="form-success-message">
                <div className="success-icon-box">
                  <Check size={32} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Sai Pradeep will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <h3 className="form-title">Send a Direct Message</h3>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && (
                    <span className="error-text">
                      <AlertCircle size={13} />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && (
                    <span className="error-text">
                      <AlertCircle size={13} />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Full Stack Inquiry"
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                  />
                  {errors.subject && (
                    <span className="error-text">
                      <AlertCircle size={13} />
                      <span>{errors.subject}</span>
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Sai, I would like to discuss..."
                    className={`form-input ${errors.message ? 'error' : ''}`}
                  />
                  {errors.message && (
                    <span className="error-text">
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full btn-send"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          align-items: stretch;
        }

        .contact-info-card {
          padding: 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .info-card-title {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .info-card-sub {
          font-size: 0.95rem;
          font-weight: 500;
          color: #cbd5e1;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .detail-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-meta {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .detail-label {
          font-size: 0.78rem;
          font-weight: 800;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          transition: color 0.2s;
        }

        .detail-value:hover {
          color: var(--accent-cyan);
        }

        .copy-btn {
          color: var(--text-muted);
          padding: 6px;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .copy-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
        }

        .contact-social-section {
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
        }

        .social-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .social-buttons-row {
          display: flex;
          gap: 12px;
        }

        /* Contact Form */
        .contact-form-card {
          padding: 36px;
        }

        .form-title {
          font-size: 1.5rem;
          margin-bottom: 24px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          background: rgba(10, 15, 26, 0.8);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }

        .form-input.error {
          border-color: #ef4444;
        }

        .error-text {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #ef4444;
        }

        .form-success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          padding: 40px 20px;
        }

        .success-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.2);
          color: var(--accent-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .form-success-message h3 {
          font-size: 1.4rem;
          margin-bottom: 8px;
        }

        .form-success-message p {
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
