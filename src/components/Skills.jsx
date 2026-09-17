import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Brain, 
  FileCode, 
  Palette, 
  Atom, 
  Network, 
  ArrowRightLeft, 
  Terminal, 
  Layers, 
  Cpu, 
  Zap, 
  Radio, 
  DatabaseZap, 
  HardDrive, 
  FolderTree, 
  GitBranch, 
  Send, 
  Box, 
  Globe, 
  FileText, 
  Users, 
  Repeat, 
  Cloud,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  FileCode,
  Palette,
  Code2,
  Atom,
  Network,
  ArrowRightLeft,
  Terminal,
  Layers,
  Cpu,
  Zap,
  Radio,
  DatabaseZap,
  HardDrive,
  FolderTree,
  GitBranch,
  Github,
  Send,
  Box,
  Globe,
  FileText,
  Users,
  Repeat,
  Cloud,
  Server,
  Database,
  Wrench,
  Brain
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Cpu size={16} />
            <span>Technical Capabilities</span>
          </span>
          <h2 className="section-title">Skills & Tech Stack</h2>
          <p className="section-description">
            Categorized overview of my practical skill set across frontend, backend, database engineering, and modern developer tools.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-tabs">
          <button
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <span>All Categories</span>
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category) => {
            const HeaderIcon = iconMap[category.icon] || Code2;
            return (
              <div key={category.id} className="skill-category-card glass-card">
                <div className="category-header">
                  <div className="category-icon-box">
                    <HeaderIcon size={22} />
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                  <span className="category-count">{category.skills.length} Techs</span>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, idx) => {
                    const SkillIcon = iconMap[skill.icon] || CheckCircle;
                    return (
                      <div key={idx} className="skill-item">
                        <div className="skill-left">
                          <div className="skill-icon-wrapper">
                            <SkillIcon size={16} />
                          </div>
                          <div className="skill-meta">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-exp">{skill.experience}</span>
                          </div>
                        </div>

                        <div className="skill-right">
                          <span className={`skill-level-badge ${skill.level.toLowerCase()}`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 8px 20px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2));
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          font-weight: 600;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }

        .skill-category-card {
          padding: 28px;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
        }

        .category-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(99, 102, 241, 0.15));
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-title {
          font-size: 1.25rem;
          flex: 1;
        }

        .category-count {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          font-weight: 800;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          padding: 3px 10px;
          border-radius: 6px;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.2s ease;
        }

        .skill-item:hover {
          background: rgba(56, 189, 248, 0.1);
          border-color: rgba(56, 189, 248, 0.35);
          transform: translateX(4px);
        }

        .skill-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skill-icon-wrapper {
          color: #38bdf8;
          display: flex;
          align-items: center;
        }

        .skill-meta {
          display: flex;
          flex-direction: column;
        }

        .skill-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .skill-exp {
          font-size: 0.78rem;
          font-weight: 700;
          color: #cbd5e1;
        }

        .skill-level-badge {
          font-size: 0.78rem;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 12px;
          text-transform: capitalize;
          letter-spacing: 0.3px;
        }

        .skill-level-badge.advanced {
          background: rgba(52, 211, 153, 0.2);
          color: #34d399;
          border: 1px solid rgba(52, 211, 153, 0.45);
        }

        .skill-level-badge.proficient {
          background: rgba(56, 189, 248, 0.2);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.45);
        }

        .skill-level-badge.intermediate {
          background: rgba(129, 140, 248, 0.2);
          color: #818cf8;
          border: 1px solid rgba(129, 140, 248, 0.45);
        }

        .skill-level-badge.basics {
          background: rgba(251, 191, 36, 0.2);
          color: #fbbf24;
          border: 1px solid rgba(251, 191, 36, 0.45);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
