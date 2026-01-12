
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <a href="#home" className="block">
          <div className="w-12 h-12 bg-[#fec13d] rounded-tr-[20px] rounded-bl-[20px] rounded-tl-[5px] rounded-br-[5px] flex items-center justify-center overflow-hidden transition-transform hover:scale-110 duration-300">
            <span className="text-black font-black text-2xl tracking-tighter">JS</span>
          </div>
        </a>
      </div>
      <div className="hidden md:flex space-x-10 pointer-events-auto items-center mr-4 lg:mr-12">
        <a href="#about" className="text-sm font-bold tracking-tight text-white hover:text-[#fec13d] transition-colors">Services</a>
        <a href="#work" className="text-sm font-bold tracking-tight text-[#a0a0a5] hover:text-white transition-colors">Works</a>
        <a href="#contact" className="text-sm font-bold tracking-tight text-[#a0a0a5] hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
