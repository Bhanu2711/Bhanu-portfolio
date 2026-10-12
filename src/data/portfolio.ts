import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Mail,
  Server,
  ShieldCheck,
  Trophy,
  Wifi,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  id: string;
  label: string;
};

export type TimelineItem = {
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  points: string[];
};

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  status: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  period?: string;
  detail: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

export const profile = {
  name: 'Bhanu Prakash Ponugupati',
  role: 'Computer Science graduate focused on clean software, cloud-ready systems, and thoughtful user experiences.',
  location: 'Hyderabad, India',
  resumePath: 'assets/resume/Bhanu-Prakash-Ponugupati-Resume.pdf',
  heroImage: 'assets/images/hero-mountains.png',
  summary:
    'Bhanu Prakash Ponugupati is a Computer Science graduate from Malla Reddy University with hands-on academic and internship exposure across Java, Python, web fundamentals, databases, cloud concepts, DevOps tools, and machine learning projects.',
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Honors' },
  { id: 'contact', label: 'Contact' },
];

export const aboutHighlights = [
  'Bachelor of Engineering in Computer Science, Malla Reddy University.',
  'Interested in developer roles that combine dependable engineering, cloud awareness, and practical problem solving.',
  'Comfortable moving between programming fundamentals, web interfaces, databases, Linux basics, and networking concepts.',
];

export const experience: TimelineItem[] = [
  {
    title: 'Fixed-Term Employee, CS Associate (IP)[S]',
    organization: 'Amazon Development Centre India Pvt. Ltd.',
    location: 'Hyderabad',
    period: 'June 23, 2025 - August 21, 2025',
    description:
      'Handled inbound calls from international customers concerning orders, refunds, account issues, and deliveries.',
    points: [
      'Supported customer issue resolution through clear communication and process discipline.',
      'Worked with customer-facing workflows involving account, delivery, refund, and order concerns.',
    ],
  },
  {
    title: 'Salesforce Developer Virtual Internship',
    organization: 'Salesforce',
    period: 'July 2024 - August 2024',
    description:
      'Completed structured training involving Salesforce Fundamentals, Apex, testing and debugging, Lightning Web Components, and process automation.',
    points: [
      'Practiced platform fundamentals across configuration, automation, and component-oriented development.',
      'Built familiarity with Apex, testing workflows, debugging, and Lightning Web Components.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'FireGuard',
    eyebrow: 'Machine Learning',
    description:
      'Intelligent Fire Detection Using Machine Learning with convolutional neural networks, focused on detecting fire-related visual patterns.',
    stack: ['Python', 'Machine Learning', 'CNNs'],
    status: 'Project link not provided',
  },
  {
    title: 'Message Encode Decode',
    eyebrow: 'Python Application',
    description:
      'A Python application using Tkinter and AES-256 for message encoding and decoding through a desktop interface.',
    stack: ['Python', 'Tkinter', 'AES-256'],
    status: 'Project link not provided',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Java', 'Python', 'C'],
  },
  {
    title: 'Web',
    icon: Server,
    skills: ['HTML', 'CSS'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    icon: ShieldCheck,
    skills: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Systems',
    icon: Wifi,
    skills: ['Linux fundamentals', 'TCP/IP', 'DNS'],
  },
];

export const education: EducationItem[] = [
  {
    title: 'Bachelor of Engineering in Computer Science',
    institution: 'Malla Reddy University',
    period: 'June 2021 - May 2025',
    detail: 'CGPA 7.84/10',
  },
  {
    title: 'Class 12',
    institution: 'Sri Chaitanya Junior College',
    detail: '94%',
  },
  {
    title: 'Class 10',
    institution: 'Sri Chaitanya Star Kids School',
    detail: 'CGPA 9.3/10',
  },
];

export const certifications = [
  {
    title: 'Salesforce Developer Virtual Internship',
    href: 'assets/certificates/Salesforce-Developer-Virtual-Internship.pdf',
    format: 'PDF',
  },
  {
    title: 'NPTEL Programming in Java',
    href: 'assets/certificates/Programming-In-Java.jpeg',
    format: 'Image',
  },
  {
    title: 'NPTEL Data Analytics with Python',
    href: 'assets/certificates/Data-Analytics-with-Python.pdf',
    format: 'PDF',
  },
];

export const achievements = [
  {
    title: 'Tech quiz awards',
    icon: Trophy,
  },
  {
    title: 'Poster-presentation awards',
    icon: Award,
  },
  {
    title: 'Sports coordination',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Handball team captaincy',
    icon: GraduationCap,
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'ponugupati.bhanu25@gmail.com',
    href: 'mailto:ponugupati.bhanu25@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bhanuprakashponugupati',
    href: 'https://www.linkedin.com/in/bhanuprakashponugupati/',
    icon: BriefcaseBusiness,
  },
  {
    label: 'GitHub',
    value: 'github.com/Bhanu2711',
    href: 'https://github.com/Bhanu2711',
    icon: Code2,
  },
];
