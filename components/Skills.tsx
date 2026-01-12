
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants';

const getIcon = (category: string) => {
  // Common properties for all icons
  const iconProps = {
    className: "w-12 h-12",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  };

  switch (category) {
    case 'System & Backend':
      return (
        <svg {...iconProps}>
          <rect x="4" y="4" width="16" height="16" rx="3" strokeWidth={1.5} />
          <path d="M8 10L10 12L8 14" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 14H16" strokeWidth={1.5} strokeLinecap="round" />
        </svg>
      );
    case 'Frontend Engineering':
      return (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" strokeWidth={1.5} />
          <path d="M3 10H21" strokeWidth={1.5} />
          <circle cx="6" cy="7.5" r="0.5" fill="currentColor" />
          <circle cx="8" cy="7.5" r="0.5" fill="currentColor" />
          <circle cx="10" cy="7.5" r="0.5" fill="currentColor" />
          <path d="M7 14L9 16L7 18" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        </svg>
      );
    case 'Architecture & Infra':
      return (
        <svg {...iconProps}>
          <path d="M12 3L4 7V17L12 21L20 17V7L12 3Z" strokeWidth={1.5} strokeLinejoin="round" />
          <path d="M12 3V21" strokeWidth={1} opacity="0.3" />
          <path d="M4 7L12 11L20 7" strokeWidth={1.5} strokeLinejoin="round" />
          <path d="M12 11V21" strokeWidth={1.5} />
        </svg>
      );
    case 'SEO & Growth':
      return (
        <svg {...iconProps}>
          <circle cx="11" cy="11" r="6" strokeWidth={1.5} />
          <path d="M16 16L20 20" strokeWidth={1.5} strokeLinecap="round" />
          <path d="M11 8V11L13 12" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          <path d="M18 6L21 3M21 3H18M21 3V6" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'Product & Collaboration':
      return (
        <svg {...iconProps}>
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8.5" cy="7" r="4" strokeWidth={1.5} />
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
          <path d="M17 3.13C17.8604 3.35031 18.623 3.85071 19.1676 4.55232C19.7122 5.25392 20.0078 6.11683 20.0078 7.005C20.0078 7.89317 19.7122 8.75608 19.1676 9.45768C18.623 10.1593 17.8604 10.6597 17 10.88" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        </svg>
      );
    case 'Tools & Workflow':
      return (
        <svg {...iconProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};

const Skills: React.FC = () => {
  const toolsAndWorkflow = [
    'Git', 'SVN', 
    'Jira', 'Asana', 
    'Agile / Scrum', 
    'VS', 'VS Code', 'NetBeans', 
    'ChatGPT', 'Google AI Studio',
    'Antigravity'
  ];

  return (
    <section id="skills" className="py-32 bg-[#1d1d24]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-[#a0a0a5] uppercase tracking-widest text-xs font-bold flex items-center mb-6">
            <span className="w-8 h-[1px] bg-[#a0a0a5] mr-3"></span>
            Expertise
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter">Technical Arsenal.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`p-10 flex flex-col justify-between border border-white/5 transition-colors duration-300 min-h-[400px] ${
                index === 0 ? 'bg-[#fec13d] text-black group' : 'bg-[#2a2a35] text-white'
              }`}
            >
              <div className="mb-12">
                <div className={`${index === 0 ? 'text-black' : 'text-[#fec13d]'} mb-10`}>
                  {getIcon(group.category)}
                </div>
                <h3 className={`text-3xl font-extrabold mb-6 leading-tight`}>
                  {group.category.split(' & ').map((part, i) => (
                    <React.Fragment key={i}>
                      {part} {i === 0 && group.category.includes('&') && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              <div className="space-y-3">
                <div className={`h-[1px] w-full mb-6 ${index === 0 ? 'bg-black/10' : 'bg-white/10'}`}></div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${
                        index === 0 
                        ? 'border-black/20 text-black/70' 
                        : 'border-white/10 text-[#a0a0a5]'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Tools & Workflow Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="p-10 flex flex-col justify-between border border-white/5 bg-[#2a2a35] text-white min-h-[400px]"
          >
            <div className="mb-12">
              <div className="text-[#fec13d] mb-10">
                {getIcon('Tools & Workflow')}
              </div>
              <h3 className="text-3xl font-extrabold mb-6 leading-tight">
                Tools & <br />Workflow
              </h3>
            </div>

            <div className="space-y-3">
              <div className="h-[1px] w-full mb-6 bg-white/10"></div>
              <div className="flex flex-wrap gap-2">
                {toolsAndWorkflow.map((tool) => (
                  <span 
                    key={tool} 
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border border-white/10 text-[#a0a0a5]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
