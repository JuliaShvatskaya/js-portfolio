
import { CaseStudy, SkillGroup } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'united-planners',
    title: 'Senior Software Engineer — FinTech Platforms',
    company: 'UnitedPlanners.com',
    url: 'https://unitedplanners.com',
    role: 'Senior Software Engineer',
    summary: 'Internal web platforms used by financial advisors and operations teams at a U.S. independent broker-dealer.',
    keyFocus: [
      'Advisor onboarding and account management systems',
      'Legacy system modernization without production risk',
      'High-reliability, compliance-driven workflows',
      'Production support and incident resolution'
    ],
    impact: 'These systems manage real client assets and sensitive data. My role is to deliver software that is quietly reliable — trusted every day without drama.',
    tech: ['C#', '.NET', 'MS SQL Server', 'Javascript', 'Enterprise Architecture'],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPTo2ghRMWktStk0AsQyxAOy-ga2viHqHbklkitaXT4H--qqlzXP_Z-eEwxLNDlYJlvvv5CWyLdXA0bLtomzP5vAfql08ehSQJsyNvq62H28cBkldrdyBKO16DJEzoA9hAZavfxXWIFB9cLk9WLPP1d=w1616-h901-s-no-gm?authuser=0',
    color: 'teal',
    longDescription: 'At United Planners, I am responsible for maintaining and evolving the core digital infrastructure that supports financial advisors across the US. This involves complex data migrations from legacy systems, building secure onboarding pipelines, and ensuring that every transaction and record meets strict regulatory compliance standards. The focus is on creating a "boring" but indestructible backend that users can rely on for their daily operations.'
  },
  {
    id: 'kids-flashcards',
    title: 'Founder & Full-Stack Engineer — Global EdTech',
    company: 'Kids-Flashcards.com',
    url: 'https://kids-flashcards.com',
    role: 'Founder & Product Owner',
    summary: 'A multilingual educational platform built from scratch — architecture, backend, frontend, SEO, and hosting.',
    keyFocus: [
      'Multilingual & bilingual learning system',
      'Audio-enabled educational content',
      'Automated PDF & image generation',
      'SEO-driven content architecture'
    ],
    impact: 'Global audience (US & EU), used by parents, teachers, and speech therapists. Lean, self-hosted infrastructure evolving into a SaaS platform.',
    tech: ['Spring Boot', 'Thymeleaf', 'JPA', 'MySQL', 'React', 'Linux'],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOamYXm4C4gKSJV2u3K9iN-1qQhi3lvmf7ePAKZrynVWvp4Dg-_ALbnazcV5qWVaxUgqrz3VzXOZBNRkWtbpBEVT_vC3Q4IG20wGdBURAgkZ5tIkb8CAWtKz__OzbMbnIgAGYTCiaWVL_OrT87q3OkA=w1545-h913-s-no-gm?authuser=0',
    color: 'indigo',
    longDescription: 'Kids-Flashcards was born from a personal need to provide high-quality educational materials for my children. I built the entire stack myself, focusing heavily on technical SEO to ensure organic growth. The system features a custom-built PDF generation engine for high-resolution printables and an integrated audio management system for multilingual support. It currently serves thousands of users monthly with zero maintenance overhead.'
  },
  {
    id: 'pickatime',
    title: 'Core Engineer — High-Load Scheduling',
    company: 'PickATime.com',
    url: 'https://pickatime.com',
    role: 'Full-Stack Web Developer',
    summary: 'Enterprise appointment scheduling system for U.S. schools and hospitals.',
    keyFocus: [
      'Core Java development',
      'SQL optimization (2–3× performance improvements)',
      'High-availability production support',
      'Direct customer communication'
    ],
    impact: 'Focused on performance, data processing, and high availability in critical public sector environments.',
    tech: ['Java', 'Spring', 'Hibernate', 'Angular', 'MS SQL', 'XSLT'],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMQate1v9q2ZyqPAwenkNcnTCqBXqoUsU141AUEX39LTTix_z6-S6A-2YWcH96U2PocXyY2PEhahEKurnrr-GS9sMwojOVb-cUEkZGV6uMY8K5lH-kVMOapLBCfAUe4bAM4Qro7OABQyoqzaMHGBdkG=w1600-h900-s-no-gm?authuser=0',
    color: 'blue',
    longDescription: 'In this role, I tackled the challenges of a high-concurrency scheduling environment. During peak periods (like school registration weeks), the system handled massive traffic spikes. I led the effort to optimize legacy SQL queries that were slowing down the application, resulting in 300% faster report generation. I also handled direct technical support for high-profile clients, bridging the gap between engineering and end-user needs.'
  },
  {
    id: 'condosandcondos',
    title: 'Full-Stack Engineer — Real Estate Platform',
    company: 'CondosAndCondos.com',
    url: 'https://condosandcondos.com',
    role: 'Full-Stack Engineer',
    summary: 'Redesign and optimization of a high-traffic real estate website.',
    keyFocus: [
      'Backend (.NET, LINQ, MS SQL)',
      'Technical SEO & Core Web Vitals',
      'UI improvements and long-term maintainability'
    ],
    impact: 'Full-site redesign and restructuring to improve visibility and conversion rates.',
    tech: ['.NET', 'LINQ', 'MS SQL', 'SEO', 'JQuery', 'WordPress'],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOFcIGa5guGocuFdR4YDWY-AGYxysrIQ_JnTChjn2x6-7VRfzKsbnKRxbati1AHkU3xakjKkGFjis8dRpdpVvrkT_LIwOvUSWBlJoj3ZtSm4LzmK-oP8JdG8QYnzDZesxFFBjZ8S4aVuU3IwcfDOBdp=w1600-h900-s-no-gm?authuser=0',
    color: 'slate',
    longDescription: 'The project involved taking a legacy real estate portal and transforming it into a high-performance modern web application. I focused on the technical SEO aspects—specifically schema markup and server-side rendering optimizations—which led to a significant increase in search engine rankings. I also implemented a more robust database layer using LINQ to SQL to improve data retrieval speeds for property listings.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'System & Backend',
    skills: ['Java (Spring Boot, Hibernate)', 'C#/.NET', 'LINQ', 'REST APIs', 'SQL Optimization', 'Authentication', 'Enterprise Systems']
  },
  {
    category: 'Frontend Engineering',
    skills: ['React', 'Next.js', 'Angular', 'JavaScript', 'JQuery', 'HTML/CSS/SASS', 'Tailwind', 'Material Design', 'Bootstrap']
  },
  {
    category: 'Architecture & Infra',
    skills: ['Monolith & Microservices', 'Linux', 'Docker', 'Tomcat', 'IIS', 'AWS', 'VPS Hosting']
  },
  {
    category: 'SEO & Growth',
    skills: ['Technical SEO', 'Semantic Architecture', 'Core Web Vitals', 'Google Analytics', 'Search Console', 'AdSense']
  },
  {
    category: 'Product & Collaboration',
    skills: ['Product Ownership', 'Task Estimation', 'Team Coordination', 'Client Communication', 'Agile Workflows']
  }

  /*
  Images:
  https://lh3.googleusercontent.com/pw/AP1GczME_222qpGmdIAjt8k9B6W70NSkweMv4KmTyqysXvx6jMzgVjM3hal56KFI4B-EnMRpXqw-TfYTuSIf44_kHqKQs23GLnqS2PyGLw1efZTbhLdFwTTSdYwsmUAd5y5ZpZx2a7OyFPgUDxt8w2uTvQDS=w656-h913-s-no-gm?authuser=0
  https://lh3.googleusercontent.com/pw/AP1GczNhyu45nnPPtKgJqJ0GMkbMOEv-IQUVQVHIZO8TqyPZOXW2Vk0XWSs3DO2TI3HAvxxHdgSpWUn2wc2rgB1fivMpDfGCV5iQjwWYIPTb7c3Q0v-qs7Ygc_rmKgOQUEDfkLeYSXPGYlgBOOBSmFVWK39h=w720-h913-s-no-gm?authuser=0


  */
];
