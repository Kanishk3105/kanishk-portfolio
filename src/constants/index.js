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

export const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
export const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
export const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

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
    description:
      "Deep Learning-based medical imaging system developed using Python, TensorFlow, and Computer Vision techniques to identify stroke indicators from brain MRI scans, assisting in early detection and improving diagnostic efficiency.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
      { name: "Deep Learning", color: "pink-text-gradient" },
      { name: "Computer Vision", color: "orange-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "Medical Imaging", color: "blue-text-gradient" },
    ],
    image: strokeDetection,
    images: [strokeDetection],
    source_code_link:
      "https://github.com/Kanishk3105/stroke-detection-brain-mri",
  },
  {
    name: "MediVisionAI",
    description:
      "AI-powered healthcare assistant combining OCR, NLP, and document intelligence to extract, analyze, and process medical information.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "OCR", color: "green-text-gradient" },
      { name: "NLP", color: "pink-text-gradient" },
      { name: "OpenCV", color: "orange-text-gradient" },
      { name: "AI", color: "blue-text-gradient" },
      { name: "Healthcare AI", color: "green-text-gradient" },
    ],
    image: medivisionai,
    images: [medivisionai],
    source_code_link: "https://github.com/Kanishk3105/medintel",
  },
  {
    name: "MediIntel",
    description:
      "AI-driven healthcare intelligence platform designed to analyze medical data, generate insights, and assist healthcare professionals in making informed decisions through intelligent data processing and automation.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "AI", color: "green-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
      { name: "Data Analysis", color: "orange-text-gradient" },
      { name: "Healthcare", color: "blue-text-gradient" },
    ],
    image: mediintel,
    images: [mediintel],
    source_code_link: "https://github.com/Kanishk3105/medintel",
  },
  {
    name: "Handwriting AI",
    description:
      "Computer Vision and OCR based system for recognizing and digitizing handwritten text from images and documents.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "OCR", color: "green-text-gradient" },
      { name: "Computer Vision", color: "pink-text-gradient" },
      { name: "OpenCV", color: "orange-text-gradient" },
      { name: "Image Processing", color: "blue-text-gradient" },
    ],
    image: handwritingai,
    images: [handwritingai],
    source_code_link: "https://github.com/Kanishk3105/handwriting-ai",
  },
  {
    name: "Fuel Price API",
    description:
      "RESTful API built using Django and Django REST Framework to provide fuel price data with clean architecture, validation, and scalable backend design.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Django REST Framework", color: "pink-text-gradient" },
      { name: "REST API", color: "orange-text-gradient" },
      { name: "Backend Development", color: "blue-text-gradient" },
      { name: "JSON", color: "green-text-gradient" },
    ],
    image: fuelpriceapi,
    images: [fuelpriceapi],
    source_code_link: "https://github.com/Kanishk3105/Backend-Django",
  },
  {
    name: "TaskForge",
    description:
      "Modern task management and productivity platform built with React, enabling users to organize tasks, track progress, manage workflows, and improve daily productivity through an intuitive user interface.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "Frontend Development", color: "pink-text-gradient" },
      { name: "UI/UX", color: "orange-text-gradient" },
      { name: "Productivity App", color: "blue-text-gradient" },
    ],
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
