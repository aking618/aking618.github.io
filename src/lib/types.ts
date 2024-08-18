import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  company: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
  technologies: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  url: string;
  previewImage: string | StaticImageData;
  darkModePreviewImage?: string | StaticImageData;
  technologies: string[];
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};

export type MediumPost = {
  title: string;
  link: string;
  image: string;
  date: string;
  description: string;
  tags: string[];
};
