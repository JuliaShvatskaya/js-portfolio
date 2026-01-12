
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#1d1d24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[#a0a0a5] text-xs font-bold uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} Julia Shvatskaya. Ukrainian Built 🇺🇦</p>
        <div className="mt-8 md:mt-0 flex items-center space-x-12">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
          <a href="mailto:jshvatskaya@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;