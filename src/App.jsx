import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#05070A] text-white">
      {/* Sticky navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070A]/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Aditya<span className="text-emerald-400">.</span></a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white/80 border border-white/10 hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
