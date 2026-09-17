import React from 'react';
import { 
  GitCommit, 
  FolderGit2, 
  Code2, 
  Flame, 
  ExternalLink, 
  Sparkles,
  Quote
} from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { codingJourneyData, personalInfo } from '../data/portfolioData';

const CodingJourney = () => {
  // Generate sample commit heat map grid (52 weeks x 7 days simulated activity pattern)
  const generateHeatmapGrid = () => {
    const weeks = [];
    for (let w = 0; w < 32; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Higher activity intensity simulation
        const intensity = Math.floor(Math.random() * 5); 
        days.push(intensity);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const heatmapGrid = generateHeatmapGrid();

  return (
    <section id="coding-journey" className="section journey-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Flame size={16} />
            <span>Developer Consistency</span>
          </span>
          <h2 className="section-title">My Coding Journey</h2>
          <p className="section-description">
            Continuous hands-on practice, open-source building, and daily commitment to refining full-stack software skills.
          </p>
        </div>

        {/* Quote Banner */}
        <div className="quote-card glass-card">
          <Quote size={28} className="quote-icon text-cyan" />
          <p className="quote-text">
            "{codingJourneyData.statement}"
          </p>
          <span className="quote-author">— Sai Pradeep</span>
        </div>

        {/* GitHub Stats Row */}
        <div className="journey-stats-grid">
          {codingJourneyData.stats.map((stat, idx) => (
            <div key={idx} className="journey-stat-card glass-card">
              <div className="stat-val gradient-text">{stat.value}</div>
              <div className="stat-lbl">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GitHub Contribution Graph Widget Mockup */}
        <div className="github-widget-card glass-card">
          <div className="widget-header">
            <div className="widget-left">
              <Github size={24} className="text-cyan" />
              <div>
                <h3 className="widget-title">GitHub Contribution Activity</h3>
                <span className="widget-sub font-mono">@{personalInfo.github.split('/').pop()}</span>
              </div>
            </div>

            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-sm"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Simulated Heatmap */}
          <div className="heatmap-wrapper">
            <div className="heatmap-grid">
              {heatmapGrid.map((week, wIdx) => (
                <div key={wIdx} className="heatmap-week">
                  {week.map((level, dIdx) => (
                    <div 
                      key={dIdx} 
                      className={`heatmap-cell level-${level}`}
                      title={`Activity level ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="heatmap-legend">
            <span>Less</span>
            <div className="legend-cells">
              <div className="heatmap-cell level-0" />
              <div className="heatmap-cell level-1" />
              <div className="heatmap-cell level-2" />
              <div className="heatmap-cell level-3" />
              <div className="heatmap-cell level-4" />
            </div>
            <span>More Commits</span>
          </div>
        </div>
      </div>

      <style>{`
        .journey-section {
          background: rgba(12, 18, 32, 0.4);
        }

        .quote-card {
          max-width: 800px;
          margin: 0 auto 40px auto;
          padding: 32px;
          text-align: center;
          position: relative;
          border-left: 4px solid var(--accent-cyan);
        }

        .quote-icon {
          margin-bottom: 12px;
          opacity: 0.8;
        }

        .quote-text {
          font-size: 1.25rem;
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .quote-author {
          font-size: 0.95rem;
          color: #38bdf8;
          font-weight: 800;
        }

        .journey-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .journey-stat-card {
          padding: 20px;
          text-align: center;
        }

        .stat-val {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .stat-lbl {
          font-size: 0.88rem;
          font-weight: 800;
          color: #cbd5e1;
        }

        .github-widget-card {
          padding: 32px;
        }

        .widget-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
        }

        .widget-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .widget-title {
          font-size: 1.2rem;
        }

        .widget-sub {
          font-size: 0.82rem;
          color: var(--accent-cyan);
        }

        .heatmap-wrapper {
          overflow-x: auto;
          padding-bottom: 12px;
          margin-bottom: 16px;
        }

        .heatmap-grid {
          display: flex;
          gap: 4px;
          justify-content: space-between;
          min-width: 600px;
        }

        .heatmap-week {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .heatmap-cell {
          width: 14px;
          height: 14px;
          border-radius: 3px;
          transition: transform 0.15s ease;
        }

        .heatmap-cell:hover {
          transform: scale(1.3);
          z-index: 2;
        }

        .level-0 { background: rgba(255, 255, 255, 0.04); }
        .level-1 { background: rgba(6, 182, 212, 0.25); }
        .level-2 { background: rgba(6, 182, 212, 0.5); }
        .level-3 { background: rgba(6, 182, 212, 0.75); }
        .level-4 { background: #06b6d4; box-shadow: 0 0 8px #06b6d4; }

        .heatmap-legend {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .legend-cells {
          display: flex;
          gap: 4px;
        }

        @media (max-width: 900px) {
          .journey-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default CodingJourney;
