export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  problemStatement: string;
  role: string;
  techStack: string[];
  challenges: string[];
  impact: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  filterTags: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'learning';
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  linkedInUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
