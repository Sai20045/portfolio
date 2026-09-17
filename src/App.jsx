import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Sai Pradeep | Python Full Stack Developer Portfolio";
  }, []);

  return (
    <div className="portfolio-app">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Page Content */}
      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Printable / Viewable Resume Modal */}
      {isResumeModalOpen && (
        <ResumeModal onClose={() => setIsResumeModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
