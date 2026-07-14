export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: string[];
  technologies: string[];
  industriesServed: string[];
  deliverables: string[];
  accentColor: string;
  faqs: FAQItem[];
}

export interface IndustryData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  tagline: string;
  description: string;
  challenges: string[];
  existingWorkflow: string;
  aiOpportunities: string[];
  automationRoadmap: string[];
  roi: string;
  useCases: string[];
  recommendedTech: string[];
  localIndustries: string[];
  accentColor: string;
  faqs: FAQItem[];
}

export interface TechnologyData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  tagline: string;
  description: string;
  capabilities: string[];
  benefits: string[];
  integrationWorkflow: string[];
  useCases: string[];
  accentColor: string;
  faqs: FAQItem[];
}

export interface SolutionData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  tagline: string;
  description: string;
  painPoints: string[];
  solutionOverview: string;
  benefits: string[];
  features: string[];
  recommendedTech: string[];
  faqs: FAQItem[];
}

export interface LocationData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  tagline: string;
  description: string;
  cityIntroduction: string;
  localIndustries: string[];
  servicesOffered: string[];
  testimonials: { quote: string; author: string; company: string }[];
  faqs: FAQItem[];
  geo: { latitude: string; longitude: string };
  address: string;
}
