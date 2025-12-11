
export type Language = 'en' | 'zh';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string; // Changed from strict union to string for safety
  color: string; // Tailwind class for gradient/color
  // Detailed view content
  fullDescription: string;
  benefits: { title: string; desc: string }[];
  workflow: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface PainPointItem {
  title: string;
  description: string;
}

export interface SolutionItem {
  title: string;
  items: string[];
}

export interface WhyUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface ContentData {
  nav: {
    home: string;
    about: string;
    services: string;
    whyUs: string;
    results: string;
    process: string;
    contact: string;
    logoTitle: string;
    logoSubtitle: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
  };
  intro: {
    title: string;
    subtitle: string;
    description: string;
    stats: StatItem[];
    cta: string;
  };
  painPoints: {
    titlePain: string;
    itemsPain: PainPointItem[];
    titleSolution: string;
    itemsSolution: SolutionItem[];
    cta: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: ServiceItem[];
    cta: string;
    backBtn: string;
    bookConsult: string;
  };
  whyUs: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: WhyUsItem[];
  };
  results: {
    sectionTitle: string;
    sectionSubtitle: string;
    chartTitle: string;
    pieTitle: string;
    stats: StatItem[];
  };
  partners: {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  process: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: ProcessItem[];
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    submit: string;
    success: string;
  };
  aiWidget: {
    title: string;
    placeholder: string;
    welcome: string;
    disclaimer: string;
  };
  footer: {
    copyright: string;
    rights: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}