
import {
  logo,
  backend,
  docker,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,

  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,

  // NEW AI/ML & LANGUAGE TECH ICONS
  python,
  tensorflow,
  pytorch,
  numpy,
  pandas,
  opencv,
  cpp,
  java,
  cicon,

} from '../assets';

import machvisLogo from "../assets/company/machvis_logo.jpeg";
import pacLogo from "../assets/company/Pakistan_Aeronautical_Complex.png";
import rapidevLogo from "../assets/company/rapidev_logo.jpg";
import nustforum from "../assets/nustforum.png";
import seecsrec from "../assets/seecsrec.jpeg";
import xmed from "../assets/xmed.jpeg";

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";

import cisco from '../assets/cisco.png';   // Replace with actual cert image
import ml from '../assets/ml.png';
import dl from '../assets/dl.png';
import { s } from 'maath/dist/misc-7d870b3c.esm';

export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
   {
    title: "Data Scientist",
    icon: web, 
  },
  {
    title: "AI Engineer",
    icon: backend, 
  },
 
  {
    title: "Machine Learning & Deep Learning Enthusiast",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: cicon,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  
  {
    name: "Docker",
    icon: docker,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "React",
    icon: reactjs,
  },
  
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Git",
    icon: git,
  },
  
  {
    name: "Github",
    icon: github,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const experiences = [
  {
    title: "AI Intern",
    company_name: "MachVis Lab",
    icon: machvisLogo,
    iconBg: "#151515",
    date: "Jun 2025 - Nov 2025",
    points: [
      "Worked on Computer Vision, NLP, and LLM-based projects, contributing to model development, fine-tuning, and evaluation.",
      "Integrated and optimized AI models within research workflows and real-world application pipelines.",
      "Preprocessed datasets and improved model performance for practical deployment.",
      "Collaborated with senior researchers on cutting-edge AI projects to produce high-impact results.",
    ],
  },
  
  {
    title: "AI Intern",
    company_name: "Rapidev (NSTP)",
    icon: rapidevLogo,
    iconBg: "#151515",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Researched and contributed to projects involving Agentic AI, NLP, and Computer Vision in real-world applications.",
      "Collaborated on model development, optimization, and integration into production pipelines.",
      "Assisted in data preprocessing, model fine-tuning, and performance evaluation.",
      "Supported deployment and integration of AI models into research and business workflows.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "Pakistan Aeronautical Complex Kamra (AMF)",
    icon: pacLogo,
    iconBg: "#1a1a1a",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Researched and gained hands-on experience in IT and cybersecurity, focusing on network security, vulnerability management, and threat analysis.",
      "Collaborated with senior IT staff to improve system protocols and enhance data security measures.",
      "Assisted in network operations, troubleshooting, and routine system maintenance.",
      "Supported server operations including user access control and enterprise-level IT solutions.",
    ],
  },
  
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "SEECS AI Receptionist",
    description:
      "Developed an AI-powered receptionist system using LLaMA and Retrieval-Augmented Generation (RAG), designed to answer queries in real-time through both audio and text. Integrated large language models and RAG for efficient, interactive communication.",
    tags: [
      { name: "llama", color: "blue-text-gradient" },
      { name: "rag", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: seecsrec, // Replace with an actual image if available
    source_code_link: "https://github.com/bytesy-z/SEECS-AI-Receptionist", // Replace with actual link
  },
  {
    name: "XMedFusion ",
    description:
      "Built a multimodal, agent-based system for automated radiology report generation from chest X-rays and CT scans using computer vision and LLMs. Used knowledge-graph–grounded reasoning for explainable outputs. Added human-in-the-loop validation for clinical reliability.",
    tags: [
      { name: "Agentic AI", color: "green-text-gradient" },
      { name: "LLM", color: "blue-text-gradient" },
      { name: "Explainability", color: "pink-text-gradient" },
    ],
    image: xmed, // Replace with actual image if available
    source_code_link: "https://github.com/maha-baig/XMedAgent", // Replace with actual link
  },
  {
    name: "NUST Forum",
    description:
      "Developed a community forum for NUST students and faculty using the MERN stack, integrating user authentication, real-time chat, and advanced search for seamless interaction. Focused on scalable backend APIs and responsive UI design to support active campus engagement.",
    tags: [
      { name: "mongodb", color: "green-text-gradient" },
      { name: "express", color: "white-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "pink-text-gradient" },
    ],
    image: nustforum, // Replace with actual image if available
    source_code_link: "https://github.com/Suman-punshi/Nust-forum", // Replace with actual link
  },
];


export { services, technologies, experiences, testimonials, projects };
