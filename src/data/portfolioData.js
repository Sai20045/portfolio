// Central Portfolio Configuration Data for Sai Pradeep S
// Updated with real data extracted from resume PDF & user inputs

export const personalInfo = {
  name: "Sai Pradeep S",
  role: "Entry Level Full Stack Developer | AI Engineer | Software Developer",
  headline: "Entry Level Full Stack Developer | AI Engineer | Software Developer | BE CSE Graduate",
  status: "Available for Hire • Immediate Joiner",
  location: "Chennai, Tamil Nadu, India",
  email: "saipradeep2004@gmail.com",
  phone: "+91 8072677544",
  github: "https://github.com/Sai20045",
  linkedin: "https://www.linkedin.com/in/sai-pradeep-00999a282",
  profileImage: "/profile.jpg",
  resumePdf: "/Sai_Pradeep_Resume.pdf",
  about: `Enthusiastic Computer Science Engineering (BE CSE) graduate from Agni College of Technology (Anna University) with an 8.0 CGPA, Full Stack Developer and AI Engineer.

I possess strong foundational skills in software development, web engineering, and programming. Proficient in Python, JavaScript, Django, FastAPI, React.js, MySQL, SQL, HTML, CSS, Tailwind CSS, Bootstrap, and REST APIs, with hands-on experience building scalable applications, AI surveillance web dashboards, and enterprise CRUD portals.

Passionate about building scalable, efficient, user-focused software solutions while continuously adopting emerging technologies.`,
  highlights: [
    "BE Computer Science & Engineering (8.0 CGPA) • Anna University",
    "Finalist at National Level Ujjain Mahakumbh Hackathon 2025 (Govt. of MP)",
    "Full Stack Delivery Intern at Remote Virtusa Consulting Services (2026)",
    "Certified Python Full Stack Developer (QSpiders Training Institute)",
    "Built Guardian AI Safety Dashboard & Holiday Tour Booking Platform",
    "Proficient in Python, JavaScript ES6+, Django, SQL, MySQL, HTML5, CSS3, Bootstrap 5, React.js, FastAPI & REST APIs"
  ]
};

export const statsData = [
  { label: "Engineering CGPA", value: "8.0", suffix: "", subtext: "BE CSE Anna University" },
  { label: "Hackathon Award", value: "Finalist", suffix: "", subtext: "Mahakumbh Hackathon 2025" },
  { label: "Virtusa Internship", value: "Delivery Intern", suffix: "", subtext: "Full Stack Remote (2026)" },
  { label: "Core Skills", value: "100%", suffix: "", subtext: "Python, Django, React, SQL" }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "HTML5", level: "Advanced", icon: "FileCode", experience: "Semantic Web Structure" },
      { name: "CSS3", level: "Advanced", icon: "Palette", experience: "Modern Responsive Styling" },
      { name: "JavaScript (ES6+)", level: "Proficient", icon: "Code2", experience: "Core & Async JS" },
      { name: "React.js", level: "Proficient", icon: "Atom", experience: "Hooks, SPA & Components" },
      { name: "Bootstrap", level: "Proficient", icon: "Palette", experience: "Responsive Grid Layouts" },
      { name: "Tailwind CSS", level: "Proficient", icon: "Palette", experience: "Utility-First Styling" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Python", level: "Advanced", icon: "Terminal", experience: "Core, OOP & Scripting" },
      { name: "Django", level: "Proficient", icon: "Layers", experience: "MVC & REST Framework (DRF)" },
      { name: "FastAPI", level: "Proficient", icon: "Zap", experience: "High Performance Async APIs" },
      { name: "REST APIs", level: "Proficient", icon: "Radio", experience: "JSON Serializers & Endpoints" }
    ]
  },
  {
    id: "database",
    title: "Database Engineering",
    icon: "Database",
    skills: [
      { name: "SQL", level: "Advanced", icon: "DatabaseZap", experience: "Relational Queries & Joins" },
      { name: "MySQL", level: "Proficient", icon: "HardDrive", experience: "Database Schema Design" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Proficient", icon: "GitBranch", experience: "Version Control & CI/CD" },
      { name: "Figma", level: "Proficient", icon: "Palette", experience: "UI/UX Mockups" },
      { name: "Visual Studio Code", level: "Proficient", icon: "Box", experience: "Primary IDE & Extensions" },
      { name: "Postman", level: "Proficient", icon: "Send", experience: "API Testing & Collection" }
    ]
  }
];

export const projectsData = [
  {
    id: "guardian-ai",
    title: "Guardian AI – Unified AI Safety & Recovery System",
    featured: true,
    category: "Full Stack & AI",
    shortDescription: "A real-time AI surveillance web application built for threat detection, face recognition, emotion analysis, and panic alert visualization for mass gatherings.",
    fullDescription: "Award-winning national hackathon finalist project! Built a full-stack web application using Python Flask APIs and React.js frontend for live camera monitoring. Integrated InsightFace for face recognition, YOLOv8 for threat detection, DeepFace for panic emotion analysis, and Librosa for audio threat alerts. Features an edge-processing local architecture for fast real-time inference.",
    image: "/projects/task_management.png",
    technologies: ["Python", "Flask", "React.js", "Tailwind CSS", "YOLOv8", "DeepFace", "InsightFace", "OpenCV", "MongoDB"],
    githubUrl: "https://github.com/saipradeep-dev/guardian-ai",
    liveUrl: "#",
    keyFeatures: [
      "Real-time AI Camera Surveillance Dashboard (React.js & Flask)",
      "YOLOv8 Object Detection for Suspicious Weapon & Activity Detection",
      "Face Recognition using InsightFace & ArcFace Models",
      "Panic Emotion & Scream Audio Detection (DeepFace + Librosa)",
      "Local Edge-Processing System for Fast AI Inference Response",
      "Honored as Finalist at National Level Ujjain Mahakumbh Hackathon 2025"
    ],
    architecture: "Python Flask REST microservice connected to OpenCV/YOLOv8 AI engine and React.js SPA dashboard backed by MongoDB."
  },
  {
    id: "holiday-tour-booking",
    title: "Holiday Tour Booking Web Application",
    featured: true,
    category: "Full Stack",
    shortDescription: "A responsive full-stack holiday tour booking web application that allows users to explore destinations, view tour packages, register/login, and interact with a modern travel booking interface.",
    fullDescription: "Built with Django and JavaScript, this application delivers a seamless tour booking platform. It features user authentication, dynamic destination filtering, custom itinerary view, real-time availability checks, and responsive booking forms backed by a relational SQL database.",
    image: "/projects/holiday_tour_booking.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Django", "SQL", "REST API"],
    githubUrl: "https://github.com/Sai20045/holiday-tour-booking",
    liveUrl: "#",
    keyFeatures: [
      "User Registration & Authentication System (Login/Logout)",
      "Interactive Destination Showcase & Package Search Filters",
      "Dynamic Tour Details Page with Pricing Breakdown",
      "RESTful API endpoints for Tour CRUD operations",
      "Responsive Layout tailored for Mobile and Desktop",
      "SQL Database Schema with foreign key relations for bookings"
    ],
    architecture: "MVC pattern using Django backend with custom JavaScript frontend interactions consuming REST API endpoints."
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    featured: false,
    category: "Backend / Full Stack",
    shortDescription: "A web application for managing employee directory, payroll records, and department roles using robust backend APIs.",
    fullDescription: "Designed for organizational HR workflow management. Provides backend API endpoints to handle employee onboarding, role assignments, salary structure tracking, and departmental reports.",
    image: "/projects/employee_management.png",
    technologies: ["Python", "FastAPI", "Django", "MySQL", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Sai20045/employee-management-system",
    liveUrl: "#",
    keyFeatures: [
      "Employee Directory with Department & Role Badges",
      "Salary Structure & Onboarding Records Management",
      "Secure RESTful API Endpoints with JSON payloads",
      "Database Queries optimized for fast retrieval",
      "Clean UI Dashboard Interface"
    ],
    architecture: "Python Backend API service interacting with MySQL relational database."
  }
];

export const experienceData = [
  {
    role: "Full Stack Delivery Intern",
    organization: "Virtusa Consulting Services Pvt. Ltd.",
    period: "2026",
    location: "Remote Mode",
    type: "Corporate Internship",
    badge: "Industry Internship",
    summary: "Professional software development internship focused on developing responsive full-stack web applications, REST APIs, database management, and remote team collaboration.",
    skillsCovered: [
      "Full-Stack Web App Development (Python, JS, Django, React.js)",
      "RESTful API Design & Integration for Frontend-Backend Communication",
      "Database Operations (MySQL / SQL Optimization)",
      "Git & GitHub Version Control in Remote Team Workflow",
      "Agile Development Practices & Performance Debugging",
      "Responsive UI Design using HTML5, CSS3, Bootstrap & React"
    ],
    highlights: [
      "Developed responsive web applications consuming custom backend REST APIs.",
      "Collaborated remotely with engineering teams following Agile sprint cadences.",
      "Assisted in debugging, automated testing, and backend performance tuning."
    ]
  },
  {
    role: "Python Full Stack Development Trainee",
    organization: "QSpiders Training Institute",
    period: "Certified Professional Training",
    location: "In-Person (Chennai)",
    type: "Full Stack Program",
    badge: "Certified Training",
    summary: "Completed comprehensive hands-on training covering end-to-end Python Full Stack web development, OOP design patterns, and database engineering.",
    skillsCovered: [
      "Python Core & Advanced OOP Concepts",
      "Web Technologies: HTML5, CSS3, JavaScript (ES6+), Bootstrap",
      "Backend Frameworks: Django & Django REST Framework (DRF)",
      "Database Engineering: SQL Queries, Normalization, MySQL",
      "Frontend Framework: React.js Basics & Component Architecture",
      "Version Control: Git CLI & GitHub Collaboration"
    ],
    highlights: [
      "Successfully built and deployed full-stack web applications from scratch.",
      "Mastered writing efficient SQL queries and backend API endpoints."
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering (CSE)",
    college: "Agni College of Technology | Anna University",
    year: "2022 - 2026",
    score: "8.0 CGPA",
    status: "Graduated 2026",
    highlights: [
      "Studied Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Software Engineering.",
      "Completed National Level Hackathon finalist project Guardian AI.",
      "Active participant in technical coding symposiums and web development challenges."
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC - XII)",
    field: "State Board of Tamil Nadu (Science Stream)",
    college: "Government Higher Secondary School",
    year: "2021 - 2022",
    score: "",
    status: "Completed",
    highlights: [
      "Strong foundation in Mathematics, Physics, Chemistry, and Computer Science."
    ]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC - X)",
    field: "State Board of Tamil Nadu",
    college: "Government Higher Secondary School",
    year: "2019 - 2020",
    score: "",
    status: "Completed",
    highlights: [
      "Academic excellence in Science and Mathematics."
    ]
  }
];

export const certificationsData = [
  {
    title: "Finalist - Ujjain Mahakumbh Hackathon 2025",
    issuer: "Dept. of Science & Tech, Govt. of Madhya Pradesh",
    date: "2025",
    credentialId: "HACK-2025-UMH-042",
    skills: ["AI Surveillance", "Python", "Flask", "React.js", "Computer Vision", "YOLOv8"],
    link: "#",
    verified: true
  },
  {
    title: "Python Full Stack Development",
    issuer: "QSpiders Training Institute",
    date: "Certified 2026",
    credentialId: "QSP-PY-FS-2026-SP",
    skills: ["Python", "Django", "JavaScript", "React.js", "SQL", "MySQL", "REST APIs"],
    link: "#",
    verified: true
  },
  {
    title: "Python 3.x Programming Course",
    issuer: "Skill Rack",
    date: "2025",
    credentialId: "SR-PY3-8892",
    skills: ["Python 3.x", "Data Structures", "Algorithms", "Problem Solving"],
    link: "#",
    verified: true
  },
  {
    title: "Python for Beginners",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-PY-BEG-4412",
    skills: ["Python Core", "OOP", "Basic Scripting"],
    link: "#",
    verified: true
  }
];

export const codingJourneyData = {
  statement: "I believe consistent practice and building real-world projects are the best ways to continuously grow as a full-stack software developer.",
  stats: [
    { label: "Public Repositories", value: "15+" },
    { label: "Engineering CGPA", value: "8.0" },
    { label: "Full Stack Projects", value: "3 Major" },
    { label: "Hackathon Award", value: "National Finalist" }
  ],
  githubProfileUrl: "https://github.com/Sai20045"
};
