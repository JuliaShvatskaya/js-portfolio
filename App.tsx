
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import EducationLanguages from './components/EducationLanguages';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Philosophy />
        <EducationLanguages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
