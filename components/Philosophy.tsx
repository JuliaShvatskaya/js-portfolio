
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const principles = [
    {
      label: 'Pragmatism over Hype',
      title: 'I don’t blindly follow trends.',
      description: 'I choose tools that solve the specific problem at hand, not what’s trending on social media. Engineering is about trade-offs and selecting the right architecture for the mission.'
    },
    {
      label: 'Real-World Scale',
      title: 'I design for scale, not demos.',
      description: 'A prototype that works for 10 users is easy. I build products that users trust, focusing on performance, concurrency, and reliability that holds up under real-world pressure.'
    },
    {
      label: 'Legacy & Empathy',
      title: 'I care about the maintainer.',
      description: 'I care about who will maintain this system in 2 years—whether it’s me or someone else. Clean code and proper documentation are acts of respect for the future of the product.'
    },
    {
      label: 'Holistic Context',
      title: 'Connected Engineering.',
      description: 'I understand that SEO, UX, and backend decisions are deeply connected. A backend engineer who ignores SEO or accessibility is leaving business value on the table.'
    }
  ];

  return (
    <section 
      id="philosophy" 
      ref={sectionRef}
      className="relative py-32 bg-[#1d1d24] border-t border-white/5 overflow-hidden"
    >
      {/* Parallax Decorative Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 -left-20 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
      >
        PHILOSOPHY
      </motion.div>
      
      <motion.div 
        style={{ y: y3, rotate }}
        className="absolute top-1/2 -right-12 w-64 h-64 border border-[#fec13d]/10 rounded-full select-none pointer-events-none"
      />

      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-1/4 w-32 h-[1px] bg-[#fec13d]/20 select-none pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
           <p className="text-[#a0a0a5] uppercase tracking-widest text-xs font-bold flex items-center mb-6">
             <span className="w-8 h-[1px] bg-[#a0a0a5] mr-3"></span>
             Engineering Mindset
           </p>
           <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">How I Think.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative"
            >
              {/* Subtle background number for each block */}
              <motion.span 
                style={{ y: index % 2 === 0 ? y2 : y1 }}
                className="absolute -top-10 -left-6 text-7xl font-black text-white/[0.03] select-none pointer-events-none"
              >
                0{index + 1}
              </motion.span>

              <div className="flex flex-col space-y-4 relative z-10">
                <span className="text-[#fec13d] text-xs font-bold uppercase tracking-[0.3em] opacity-80">
                  {principle.label}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight group-hover:text-[#fec13d] transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-[#a0a0a5] leading-relaxed text-lg max-w-xl">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Manifesto Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-32 p-12 md:p-20 bg-[#25252d] border border-white/5 text-center relative overflow-hidden"
        >
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#fec13d]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"
          />
          
          <h3 className="relative z-10 text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
            You’re not just hiring a developer. <br className="hidden md:block" />
            <span className="text-[#fec13d]">You’re working with a partner</span> who understands product, users, and business reality.
          </h3>
          
          <div className="relative z-10 inline-flex items-center space-x-4">
            <div className="h-[1px] w-12 bg-[#a0a0a5]"></div>
            <p className="text-[#a0a0a5] font-bold uppercase tracking-widest text-xs">Julia Shvatskaya</p>
            <div className="h-[1px] w-12 bg-[#a0a0a5]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
