import { l } from "maath/dist/misc-7d870b3c.esm";
import {
  assign_mentor_students,
  backend,
  bookstore,
  css,
  devbee,
  docker,
  emf,
  flowmazon,
  git,
  golang,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  samturbo,
  tailwind,
  threejs,
  todo_list_app,
  typescript,
  v3data,
  web,
  zoomcar_mobile,
  csharp,
  sql,
  postGreSQL,
  BAT,
  NIHR,
  Gilbert,
  Laravel,
  FormBuilder,
  python,
  django,
  bootstrap,
  ai,
  c,
  github,
  education,
  altostech,
  finedge
} from "../assets";

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
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Django Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: web, // Fallback if mobile is not defined, though I didn't see it in imports
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "AI Tools",
    icon: ai,
  },
];

const educations = [
  {
    title: "Bachelor of Computer Application",
    company_name: "Calicut University",
    icon: education,
    iconBg: "#383E56",
    date: "June 2021 - May 2024",
    points: [
      "Completed degree with focus on computer applications and software development.",
    ],
  },
  {
    title: "12th Standard",
    company_name: "ST Paul's EMHSS",
    icon: education,
    iconBg: "#E6DEDD",
    date: "June 2019 - March 2021",
    points: [
      "Completed higher secondary education in the science stream.",
    ],
  },
];

const experiences = [
  {
    title: "Developer",
    company_name: "Altos Technology",
    icon: altostech, // Using existing icon as placeholder
    iconBg: "#383E56",
    date: "Oct 2024 - Feb 2026",
    points: [
      "Achieved end-to-end development of a new project using HTML, CSS, Python, and JavaScript.",
      "Focused on crafting engaging and responsive front-end interfaces using HTML, CSS and JAVASCRIPT.",
      "Optimized website performance by applying efficient coding practices and modern improvement techniques.",
      "Utilized Git and GitHub to manage version control, streamline collaboration, and maintain clean, organized project workflows.",
    ],
  },
  {
    title: "Python Full Stack Developer (Internship)",
    company_name: "Finedge IT Finishing School",
    icon: finedge,
    iconBg: "#E6DEDD",
    date: "July 2023 - March 2024",
    points: [
      "Completed an internship at Harithakarmasena, working on a Python-based platform built using the Django framework.",
      "Developed a system to manage the collection of non-biodegradable waste from households and establishments, ensuring proper routing to shredding units for recycling.",
      "Implemented a monthly notification feature that updates each household about their waste collection details for the respective month.",
      "Contributed to reducing manual workload for government teams by digitizing and automating core Harithakarmasena operations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HARITHAKARMASENA",
    description:
      "Developed a system to manage the collection of non-biodegradable waste from households and establishments, ensuring proper routing to shredding units for recycling. Implemented a monthly notification feature that updates each household about their waste collection details.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: FormBuilder, // Placeholder
    live_link: "#",
  },
];

export { experiences, projects, services, technologies, testimonials, educations };
