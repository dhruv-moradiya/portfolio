export interface PersonalInfo {
  name: string;
  shortName: string;
  initials: string;
  tagline: string;
  bio: string;
  aboutBio: string;
  location: string;
  status: string;
  email: string;
  resumeUrl: string;
  profileImage: string;
  buyMeCoffeeUrl: string;
}

export interface SEOInfo {
  siteUrl: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface ContactLink {
  name: string;
  value: string;
  href: string;
}

export interface Technology {
  name: string;
  color: string;
}

export interface StackCategory {
  name: string;
  technologies: Technology[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string | null;
  demo?: string | null;
}

export interface PortfolioData {
  personal: PersonalInfo;
  seo: SEOInfo;
  socialLinks: SocialLink[];
  contactLinks: ContactLink[];
  stack: StackCategory[];
  experience: Experience[];
  projects: Project[];
}
