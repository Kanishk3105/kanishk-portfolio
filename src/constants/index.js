export const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
export const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
export const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

import {
  backend,
  creator,
  mobile,
  web,
  coursera,
  hr,
  ideas,
  concepts,
  designs,
  code,
  strokeDetection,
  medivisionai,
  mediintel,
  handwritingai,
  fuelpriceapi,
  taskforge,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "achievement", title: "Achievement" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: creator,
  },
  {
    title: "Computer Vision",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
];

const achievements = [
  {
    title: ["NVIDIA"],
    company_name: "NVIDIA AI/ML Training Program",
    icon: coursera,
    iconBg: "#76B900",
    date: "2025",
    points: [
      "Completed AI/ML Training Program",
      "Worked on Computer Vision and Deep Learning projects",
    ],
    credential: [""],
  },
  {
    title: ["IBM"],
    company_name: "IBM Full Stack Developer",
    icon: coursera,
    iconBg: "#0056d2",
    date: "2025",
    points: ["Completed Full Stack Development coursework"],
    credential: [""],
  },
  {
    title: ["HackerRank"],
    company_name: "HackerRank",
    icon: hr,
    iconBg: "#E6DEDD",
    date: "2025",
    points: ["Python (Basic)", "SQL (Basic)"],
    credential: [""],
  },
];

const projects = [
  {
    name: "Stroke Detection Using Brain MRI",
    description: "AI-powered MRI stroke detection system.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
    ],
    image: strokeDetection,
    images: [strokeDetection],
    source_code_link:
      "https://github.com/Kanishk3105/stroke-detection-brain-mri",
  },

  {
    name: "MediVisionAI",
    description: "OCR + NLP healthcare assistant.",
    tags: [{ name: "Python", color: "blue-text-gradient" }],
    image: medivisionai,
    images: [medivisionai],
    source_code_link: "https://github.com/Kanishk3105/medintel",
  },

  {
    name: "MediIntel",
    description: "Healthcare intelligence platform.",
    tags: [{ name: "AI", color: "blue-text-gradient" }],
    image: mediintel,
    images: [mediintel],
    source_code_link: "https://github.com/Kanishk3105/medintel",
  },

  {
    name: "Handwriting AI",
    description: "Handwritten text recognition system.",
    tags: [{ name: "OCR", color: "green-text-gradient" }],
    image: handwritingai,
    images: [handwritingai],
    source_code_link: "https://github.com/Kanishk3105/handwriting-ai",
  },

  {
    name: "Fuel Price API",
    description: "Django REST API project.",
    tags: [{ name: "Django", color: "blue-text-gradient" }],
    image: fuelpriceapi,
    images: [fuelpriceapi],
    source_code_link: "https://github.com/Kanishk3105/Backend-Django",
  },

  {
    name: "TaskForge",
    description: "Task management application.",
    tags: [{ name: "React", color: "blue-text-gradient" }],
    image: taskforge,
    images: [taskforge],
    source_code_link: "https://github.com/Kanishk3105/-taskforge",
  },
];

const words = [
  { text: "AI", imgPath: ideas },
  { text: "ML", imgPath: concepts },
  { text: "Python", imgPath: code },
  { text: "Backend", imgPath: designs },
];

export { achievements, projects, services, words };
