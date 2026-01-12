
export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  url?: string;
  role: string;
  summary: string;
  keyFocus: string[];
  impact: string;
  tech: string[];
  image: string;
  color: string;
  longDescription?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}