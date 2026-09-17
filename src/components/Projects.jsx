import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Star, 
  Eye, 
  Layers, 
  CheckCircle2, 
  X, 
  Sparkles,
  Code
} from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured Project' },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'Backend', label: 'Backend / APIs' }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'featured') return project.featured;
    return project.category.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <FolderGit2 size={16} />
            <span>Practical Engineering</span>
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Hands-on full-stack web applications built with Python, Django, JavaScript, React, and SQL database integration.
          </p>
        </div>

        {/* Filters */}
        <div className="projects-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.id === 'featured' && <Star size={14} />}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card glass-card ${project.featured ? 'featured-card' : ''}`}
            >
              {/* Image Preview Container */}
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img"
                  onError={(e) => {
                    // Fallback visual if image load is delayed
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-image-fallback" style={{ display: 'none' }}>
                  <Code size={40} className="text-cyan" />
                  <span>{project.title}</span>
                </div>

                {project.featured && (
                  <span className="featured-badge">
                    <Star size={12} />
                    <span>Primary Featured</span>
                  </span>
                )}

                {/* Overlay Quick Actions */}
                <div className="project-overlay">
                  <button 
                    onClick={() => setSelectedProjectModal(project)}
                    className="btn btn-primary btn-sm"
                  >
                    <Eye size={15} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <div className="project-category-tag">{project.category}</div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="project-actions">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary btn-sm"
                    title="View Source Code on GitHub"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>

                  {project.liveUrl && project.liveUrl !== '#' ? (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm"
                      title="Open Live Preview"
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button 
                      onClick={() => setSelectedProjectModal(project)}
                      className="btn btn-outline btn-sm"
                    >
                      <Eye size={15} />
                      <span>Details</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal Popup */}
      {selectedProjectModal && (
        <div className="modal-backdrop" onClick={() => setSelectedProjectModal(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProjectModal(null)}>
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="badge-glow-cyan">{selectedProjectModal.category}</span>
              <h2>{selectedProjectModal.title}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-preview-img-box">
                <img src={selectedProjectModal.image} alt={selectedProjectModal.title} />
              </div>

              <div className="modal-section">
                <h4>Project Overview</h4>
                <p>{selectedProjectModal.fullDescription || selectedProjectModal.shortDescription}</p>
              </div>

              <div className="modal-section">
                <h4>Key Features & Functionality</h4>
                <ul className="modal-features-list">
                  {selectedProjectModal.keyFeatures.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="text-emerald" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Architecture & Tech Stack</h4>
                <p className="architecture-text">{selectedProjectModal.architecture}</p>
                <div className="project-tech-tags" style={{ marginTop: '12px' }}>
                  {selectedProjectModal.technologies.map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a 
                href={selectedProjectModal.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>

              {selectedProjectModal.liveUrl && selectedProjectModal.liveUrl !== '#' && (
                <a 
                  href={selectedProjectModal.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} />
                  <span>Live Application</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          background: rgba(12, 18, 32, 0.4);
        }

        .projects-filters {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.88rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2));
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: var(--radius-xl);
          height: 100%;
        }

        .featured-card {
          border-color: rgba(6, 182, 212, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(6, 182, 212, 0.15);
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          background: #090e1a;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .project-image-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--text-muted);
          font-size: 0.9rem;
          background: #090d18;
        }

        .featured-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 12px;
          background: #38bdf8;
          color: #040711;
          font-size: 0.78rem;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(56, 189, 248, 0.45);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(7, 10, 18, 0.75);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-image-wrapper:hover .project-overlay {
          opacity: 1;
        }

        .project-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-category-tag {
          font-size: 0.78rem;
          font-weight: 800;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 8px;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .project-description {
          font-size: 0.95rem;
          font-weight: 500;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .tech-pill {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #ffffff;
        }

        .project-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
        }

        /* Modal Popup */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(5, 8, 16, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          width: 100%;
          max-width: 680px;
          max-height: 85vh;
          overflow-y: auto;
          background: var(--bg-secondary);
          border-radius: var(--radius-xl);
          padding: 32px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          color: var(--text-muted);
          transition: color 0.2s;
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
        }

        .modal-preview-img-box {
          width: 100%;
          height: 240px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #080c18;
        }

        .modal-preview-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-section h4 {
          font-size: 1rem;
          color: var(--accent-cyan);
          margin-bottom: 8px;
        }

        .modal-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .modal-features-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .architecture-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
        }
      `}</style>
    </section>
  );
};

export default Projects;
