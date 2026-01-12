
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#1d1d24] overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full px-8 lg:px-16 pt-24 lg:pt-20 pb-12 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* Top/Left: Name & Socials */}
          <div className="lg:col-span-5 self-center z-20 pointer-events-none">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-8 lg:space-y-12 pointer-events-auto"
            >
              <div>
                <motion.h1 
                  variants={itemVariants}
                  className="text-[clamp(3rem,10vw,110px)] font-bold text-white leading-[0.88] tracking-tighter drop-shadow-2xl"
                >
                  Julia<br />Shvatskaya<span className="text-[#fec13d]">.</span>
                </motion.h1>
                <motion.div 
                  variants={itemVariants}
                  className="w-12 lg:w-16 h-1.5 bg-[#fec13d] mt-6 lg:mt-8"
                />
              </div>

              {/* Social Icons - visible on mobile right after name */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-6 text-[#a0a0a5]"
              >
                <a href="https://kids-flashcards.com/" className="hover:text-white transition-colors" aria-label="Website">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </a>
                <a href="https://www.facebook.com/julia.sh.925" className="hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/julia-shvatskaya-a6271580/" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Middle: Image - Height reduced for mobile/tablet to keep text above fold */}
          <div className="lg:col-span-3 flex justify-center lg:order-none lg:-ml-24 z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[480px]"
            >
              <div className="h-[40vh] md:h-[45vh] lg:h-auto lg:aspect-[3.2/4] overflow-hidden rounded-sm">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczME_222qpGmdIAjt8k9B6W70NSkweMv4KmTyqysXvx6jMzgVjM3hal56KFI4B-EnMRpXqw-TfYTuSIf44_kHqKQs23GLnqS2PyGLw1efZTbhLdFwTTSdYwsmUAd5y5ZpZx2a7OyFPgUDxt8w2uTvQDS=w656-h913-s-no-gm?authuser=0" 
                  alt="Julia Shvatskaya" 
                  className="w-full h-full object-contain lg:object-cover grayscale brightness-75 contrast-110 translate-x-4 lg:translate-x-0"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom/Right: Intro Column */}
          <div className="lg:col-span-4 lg:pl-12 self-center z-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-6 lg:space-y-8"
            >
              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <span className="text-[#a0a0a5] text-xs font-bold uppercase tracking-widest">— Introduction</span>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-2xl lg:text-3xl font-bold text-white leading-tight"
              >
                Senior Software Engineer and Product Builder.
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-[#a0a0a5] text-sm lg:text-base leading-relaxed max-w-sm"
              >
                Designing and building resilient, scalable systems that solve human problems with technical precision. Rooted in engineering excellence.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-2 lg:pt-4">
                <a href="#about" className="inline-flex items-center group text-[#fec13d] font-bold text-sm uppercase tracking-widest border-b border-transparent hover:border-[#fec13d] transition-all pb-1">
                  My story
                  <svg className="ml-3 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
