// TypeScript interfaces for design configuration

export interface NavigationLink {
  label: string;
  href: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface HeaderContent {
  logo: string;
  logoText?: string;
  navigation: NavigationLink[];
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description?: string;
  cta: CTAButton;
  secondaryCta?: CTAButton;
  image?: string;
}

export interface FooterContent {
  copyright: string;
  links: NavigationLink[];
  socialLinks?: {
    platform: string;
    url: string;
    icon?: string;
  }[];
}

export interface DesignColors {
  primary: string;
  secondary: string;
  accent?: string;
  background?: string;
  text?: string;
}

export interface DesignMetadata {
  id: string;
  name: string;
  version: string;
  description?: string;
}

export interface DesignContent {
  header: HeaderContent;
  hero: HeroContent;
  footer: FooterContent;
}

export interface DesignConfig {
  design: DesignMetadata;
  colors: DesignColors;
  content: DesignContent;
}

// Component props interfaces
export interface HeaderProps {
  content: HeaderContent;
}

export interface HeroProps {
  content: HeroContent;
}

export interface FooterProps {
  content: FooterContent;
}
