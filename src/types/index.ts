export interface NavItem {
  label: string;
  href: string;
}

export interface CompanyDetails {
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroTagline: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutList: string[];
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ClientBrand {
  name: string;
  logo: string;
  alt: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}
