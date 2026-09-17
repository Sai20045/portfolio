import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  Hash, 
  X,
  FileCheck
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  const [selectedCertModal, setSelectedCertModal] = useState(null);

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Award size={16} />
            <span>Verified Credentials</span>
          </span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-description">
            Industry certifications verifying skills in Python Full Stack Development, Web Technologies, and Database Engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {certificationsData.map((cert, idx) => (
            <div key={idx} className="cert-card glass-card">
              <div className="cert-card-header">
                <div className="cert-badge-box">
                  <ShieldCheck size={24} className="text-cyan" />
                </div>
                {cert.verified && (
                  <span className="badge-glow">
                    <CheckCircle2 size={12} />
                    <span>Verified</span>
                  </span>
                )}
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">{cert.issuer}</div>

              <div className="cert-meta-row">
                <div className="cert-meta-item">
                  <Calendar size={14} className="text-muted" />
                  <span>{cert.date}</span>
                </div>
                <div className="cert-meta-item">
                  <Hash size={14} className="text-muted" />
                  <span className="font-mono">{cert.credentialId}</span>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="cert-skills-tags">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="cert-skill-pill">{skill}</span>
                ))}
              </div>

              <div className="cert-action-row">
                <button
                  onClick={() => setSelectedCertModal(cert)}
                  className="btn btn-secondary btn-sm w-full"
                >
                  <FileCheck size={15} />
                  <span>View Certificate Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCertModal && (
        <div className="modal-backdrop" onClick={() => setSelectedCertModal(null)}>
          <div className="cert-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedCertModal(null)}>
              <X size={20} />
            </button>

            <div className="cert-modal-header">
              <ShieldCheck size={40} className="text-cyan mb-2" />
              <h3>{selectedCertModal.title}</h3>
              <p className="text-muted">{selectedCertModal.issuer}</p>
            </div>

            <div className="cert-modal-body">
              <div className="cert-details-table">
                <div className="cert-table-row">
                  <span className="table-label">Issued By:</span>
                  <strong className="table-value">{selectedCertModal.issuer}</strong>
                </div>
                <div className="cert-table-row">
                  <span className="table-label">Date Completed:</span>
                  <strong className="table-value">{selectedCertModal.date}</strong>
                </div>
                <div className="cert-table-row">
                  <span className="table-label">Credential ID:</span>
                  <strong className="table-value font-mono">{selectedCertModal.credentialId}</strong>
                </div>
                <div className="cert-table-row">
                  <span className="table-label">Verification Status:</span>
                  <span className="badge-glow">
                    <CheckCircle2 size={12} />
                    <span>Verified Authenticated</span>
                  </span>
                </div>
              </div>

              <div className="cert-modal-skills">
                <h4>Skills Validated:</h4>
                <div className="cert-skills-tags">
                  {selectedCertModal.skills.map((skill, i) => (
                    <span key={i} className="cert-skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                onClick={() => setSelectedCertModal(null)} 
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .cert-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
        }

        .cert-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .cert-badge-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .cert-issuer {
          font-size: 0.95rem;
          color: #38bdf8;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .cert-meta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          padding: 10px 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .cert-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 800;
          color: #cbd5e1;
        }

        .cert-skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
          flex: 1;
        }

        .cert-skill-pill {
          font-size: 0.78rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #ffffff;
        }

        .cert-action-row {
          margin-top: auto;
        }

        /* Modal Styles */
        .cert-modal-content {
          width: 100%;
          max-width: 520px;
          background: var(--bg-secondary);
          padding: 32px;
          border-radius: var(--radius-xl);
          position: relative;
        }

        .cert-modal-header {
          text-align: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
        }

        .cert-modal-header h3 {
          font-size: 1.35rem;
        }

        .cert-details-table {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
          background: rgba(255, 255, 255, 0.02);
          padding: 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .cert-table-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.9rem;
        }

        .table-label {
          color: var(--text-muted);
        }

        .table-value {
          color: var(--text-primary);
        }

        .cert-modal-skills h4 {
          font-size: 0.9rem;
          color: var(--accent-cyan);
          margin-bottom: 10px;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
