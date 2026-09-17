import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2, Sparkles, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy logic
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo / Brand */}
        <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="brand-icon">
            <Code2 size={20} className="brand-svg" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-role">Full Stack Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links-desktop">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                {isActive && <span className="nav-indicator" />}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <button 
            onClick={onOpenResume} 
            className="btn btn-primary btn-sm btn-resume-nav"
            aria-label="Download Resume"
          >
            <Download size={15} />
            <span>Download Resume</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="brand-text">
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-role">Full Stack Developer</span>
            </div>
            <button 
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mobile-drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-primary w-full"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 18px 0;
          background: rgba(7, 10, 18, 0.6);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .navbar-scrolled {
          padding: 12px 0;
          background: rgba(7, 10, 18, 0.92);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border-bottom: 1px solid rgba(6, 182, 212, 0.15);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2));
          border: 1px solid rgba(6, 182, 212, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.2);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-primary);
          letter-spacing: -0.3px;
        }

        .brand-role {
          font-size: 0.75rem;
          color: #38bdf8;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .navbar-links-desktop {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-link {
          font-size: 0.92rem;
          font-weight: 700;
          color: #cbd5e1;
          transition: color 0.2s ease;
          position: relative;
          padding: 4px 0;
        }

        .nav-link:hover, .nav-link.active {
          color: #ffffff;
        }

        .nav-indicator {
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-indigo));
          border-radius: 2px;
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-resume-nav {
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.25);
        }

        .mobile-menu-toggle {
          display: none;
          color: var(--text-primary);
          padding: 6px;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(7, 10, 18, 0.96);
          backdrop-filter: blur(20px);
          z-index: 1001;
          transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          justify-content: flex-end;
        }

        .mobile-drawer.open {
          right: 0;
        }

        .mobile-drawer-content {
          width: 85%;
          max-width: 320px;
          height: 100%;
          padding: 24px;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border-left: 1px solid var(--border-color);
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-drawer-close {
          color: var(--text-secondary);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px 0;
          flex: 1;
        }

        .mobile-nav-link {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--accent-cyan);
        }

        .mobile-drawer-footer {
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 900px) {
          .navbar-links-desktop {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
