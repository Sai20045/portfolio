import React from 'react';
import { 
  Code2, 
  Mail, 
  ArrowUp, 
  Heart,
  Sparkles,
  Download
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="brand-icon">
                <Code2 size={20} />
              </div>
              <div className="brand-text">
                <span className="brand-name">{personalInfo.name}</span>
                <span className="brand-role">Full Stack Developer</span>
              </div>
            </div>

            <p className="footer-bio">
              Computer Science Engineering Graduate specializing in responsive full-stack web applications, Django REST APIs, React frontend interfaces, and database engineering.
            </p>

            <div className="footer-socials">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-icon-btn" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills & Stack</a></li>
              <li><a href="#projects">Featured Projects</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Career Info</h4>
            <ul className="footer-links-list">
              <li><a href="#experience">Training & Internship</a></li>
              <li><a href="#education">Education & BE CSE</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Get In Touch</a></li>
            </ul>
          </div>

          {/* Action Callout */}
          <div className="footer-cta-col">
            <h4 className="footer-col-title">Hiring Opportunity?</h4>
            <p className="footer-cta-text">
              Looking for a fresher Python Full Stack Developer who can write clean, effective code?
            </p>
            <a
              href={personalInfo.resumePdf}
              download="Sai_Pradeep_Resume.pdf"
              onClick={onOpenResume}
              className="btn btn-primary btn-sm w-full"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © 2026 {personalInfo.name}. All rights reserved. Built with React & Python Focus.
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background: #04070f;
          border-top: 1px solid var(--border-color);
          padding: 80px 0 30px 0;
          position: relative;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-bio {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-col-title {
          font-size: 0.95rem;
          color: #38bdf8;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 20px;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-list a {
          font-size: 0.92rem;
          font-weight: 700;
          color: #cbd5e1;
          transition: color 0.2s ease;
        }

        .footer-links-list a:hover {
          color: #38bdf8;
        }

        .footer-cta-text {
          font-size: 0.92rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 0.88rem;
          font-weight: 700;
          color: #cbd5e1;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #38bdf8;
          font-weight: 800;
          font-size: 0.88rem;
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          transition: all 0.2s ease;
        }

        .back-to-top-btn:hover {
          background: rgba(56, 189, 248, 0.25);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
