
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#25252d] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#a0a0a5] uppercase tracking-widest text-xs font-bold flex items-center">
              <span className="w-8 h-[1px] bg-[#a0a0a5] mr-3"></span>
              The Narrative
            </p>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
              My Story.
            </h2>
            <div className="flex flex-wrap gap-4 pt-4">
              {['Senior Full-Stack Engineer', 'Product Builder', 'EdTech Founder'].map((tag) => (
                <span key={tag} className="text-[#fec13d] text-sm font-bold uppercase tracking-widest px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
              I’m a senior full-stack developer and product builder with a strong backend foundation, a mathematician’s mindset, and a deep focus on <span className="text-[#fec13d]">SEO-first architecture</span>, UX psychology, and scalable systems.
            </p>
            
            <p className="text-[#a0a0a5] text-lg leading-relaxed">
              I build products end-to-end: from system design and infrastructure to UI, SEO, analytics, and monetization. I don’t just ship features — I design systems that survive real users, real traffic, and real business constraints.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold text-[#fec13d]">15</span>
                  <span className="text-[#a0a0a5] text-xs font-bold uppercase tracking-widest">Years Experience</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold text-[#fec13d]">200</span>
                  <span className="text-white text-3xl font-bold">+</span>
                  <span className="text-[#a0a0a5] text-xs font-bold uppercase tracking-widest ml-2">Systems Deployed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Founder Story Sidecar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-[#1d1d24] p-8 md:p-12 border border-white/5 relative"
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#fec13d] flex items-center justify-center text-2xl shadow-xl">
              🧭
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8">Founder Story</h3>
            
            <div className="space-y-6 text-[#a0a0a5] leading-relaxed">
              <p>
                <strong className="text-white">By day</strong>, I’m a seasoned engineer with 15+ years of experience in Java, .NET, and modern frontend frameworks.
              </p>
              <p>
                <strong className="text-white">By night</strong>, I’m a mom of two — turning real challenges like speech delay and multilingual education into practical tools used by thousands worldwide.
              </p>
              
              <div className="pt-6 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#fec13d]">How I Work:</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#fec13d] mr-3 mt-1">•</span>
                    <span>Think in systems, not symptoms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fec13d] mr-3 mt-1">•</span>
                    <span>Ask uncomfortable but necessary questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fec13d] mr-3 mt-1">•</span>
                    <span>Optimize for clarity and maintainability</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇺🇦</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Rooted in Ukraine</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest italic">Fluent in resilience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
