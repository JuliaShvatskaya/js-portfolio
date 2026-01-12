
import React from 'react';
import { motion } from 'framer-motion';

const EducationLanguages: React.FC = () => {
  const education = [
    {
      degree: "Applied Mathematics",
      institution: "Oles Honchar Dnipro National University",
      details: "Bachelor’s & Master’s degrees with honors",
      subtext: "Strong foundation in mathematics, statistics, and analytical modeling."
    },
    {
      degree: "Postgraduate Studies",
      institution: "PhD track in Mathematical Sciences",
      details: "Advanced research in complex systems and algorithmic optimization.",
      subtext: "Focused on bridging the gap between theoretical modeling and computational efficiency."
    }
  ];

  const languages = [
    { name: "Ukrainian", proficiency: "Native", flag: "🇺🇦" },
    { name: "Russian", proficiency: "Native", flag: "" },
    { name: "English", proficiency: "Professional working proficiency", flag: "🇺🇸" }
  ];

  return (
    <section id="education" className="py-32 bg-[#25252d] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Education */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <p className="text-[#a0a0a5] uppercase tracking-widest text-xs font-bold flex items-center mb-6">
                  <span className="w-8 h-[1px] bg-[#a0a0a5] mr-3"></span>
                  Academic Foundation
                </p>
                <h2 className="text-5xl font-extrabold text-white tracking-tighter">Education.</h2>
              </div>

              <div className="space-y-16">
                {education.map((item, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-[#fec13d]/30">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[#fec13d] rounded-full shadow-[0_0_15px_rgba(254,193,61,0.5)]"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
                    <p className="text-[#fec13d] text-sm font-bold uppercase tracking-widest mb-4">
                      {item.institution}
                    </p>
                    <p className="text-white text-lg font-medium mb-3 italic">
                      {item.details}
                    </p>
                    <p className="text-[#a0a0a5] leading-relaxed max-w-xl">
                      {item.subtext}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Languages */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1d1d24] p-10 md:p-14 border border-white/5 relative h-full flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fec13d]/5 blur-3xl rounded-full"></div>
              
              <div className="mb-12">
                <p className="text-[#a0a0a5] uppercase tracking-widest text-xs font-bold flex items-center mb-4">
                  Communication
                </p>
                <h3 className="text-4xl font-extrabold text-white tracking-tighter">Languages.</h3>
              </div>

              <div className="space-y-12">
                {languages.map((lang) => (
                  <div key={lang.name} className="group">
                    <div className="flex items-start space-x-4 mb-3">
                      <div className="flex-shrink-0 w-8 flex justify-center pt-1">
                        {lang.flag ? (
                          <span className="text-2xl leading-none">{lang.flag}</span>
                        ) : (
                          <div className="w-6 h-[1px] bg-white/20 mt-3" />
                        )}
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xl md:text-2xl font-bold text-white group-hover:text-[#fec13d] transition-colors leading-tight">
                          {lang.name}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#fec13d]/60 leading-relaxed max-w-[200px]">
                          {lang.proficiency}
                        </span>
                      </div>
                    </div>
                    <div className="ml-12 h-[2px] w-full bg-white/5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: lang.proficiency.includes('Native') ? '100%' : '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-[#fec13d]/40"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-white/5">
                <p className="text-[#a0a0a5] text-sm leading-relaxed italic">
                  "Linguistic versatility paired with a mathematical mindset ensures clarity in both global collaboration and technical system design."
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationLanguages;
