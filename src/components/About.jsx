import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Lightbulb, 
  Rocket, 
  CheckCircle2, 
  Award, 
  BrainCircuit, 
  BookOpen 
} from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <GraduationCap size={16} />
            <span>Background & Qualifications</span>
          </span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Passionate BE Computer Science Engineering Graduate & Certified Python Full Stack Developer ready to contribute to real-world software solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Box */}
          <div className="about-main-card glass-card">
            <h3 className="about-card-title">
              Hello! I'm <span className="gradient-text">{personalInfo.name}</span>
            </h3>

            <div className="about-paragraphs">
              <p>
                I am a <strong>Computer Science Engineering (BE CSE)</strong> graduate seeking entry-level opportunities as a <strong>Full Stack Developer | Software Developer | AI Engineer</strong>.
              </p>
              <p>
                Having completed intensive <strong>Python Full Stack Development training</strong> at QSpiders Institute, I have developed a solid practical foundation across frontend design, backend API architecture, database querying, and software engineering tools.
              </p>
              <p>
                My goal is to translate academic fundamentals and hands-on project experience into scalable, reliable, and user-focused web applications while continuously evolving with modern industry standards.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="about-values">
              <h4 className="values-heading">Core Engineering Principles</h4>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon"><Lightbulb size={18} /></div>
                  <div className="value-text">
                    <strong>Problem Solving</strong>
                    <span>Analyzing logic and engineering practical solutions</span>
                  </div>
                </div>

                <div className="value-item">
                  <div className="value-icon"><BrainCircuit size={18} /></div>
                  <div className="value-text">
                    <strong>Learning Mindset</strong>
                    <span>Quick learner adaptable to new frameworks & tools</span>
                  </div>
                </div>

                <div className="value-item">
                  <div className="value-icon"><Rocket size={18} /></div>
                  <div className="value-text">
                    <strong>Real-World Projects</strong>
                    <span>Building functional full-stack applications</span>
                  </div>
                </div>

                <div className="value-item">
                  <div className="value-icon"><Code size={18} /></div>
                  <div className="value-text">
                    <strong>Clean Code</strong>
                    <span>Writing structured, readable, maintainable code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Metrics & Quick Specs */}
          <div className="about-side-column">
            {/* Quick Stat Counter Cards */}
            <div className="stats-grid">
              {statsData.map((stat, idx) => (
                <div key={idx} className="stat-card glass-card">
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-subtext">{stat.subtext}</div>
                </div>
              ))}
            </div>

            {/* Key Highlights Checklist */}
            <div className="highlights-card glass-card">
              <h4 className="highlights-title">
                <Award size={18} className="text-cyan" />
                <span>Key Highlights</span>
              </h4>

              <ul className="highlights-list">
                {personalInfo.highlights.map((item, idx) => (
                  <li key={idx} className="highlight-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: rgba(12, 18, 32, 0.4);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          align-items: stretch;
        }

        .about-main-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .about-card-title {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        .about-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 16px;
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .about-paragraphs strong {
          color: var(--text-primary);
        }

        .values-heading {
          font-size: 1.1rem;
          margin-bottom: 16px;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .value-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
        }

        .value-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .value-text {
          display: flex;
          flex-direction: column;
        }

        .value-text strong {
          font-size: 0.95rem;
          font-weight: 800;
          color: #ffffff;
        }

        .value-text span {
          font-size: 0.82rem;
          font-weight: 700;
          color: #cbd5e1;
          line-height: 1.35;
        }

        .about-side-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .stat-card {
          padding: 24px 18px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 2.2rem;
          font-weight: 800;
          font-family: var(--font-heading);
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 0.92rem;
          font-weight: 800;
          color: #ffffff;
        }

        .stat-subtext {
          font-size: 0.78rem;
          font-weight: 800;
          color: #38bdf8;
          margin-top: 4px;
        }

        .highlights-card {
          padding: 28px;
          flex: 1;
        }

        .highlights-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }

        .check-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 3px;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
          .about-main-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
