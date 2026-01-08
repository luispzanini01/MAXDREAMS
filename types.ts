import React from 'react';

export type Language = 'en' | 'nl';

export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface SpecCategory {
  category: string;
  items: SpecItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'interior' | 'exterior';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}