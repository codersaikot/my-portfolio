// ============================================================
// portfolioData.js — Central data source for the portfolio
// Update this file to customize all portfolio content
// ============================================================

export const personalInfo = {
  name: "Tariqul Islam Saikot",
  title: "Software Engineer / Full Stack Developer",
  tagline: "Building scalable, efficient software solutions",
  email: "mdsaikot678@gmail.com",
  github: "https://github.com/codersaikot",
  linkedin: "https://www.linkedin.com/in/tariqul-islam-saikot",
  location: "Bangladesh",
  available: true,
  bio: [
    "Motivated and detail-oriented Software Engineer with a strong foundation in Computer Science and Engineering. Experienced in developing, implementing, and managing Hospital Information Systems (HIS), ERP solutions, FIQC E-Certification software, and laboratory information systems.",
    "Skilled in analytical problem-solving, system optimization, and continuous learning of emerging technologies, with a passion for delivering scalable and efficient software solutions.",
    "Developing software for the world of intent is something I'm passionate about, and I'm dedicated to making the world of intent easy and affordable for everyone."
  ]
};

export const typingTexts = [
  "Software Engineer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "ERP Consultant",
  "Problem Solver"
];

export const skills = {
  Frontend: [
    { icon: "🌐", name: "HTML5",      level: 90 },
    { icon: "🎨", name: "CSS3",       level: 88 },
    { icon: "📱", name: "Bootstrap",  level: 85 },
    { icon: "💨", name: "Tailwind",   level: 90 },
    { icon: "⚡", name: "JavaScript", level: 87 },
    { icon: "⚛️", name: "React.js",   level: 85 },
    { icon: "🔥", name: "Firebase",   level: 75 }
  ],
  Backend: [
    { icon: "🐘", name: "PHP",        level: 80 },
    { icon: "🏗️", name: "Laravel",    level: 78 },
    { icon: "🟩", name: "Node.js",    level: 82 },
    { icon: "🚂", name: "Express.js", level: 80 },
    { icon: "🍃", name: "MongoDB",    level: 82 },
    { icon: "🔌", name: "REST API",   level: 88 },
    { icon: "🔄", name: "React Query",level: 75 },
    { icon: "🗃️", name: "Redux",      level: 73 },
    { icon: "▲",  name: "Next.js",    level: 72 }
  ],
  Tools: [
    { icon: "💻", name: "VS Code",    level: 95 },
    { icon: "🎯", name: "Figma",      level: 70 },
    { icon: "🌿", name: "Git",        level: 88 },
    { icon: "🐙", name: "GitHub",     level: 88 },
    { icon: "🦊", name: "GitLab",     level: 80 },
    { icon: "⚙️", name: "Odoo ERP",   level: 75 },
    { icon: "📊", name: "ERPNext",    level: 72 }
  ]
};

export const projects = [
  {
    id: 1,
    icon: "🏥",
    color: "rgba(74,222,128,.15)",
    category: "Web App",
    title: "Hospital Management System",
    year: "2023",
    desc: "A comprehensive Hospital Information System (HIS) for managing patient records, appointments, billing, laboratory tests, pharmacy, and staff management with role-based access control.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "REST API", "JWT"],
    live: "#",
    github: "#"
  },
  {
    id: 2,
    icon: "📜",
    color: "rgba(108,99,255,.15)",
    category: "Web App",
    title: "FIQC E-Certification Software",
    year: "2023",
    desc: "Digital certification platform for FIQC (Food Industry Quality Control). Automates issuance, verification, and management of food quality compliance certificates.",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "PDF Gen"],
    live: "#",
    github: "#"
  },
  {
    id: 3,
    icon: "🔬",
    color: "rgba(34,211,238,.15)",
    category: "System",
    title: "Laboratory Information System",
    year: "2024",
    desc: "End-to-end lab management system for tracking samples, test orders, results reporting, and billing integration. Supports barcode scanning and HL7 standards.",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Redux", "Barcode"],
    live: "#",
    github: "#"
  },
  {
    id: 4,
    icon: "⚙️",
    color: "rgba(244,63,94,.15)",
    category: "ERP",
    title: "ERP Implementation & Config",
    year: "2023",
    desc: "Implemented and customized ERPNext for multiple clients including inventory, HR, accounting, and manufacturing modules. Built custom reports and integrations.",
    tags: ["ERPNext", "Python", "Frappe", "REST API", "MySQL"],
    live: "#",
    github: "#"
  },
  {
    id: 5,
    icon: "📦",
    color: "rgba(251,146,60,.15)",
    category: "Web App",
    title: "Inventory Management Dashboard",
    year: "2022",
    desc: "Real-time inventory tracking dashboard with stock alerts, supplier management, purchase orders, and analytics. Integrated with barcode scanner for warehouse operations.",
    tags: ["React.js", "Firebase", "Tailwind", "Chart.js", "Node.js"],
    live: "#",
    github: "#"
  }
];

export const experience = [
  {
    period: "03/2024 – Present",
    title: "Software Implementation Engineer",
    company: "NexGen Innovation Ltd.",
    desc: "Developing, implementing, and managing Hospital Information Systems (HIS) and ERP solutions for healthcare clients. Lead end-to-end system deployments including requirements gathering, configuration, and user training.",
    chips: ["HIS", "ERP", "React", "Node.js", "MongoDB", "System Integration"]
  },
  {
    period: "10/2025 – Present ",
    title: "ERPNext Functional Consultant & Project Coordinator",
    company: "Cloudy Camp Limited",
    desc: "Implemented and customized ERPNext for multiple enterprise clients. Managed project timelines, coordinated between technical teams and stakeholders, and delivered functional training to end users.",
    chips: ["ERPNext", "Odoo", "Frappe", "Python", "Project Management", "Client Training"]
  }
];
