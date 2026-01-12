import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';

const CaseCard: React.FC<{ project: CaseStudy; index: number; isExpanded: boolean; onToggle: () => void }> = ({ project, index, isExpanded, onToggle }) => {
  const springTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 1.2
  };

  const caseNumber = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={springTransition}
      className={`relative bg-[#1d1d24] overflow-hidden border transition-all duration-700 ${
        isExpanded ? 'lg:col-span-2 border-[#fec13d]/30 shadow-2xl' : 'border-white/5 hover:border-[#fec13d]/40 group'
      }`}
      onClick={() => !isExpanded && onToggle()}
    >
      {/* Background Technical Grid (Decorative) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <motion.div 
        layout
        className={`flex flex-col ${isExpanded ? 'lg:flex-row min-h-[550px]' : 'h-[440px]'}`}
      >
        {/* Visual Viewport Layer (Left Column when expanded) */}
        <motion.div 
          layout
          className={`relative overflow-hidden bg-[#16161a] flex flex-col ${isExpanded ? 'lg:w-[50%] min-h-[400px]' : 'absolute inset-0'}`}
        >
          {/* Viewport Content */}
          <div className={`relative w-full ${isExpanded ? 'h-[300px] lg:h-[380px] shrink-0' : 'h-full'}`}>
             {/* Viewport Corner Markers */}
            <div className="absolute inset-6 border-white/5 pointer-events-none z-20">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#fec13d]/30" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#fec13d]/30" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#fec13d]/30" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#fec13d]/30" />
            </div>

            <motion.img 
              layout
              initial={false}
              animate={{ 
                scale: isExpanded ? 1.02 : 1,
                filter: isExpanded ? 'grayscale(0) contrast(1)' : 'grayscale(0.8) contrast(1.2) brightness(0.4)'
              }}
              whileHover={!isExpanded ? { scale: 1.05, filter: 'grayscale(0.4) contrast(1.1) brightness(0.5)' } : {}}
              transition={{ duration: 0.8, ease: "circOut" }}
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover lg:object-contain origin-center"
            />
          </div>
          
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 lg:p-10 bg-[#16161a] border-t border-white/5 flex-grow"
            >
              <div className="relative p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                <span className="absolute -top-2.5 left-4 px-2 bg-[#16161a] text-[8px] font-black text-white/30 tracking-widest uppercase">System Outcome</span>
                <p className="text-sm lg:text-base text-white font-medium italic leading-relaxed">
                  "{project.impact}"
                </p>
              </div>
            </motion.div>
          )}

          {!isExpanded && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d24] via-[#1d1d24]/60 to-transparent pointer-events-none z-10" />
          )}

          {/* Technical Tag (Collapsed Only) */}
          {!isExpanded && (
            <div className="absolute top-8 right-8 z-20 flex flex-col items-end space-y-1">
              <span className="text-[9px] font-black text-[#fec13d] uppercase tracking-[0.3em]">Ref: SC-{caseNumber}</span>
              <span className="text-[8px] font-medium text-white/20 uppercase tracking-[0.2em]">Architecture Active</span>
            </div>
          )}
        </motion.div>

        {/* Intelligence Layer (Right Column when expanded) */}
        <motion.div 
          layout
          className={`relative flex flex-col ${isExpanded ? 'lg:w-[50%] bg-[#1a1a20]' : 'absolute inset-0 z-20 pointer-events-none'}`}
        >
          <div className={`flex flex-col h-full ${isExpanded ? 'p-8 lg:p-12' : 'p-8 lg:p-10'}`}>
            
            {/* Header: Identity */}
            <motion.div layout="position" className="mb-6 lg:mb-8">
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-[10px] font-black text-[#fec13d] tracking-[0.4em] uppercase whitespace-nowrap">
                  {project.company}
                </span>
                <div className="h-[1px] w-full bg-white/5" />
              </div>
              
              <motion.h3 
                layout="position"
                className={`font-bold text-white tracking-tight leading-[1.1] ${isExpanded ? 'text-2xl lg:text-3xl' : 'text-xl md:text-2xl drop-shadow-2xl'}`}
              >
                {project.title.split('—').map((part, i) => (
                  <span key={i} className={`block ${i === 1 ? 'text-white/40 font-medium' : ''}`}>
                    {part.trim()}
                  </span>
                ))}
              </motion.h3>
            </motion.div>

            {/* Narrative Content */}
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <p className="text-sm lg:text-base text-[#a0a0a5] leading-relaxed">
                      {project.longDescription || project.summary}
                    </p>
                  </div>

                  {/* Implementation Specs */}
                  <div className="space-y-4">
                    <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#fec13d] flex items-center">
                      Technical Focus <span className="ml-4 h-[1px] flex-grow bg-white/5" />
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {project.keyFocus.map((focus, i) => (
                        <li key={i} className="flex items-start text-xs text-white/70 group/item">
                          <span className="w-1 h-1 mt-1.5 bg-[#fec13d]/50 mr-3 shrink-0" />
                          <span className="group-hover/item:text-white transition-colors">{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack - Positioned above Interaction Row */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 border border-white/5 text-white/30 text-[8px] font-bold uppercase tracking-wider hover:border-[#fec13d]/30 hover:text-white transition-all cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div layout="position" className="mt-auto pointer-events-none">
                  <p className="text-white/60 text-sm leading-relaxed max-w-sm line-clamp-2 drop-shadow-md">
                    {project.summary}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Interaction Row */}
            <div className={`flex items-center justify-between ${isExpanded ? 'mt-auto pt-6 border-t border-white/5' : 'mt-8'}`}>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                className={`flex items-center space-x-6 group/btn pointer-events-auto transition-colors ${isExpanded ? 'text-[#fec13d]' : 'text-white/40 hover:text-white'}`}
              >
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                    {isExpanded ? 'Close' : 'Analyze'}
                  </span>
                  <span className="text-[8px] font-medium uppercase tracking-[0.2em] opacity-40">
                    {isExpanded ? 'System View' : 'Architecture'}
                  </span>
                </div>
                <div className={`h-[1px] bg-current transition-all duration-500 ${isExpanded ? 'w-16' : 'w-8 group-hover/btn:w-16'}`} />
              </button>

              {isExpanded && project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2.5 bg-white/5 border border-white/5 rounded-full text-white hover:bg-[#fec13d] hover:text-black transition-all pointer-events-auto group/link"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Work: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prevId => prevId === id ? null : id);
    if (id !== expandedId) {
      const el = document.getElementById('work');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="work" className="py-32 lg:py-56 bg-[#1d1d24] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#fec13d]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-32 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          <div className="space-y-6">
             <div className="flex items-center space-x-4">
               <div className="w-10 h-[1px] bg-[#fec13d]" />
               <p className="text-[#a0a0a5] uppercase tracking-[0.4em] text-[10px] font-black">Archive</p>
             </div>
             <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight">
               Featured <br />Projects<span className="text-[#fec13d]">.</span>
             </h2>
          </div>
          
          <div className="max-w-md lg:text-right space-y-8">
            <p className="text-[#a0a0a5] text-lg lg:text-xl leading-relaxed font-medium">
              Projects focused on resilient backends and intuitive interfaces for financial markets, education, and high-concurrency scheduling.
            </p>
            <div className="flex items-center lg:justify-end space-x-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Operational Integrity First</span>
            </div>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {CASE_STUDIES.map((project, index) => (
            <CaseCard 
              key={project.id} 
              project={project} 
              index={index} 
              isExpanded={expandedId === project.id}
              onToggle={() => toggleExpand(project.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;