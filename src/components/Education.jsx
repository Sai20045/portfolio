import React from 'react';
import { 
  GraduationCap, 
  Building, 
  Calendar, 
  Award, 
  CheckCircle2, 
  BookOpen,
  Sparkles
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <GraduationCap size={16} />
            <span>Academic Background</span>
          </span>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Computer Science & Engineering degree foundation providing core theoretical and practical software principles.
          </p>
        </div>

        <div className="education-container">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card glass-card">
              <div className="edu-badge-row">
                <span className="badge-glow-cyan">{edu.status}</span>
                <span className="edu-field-badge">{edu.field}</span>
              </div>

              <h3 className="degree-title">{edu.degree}</h3>

              <div className="edu-institution-row">
                <Building size={18} className="text-cyan" />
                <span className="institution-label">Institution:</span>
                <strong className="institution-value">{edu.college}</strong>
              </div>

              <div className="edu-meta-grid">
                <div className="edu-meta-item">
                  <Calendar size={16} className="text-indigo" />
                  <div>
                    <span className="meta-label">Graduation Year</span>
                    <strong className="meta-value">{edu.year}</strong>
                  </div>
                </div>

                {edu.score && (
                  <div className="edu-meta-item">
                    <Award size={16} className="text-emerald" />
                    <div>
                      <span className="meta-label">Academic Result</span>
                      <strong className="meta-value">{edu.score}</strong>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          background: rgba(12, 18, 32, 0.4);
        }

        .education-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .education-card {
          padding: 36px;
        }

        .edu-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .edu-field-badge {
          font-size: 0.82rem;
          color: #38bdf8;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .degree-title {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .edu-institution-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.14);
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .institution-label {
          font-size: 0.82rem;
          font-weight: 800;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .institution-value {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .edu-meta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .edu-meta-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .meta-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 800;
          color: #cbd5e1;
          margin-bottom: 2px;
          text-transform: uppercase;
        }

        .meta-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .edu-meta-grid {
            grid-template-columns: 1fr;
          }
          .education-card {
            padding: 24px;
          }
          .degree-title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
