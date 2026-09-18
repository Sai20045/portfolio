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
            <h3>Sai Pradeep S — Resume Preview</h3>
          </div>

          <div className="modal-header-actions">
            <a 
              href={personalInfo.resumePdf} 
              download="Sai_Pradeep_Resume.pdf" 
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
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
            <h1 className="resume-name">SAI PRADEEP S</h1>
            <div className="resume-contact-bar">
              <span><Phone size={12} /> +91-8072677544</span>
              <span><Mail size={12} /> saipradeep2004@gmail.com</span>
              <span><MapPin size={12} /> Chennai, Tamilnadu</span>
            </div>
            <div className="resume-contact-bar" style={{ marginTop: '6px' }}>
              <span><a href="https://github.com/Sai20045" target="_blank" rel="noreferrer"><Github size={12} /> GitHub</a></span>
              <span><a href="https://www.linkedin.com/in/sai-pradeep-00999a282" target="_blank" rel="noreferrer"><Linkedin size={12} /> LinkedIn</a></span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-section">
            <h2 className="resume-section-title">Professional Summary</h2>
            <p className="resume-text">
              Enthusiastic computer science undergraduate with strong foundational skills in software development and programming, Seeking an entry level Full stack developer / AI Engineer role. Proficient in Python, JavaScript ES6+, Django, MySQL, SQL, HTML, CSS and React.JS. Hands-on experience in developing web applications through academic and internship projects. Strong understanding of frontend and backend development, database management, and responsive web design and development. Demonstrates strong analytical, problem-solving, teamwork, and communication skills. Passionate about building scalable, efficient, and user-focused software solutions while continuously learning emerging technologies.
            </p>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            <div className="resume-edu-item">
              <div className="resume-item-header">
                <strong className="item-title">Bachelor of Computer Science and Engineering (2022-2026)</strong>
              </div>
              <div className="item-sub">Agni College of Technology | Anna university</div>
              <div className="resume-text">Computer Science and Engineering with 8.0 CGPA</div>
            </div>

            <div className="resume-edu-item">
              <div className="resume-item-header">
                <strong className="item-title">HSC - Higher Secondary School (2021-2022)</strong>
              </div>
              <div className="item-sub">Government Higher Secondary School (XII - HSC)</div>
            </div>

            <div className="resume-edu-item">
              <div className="resume-item-header">
                <strong className="item-title">SSLC - (2019-2020)</strong>
              </div>
              <div className="item-sub">Government Higher Secondary School (X - SSLC)</div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-section-title">Technical Skills</h2>
            <ul className="resume-bullet-list">
              <li><strong>Programming Languages:</strong> Python, JavaScript ES6+</li>
              <li><strong>Frameworks & Libraries:</strong> Django, Bootstrap, TailwindCSS, React.js</li>
              <li><strong>Web Technologies:</strong> HTML5, CSS3</li>
              <li><strong>Database:</strong> SQL, MySQL</li>
              <li><strong>Tools:</strong> Figma, GitHub, Git, Visual Studio, Antigravity, Vercel</li>
              <li><strong>Soft Skills:</strong> Problem solving, Team Collaboration, Time Management, Communication Skills</li>
            </ul>
          </section>

          {/* Internship */}
          <section className="resume-section">
            <h2 className="resume-section-title">Internship</h2>
            <div className="resume-exp-item">
              <div className="resume-item-header">
                <strong className="item-title">Full Stack Developer Intern / Intern-delivery</strong>
                <span className="item-sub">Mar 2026 - May 2026</span>
              </div>
              <div className="item-sub" style={{ marginBottom: '6px' }}>Virtusa Consulting Services Pvt.Ltd | Remote</div>
              <ul className="resume-bullet-list">
                <li>Developed responsive web applications using Python, JavaScript, Django, SQL, HTML, CSS, Bootstrap and React.js.</li>
                <li>Built and integrated REST APIs for frontend and backend communication.</li>
                <li>Collaborated remotely with development teams using Git and Agile practices.</li>
                <li>Assisted in debugging, testing, and improving application performance.</li>
                <li>Worked on database operations and responsive UI enhancements.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <h2 className="resume-section-title">Projects</h2>
            <div className="resume-project-item">
              <div className="resume-item-header">
                <strong className="item-title">GuardianAI-Unified AI Safety & Recovery System for Mass Gatherings</strong>
                <span className="item-sub">2025</span>
              </div>
              <ul className="resume-bullet-list">
                <li>Developed a real-time AI surveillance system for threat detection using computer vision, face recognition, emotion analysis, and audio processing with a web dashboard</li>
                <li>Built a full-stack application using Python Flask APIs and React.js for live camera monitoring and alert visualization</li>
                <li>Implemented face recognition using InsightFace and object detection using YOLOV8 for suspicious activity detection</li>
                <li>Developed panic detection using DeepFace emotion analysis and Librosa audio processing</li>
                <li>Applied image preprocessing and video frame analysis to improve detection accuracy and reduce false alerts.</li>
                <li>Designed a local edge-processing system for secure real-time AI inference ince and faster response</li>
                <li><strong>Tech Stack:</strong> Python, Flask, React.js, Tailwind CSS, YOLOv8, ArcFace, DeepFace, Librosa, OpenCV, MongoDB</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-section">
            <h2 className="resume-section-title">Certifications</h2>
            <ul className="resume-bullet-list">
              <li>Python full stack - Qspiders Training Institute</li>
              <li>Python3.x programming course - Skill Rack</li>
              <li>Python for Beginners - Udemy</li>
            </ul>
          </section>

          {/* Awards & Recognition */}
          <section className="resume-section">
            <h2 className="resume-section-title">Awards and Recognition</h2>
            <p className="resume-text">
              Finalist Recognition and Certificate of Appreciation at Ujjain Mahakumbh Hackathon 2025, a national-level technology challenge organized by the Department of Science & Technology, Government of Madhya Pradesh, for innovation, technical expertise, and problem-solving abilities displayed during the competition.
            </p>
          </section>

          {/* Declaration */}
          <section className="resume-section">
            <h2 className="resume-section-title">Declaration</h2>
            <p className="resume-text">
              I hereby declare that all the information mentioned above is true and correct to the best of my knowledge. I am confident that my skills and experience will align with the organization’s objectives if given an opportunity.
            </p>
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
