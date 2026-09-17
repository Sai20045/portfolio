import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Building, 
  GraduationCap, 
  Award,
  FileText
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { personalInfo, experienceData, educationData, certificationsData, projectsData } from '../data/portfolioData';

const ResumeModal = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Action Header */}
        <div className="resume-modal-header no-print">
          <div className="modal-header-title">
            <FileText size={20} className="text-cyan" />
            <h3>Sai Pradeep — Resume Preview</h3>
          </div>

          <div className="modal-header-actions">
            <button onClick={handlePrint} className="btn btn-secondary btn-sm">
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button onClick={onClose} className="modal-close-btn-standalone">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div id="printable-resume" className="resume-document">
          {/* Header */}
          <header className="resume-header">
            <h1 className="resume-name">{personalInfo.name}</h1>
            <div className="resume-role-title">{personalInfo.headline}</div>

            <div className="resume-contact-bar">
              <span><Mail size={12} /> {personalInfo.email}</span>
              <span><Phone size={12} /> {personalInfo.phone}</span>
              <span><MapPin size={12} /> {personalInfo.location}</span>
              <span><Linkedin size={12} /> linkedin.com/in/sai-pradeep-00999a282</span>
              <span><Github size={12} /> github.com/Sai20045</span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-section">
            <h2 className="resume-section-title">Professional Summary</h2>
            <p className="resume-text">
              Ambitious <strong>Computer Science Engineering (BE CSE)</strong> graduate and certified <strong>Python Full Stack Developer</strong> with hands-on expertise in building web applications using Python, Django, REST APIs, JavaScript, React.js, and SQL databases. Strong problem-solving aptitude, passionate about writing clean, maintainable code, and eager to contribute to dynamic software development teams.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-section-title">Technical Skills</h2>
            <div className="resume-skills-grid">
              <div><strong>Languages & Core:</strong> Python, JavaScript (ES6+), HTML5, CSS3, SQL</div>
              <div><strong>Backend Frameworks:</strong> Django, Django REST Framework (DRF), FastAPI, REST APIs</div>
              <div><strong>Frontend Frameworks:</strong> React.js, Axios, REST API Integration</div>
              <div><strong>Databases:</strong> MySQL, SQL, MongoDB</div>
              <div><strong>Tools & DevOps:</strong> Git, GitHub, Postman, Docker, Vercel</div>
              <div><strong>Engineering Concepts:</strong> OOP, REST Architecture, CRUD, Agile Basics, Data Modeling</div>
            </div>
          </section>

          {/* Key Projects */}
          <section className="resume-section">
            <h2 className="resume-section-title">Full Stack Projects</h2>
            {projectsData.map((project) => (
              <div key={project.id} className="resume-project-item">
                <div className="resume-item-header">
                  <strong className="item-title">{project.title}</strong>
                  <span className="item-tech">{project.technologies.join(' • ')}</span>
                </div>
                <p className="resume-text">{project.shortDescription}</p>
                <ul className="resume-bullet-list">
                  {project.keyFeatures.slice(0, 3).map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Experience & Training */}
          <section className="resume-section">
            <h2 className="resume-section-title">Professional Training & Internship</h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="resume-exp-item">
                <div className="resume-item-header">
                  <strong className="item-title">{exp.role}</strong>
                  <span className="item-sub">{exp.organization} | {exp.location}</span>
                </div>
                <p className="resume-text">{exp.summary}</p>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="resume-edu-item">
                <div className="resume-item-header">
                  <strong className="item-title">{edu.degree} — {edu.field}</strong>
                  <span className="item-sub">{edu.year}</span>
                </div>
                <div>{edu.college} — Result: {edu.score}</div>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section className="resume-section">
            <h2 className="resume-section-title">Certifications</h2>
            <ul className="resume-bullet-list">
              {certificationsData.map((cert, idx) => (
                <li key={idx}>
                  <strong>{cert.title}</strong> — {cert.issuer} ({cert.date}) [ID: {cert.credentialId}]
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <style>{`
        .resume-modal-container {
          width: 100%;
          max-width: 850px;
          max-height: 90vh;
          overflow-y: auto;
          background: #ffffff;
          color: #0f172a;
          border-radius: var(--radius-xl);
          padding: 0;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
        }

        .resume-modal-header {
          position: sticky;
          top: 0;
          z-index: 10;
          background: #0f172a;
          color: #ffffff;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-header-title {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .modal-header-title h3 {
          font-size: 1.1rem;
          color: #ffffff;
        }

        .modal-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .modal-close-btn-standalone {
          color: #94a3b8;
          padding: 4px;
        }

        .modal-close-btn-standalone:hover {
          color: #ffffff;
        }

        /* Printable Resume Formatting */
        .resume-document {
          padding: 40px;
          font-family: 'Inter', sans-serif;
          line-height: 1.5;
          color: #1e293b;
          background: #ffffff;
        }

        .resume-header {
          border-bottom: 2px solid #06b6d4;
          padding-bottom: 16px;
          margin-bottom: 24px;
        }

        .resume-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .resume-role-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0284c7;
          margin-bottom: 12px;
        }

        .resume-contact-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.82rem;
          color: #475569;
        }

        .resume-contact-bar span {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .resume-section {
          margin-bottom: 20px;
        }

        .resume-section-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 4px;
          margin-bottom: 10px;
        }

        .resume-text {
          font-size: 0.9rem;
          color: #334155;
          margin-bottom: 8px;
        }

        .resume-skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px 20px;
          font-size: 0.85rem;
          color: #334155;
        }

        .resume-project-item, .resume-exp-item, .resume-edu-item {
          margin-bottom: 12px;
        }

        .resume-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.92rem;
          margin-bottom: 4px;
        }

        .item-title {
          color: #0f172a;
        }

        .item-tech, .item-sub {
          font-size: 0.8rem;
          color: #64748b;
        }

        .resume-bullet-list {
          padding-left: 18px;
          font-size: 0.85rem;
          color: #334155;
        }

        .resume-bullet-list li {
          margin-bottom: 3px;
        }

        @media print {
          .no-print {
            display: none !important;
          }
          body * {
            visibility: hidden;
          }
          #printable-resume, #printable-resume * {
            visibility: visible;
          }
          #printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeModal;
