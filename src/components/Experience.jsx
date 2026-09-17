import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2,
  BadgeCheck
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Briefcase size={16} />
            <span>Career Journey</span>
          </span>
          <h2 className="section-title">Training & Internship Experience</h2>
          <p className="section-description">
            Structured hands-on Python Full Stack Development training and professional internship experience in software engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="experience-timeline">
          {experienceData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline Marker */}
              <div className="timeline-marker">
                <div className="marker-icon-box">
                  <Briefcase size={18} />
                </div>
                <div className="marker-line" />
              </div>

              {/* Card Content */}
              <div className="timeline-card glass-card">
                <div className="card-top-bar">
                  <span className="badge-glow-cyan">{item.badge}</span>
                  <span className="experience-type">{item.type}</span>
                </div>

                <h3 className="experience-role">{item.role}</h3>
                
                <div className="experience-org">
                  <Building2 size={16} className="text-cyan" />
                  <span>{item.organization}</span>
                  <span className="dot-sep">•</span>
                  <MapPin size={14} className="text-muted" />
                  <span className="text-muted">{item.location}</span>
                </div>

                <p className="experience-summary">{item.summary}</p>

                {/* Skills Covered Grid */}
                <div className="skills-covered-box">
                  <h4 className="box-title">Technologies & Core Competencies:</h4>
                  <div className="skills-pills-wrapper">
                    {item.skillsCovered.map((skill, i) => (
                      <span key={i} className="skill-chip">
                        <CheckCircle2 size={12} className="text-emerald" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights List */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="experience-highlights">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="exp-highlight-item">
                        <BadgeCheck size={16} className="text-cyan" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-timeline {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 24px;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .marker-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2));
          border: 2px solid var(--accent-cyan);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
          z-index: 2;
        }

        .marker-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(180deg, var(--accent-cyan), rgba(255, 255, 255, 0.05));
          margin-top: 10px;
        }

        .timeline-card {
          padding: 32px;
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .experience-type {
          font-size: 0.82rem;
          font-weight: 800;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .experience-role {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .experience-org {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .dot-sep {
          color: #38bdf8;
        }

        .experience-summary {
          font-size: 0.98rem;
          font-weight: 500;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .skills-covered-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          padding: 18px;
          margin-bottom: 20px;
        }

        .box-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 12px;
        }

        .skills-pills-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          font-size: 0.82rem;
          font-weight: 700;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .experience-highlights {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }

        .exp-highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        @media (max-width: 640px) {
          .timeline-item {
            grid-template-columns: 1fr;
          }
          .timeline-marker {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
