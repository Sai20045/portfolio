import React from 'react';
import {
  FolderGit2,
  Mail,
  Download,
  Code2,
  Terminal,
  CheckCircle2,
  Sparkles,
  Database,
  Zap,
  Atom,
  Monitor,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="hero-section">
      {/* Background glow accents */}
      <div className="hero-glow hero-glow-1 animate-pulse-glow" />
      <div className="hero-glow hero-glow-2 animate-pulse-glow" />

      <div className="container hero-container">
        {/* Left Column: Overview & Professional Summary */}
        <div className="hero-content">
          <div className="hero-overview-label">
            <span>ENTRY LEVEL FULL STACK DEVELOPER | AI ENGINEER | SOFTWARE DEVELOPER</span>
          </div>

          <h1 className="hero-title">
            Professional Summary
          </h1>

          <p className="hero-paragraph-1">
            Enthusiastic Computer Science graduate with strong foundations in software development and programming, seeking an entry level <strong>Full Stack Developer | AI Engineer | Software Developer</strong> role.
          </p>

          <p className="hero-paragraph-2">
            Proficient in <strong>Python</strong>, <strong>JavaScript ES6+</strong>, <strong>Django</strong>, <strong>SQL</strong>, <strong>MySQL</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Bootstrap 5</strong>, <strong>React.js</strong>, <strong>FastAPI</strong>, and <strong>REST APIs</strong>, with hands-on project experience in designing and developing software solutions. Passionate about learning new technologies, solving complex problems, and collaborating in team oriented environments to build reliable, scalable, and efficient software applications.
          </p>

          {/* Primary CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary btn-orange-hero">
              <FolderGit2 size={18} />
              <span>View Work</span>
            </a>

            <a href="#contact" className="btn btn-secondary btn-dark-hero">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>

            <a
              href={personalInfo.resumePdf}
              download="Sai_Pradeep_Resume.pdf"
              className="btn btn-outline btn-download-hero"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <div className="hero-stat-val">4+</div>
              <div className="hero-stat-lbl">PROJECTS</div>
            </div>

            <div className="hero-stat-item">
              <div className="hero-stat-val">8.0</div>
              <div className="hero-stat-lbl">CGPA</div>
            </div>

            <div className="hero-stat-item">
              <div className="hero-stat-val">5+</div>
              <div className="hero-stat-lbl">CERTIFICATIONS</div>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Tech Photo Frame */}
        <div className="hero-visual-frame-container">
          <div className="photo-orange-frame">
            {/* Main Portrait Image */}
            <div className="photo-inner-wrapper">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="portrait-photo"
                onError={(e) => {
                  e.target.src = '/profile_alt.jpg';
                }}
              />
            </div>

            {/* Floating Tech Badges on Frame Border */}
            {/* Top Right: Python Badge */}
            <div className="frame-floating-badge badge-top-right animate-float">
              <span className="badge-emoji">🐍</span>
            </div>

            {/* Left Middle: Database Badge */}
            <div className="frame-floating-badge badge-left-mid animate-float-delayed">
              <Database size={16} className="badge-svg text-purple" />
            </div>

            {/* Bottom Left: React Badge */}
            <div className="frame-floating-badge badge-bottom-left animate-float">
              <Atom size={18} className="badge-svg text-cyan" />
            </div>

            {/* Right Middle: FastAPI / Lightning Badge */}
            <div className="frame-floating-badge badge-right-mid animate-float-delayed">
              <Zap size={16} className="badge-svg text-amber" />
            </div>

            {/* Bottom Right: Monitor Badge */}
            <div className="frame-floating-badge badge-bottom-right animate-float">
              <Monitor size={16} className="badge-svg text-blue" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 130px 0 80px 0;
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          background: #040711;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-glow-1 {
          top: 10%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: rgba(249, 115, 22, 0.22);
        }

        .hero-glow-2 {
          bottom: 10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: rgba(56, 189, 248, 0.2);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-overview-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 20px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.35);
          font-size: 0.82rem;
          font-weight: 800;
          color: #38bdf8;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .hero-overview-label:hover {
          transform: translateY(-4px) scale(1.03);
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.28), rgba(249, 115, 22, 0.28));
          border-color: #38bdf8;
          color: #ffffff;
          box-shadow: 0 10px 28px rgba(56, 189, 248, 0.5), 0 0 30px rgba(249, 115, 22, 0.35);
        }

        .hero-title {
          font-size: 3.4rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -1px;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .hero-paragraph-1 {
          font-size: 1.12rem;
          font-weight: 600;
          color: #cbd5e1;
          line-height: 1.75;
          margin-bottom: 18px;
        }

        .hero-paragraph-1 strong {
          color: #ffffff;
          font-weight: 800;
        }

        .hero-paragraph-2 {
          font-size: 1.05rem;
          font-weight: 500;
          color: #cbd5e1;
          line-height: 1.75;
          margin-bottom: 36px;
        }

        .hero-paragraph-2 strong {
          color: #ffffff;
          font-weight: 800;
          background: rgba(249, 115, 22, 0.12);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid rgba(249, 115, 22, 0.25);
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .btn-orange-hero {
          background: linear-gradient(135deg, #f97316, #ea580c) !important;
          color: #ffffff !important;
          border-radius: 12px !important;
          padding: 13px 28px !important;
          font-weight: 800 !important;
          box-shadow: 0 6px 25px rgba(249, 115, 22, 0.45) !important;
        }

        .btn-orange-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.6) !important;
        }

        .btn-dark-hero {
          background: rgba(15, 23, 42, 0.9) !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 12px !important;
          padding: 13px 28px !important;
          font-weight: 800 !important;
        }

        .btn-dark-hero:hover {
          background: rgba(249, 115, 22, 0.18) !important;
          border-color: #f97316 !important;
          color: #f97316 !important;
          transform: translateY(-2px);
        }

        .btn-download-hero {
          border: 1px solid rgba(249, 115, 22, 0.6) !important;
          color: #f97316 !important;
          border-radius: 12px !important;
          padding: 13px 24px !important;
          font-weight: 800 !important;
        }

        .btn-download-hero:hover {
          background: rgba(249, 115, 22, 0.18) !important;
        }

        /* Stats Bar */
        .hero-stats-row {
          display: flex;
          align-items: center;
          gap: 40px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hero-stat-item {
          display: flex;
          flex-direction: column;
        }

        .hero-stat-val {
          font-size: 2.2rem;
          font-weight: 800;
          color: #f97316;
          font-family: var(--font-heading);
          line-height: 1;
          margin-bottom: 4px;
        }

        .hero-stat-lbl {
          font-size: 0.8rem;
          font-weight: 800;
          color: #cbd5e1;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        /* Right Column Photo Frame */
        .hero-visual-frame-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .photo-orange-frame {
          position: relative;
          padding: 12px;
          border-radius: 32px;
          border: 2.5 solid #f97316;
          background: rgba(249, 115, 22, 0.05);
          box-shadow: 0 0 35px rgba(249, 115, 22, 0.3), inset 0 0 20px rgba(249, 115, 22, 0.1);
        }

        .photo-inner-wrapper {
          width: 360px;
          height: 440px;
          border-radius: 24px;
          overflow: hidden;
          background: #090e1a;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
        }

        .portrait-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        /* Floating Tech Badges */
        .frame-floating-badge {
          position: absolute;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #0d1527;
          border: 1.5px solid rgba(249, 115, 22, 0.5);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6), 0 0 12px rgba(249, 115, 22, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }

        .badge-emoji {
          font-size: 1.2rem;
        }

        .badge-top-right {
          top: 15px;
          right: -15px;
        }

        .badge-left-mid {
          top: 40%;
          left: -18px;
        }

        .badge-bottom-left {
          bottom: 60px;
          left: -18px;
        }

        .badge-right-mid {
          top: 50%;
          right: -18px;
        }

        .badge-bottom-right {
          bottom: -15px;
          right: 35%;
        }

        .text-purple { color: #a855f7; }
        .text-cyan { color: #06b6d4; }
        .text-amber { color: #f59e0b; }
        .text-blue { color: #3b82f6; }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .hero-title { font-size: 2.6rem; }
          .photo-inner-wrapper {
            width: 300px;
            height: 380px;
          }
        }

        @media (max-width: 640px) {
          .hero-title { font-size: 2.2rem; }
          .hero-paragraph-1, .hero-paragraph-2 { font-size: 0.98rem; }
          .hero-stats-row { gap: 20px; }
          .photo-inner-wrapper {
            width: 260px;
            height: 330px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
