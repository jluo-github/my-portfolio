export type NavLink = {
  name: string;
  href: string;
};

export const navLink: NavLink[] = [
  { name: "Certifications", href: "/certifications" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};
export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Soft & Sweet Home",
    description:
      "Skills and Technologies: Next.js, React, TypeScript, Tailwind CSS, Shadcn-Ui, Prisma, Zod, Supabase, Clerk, Stripe, GitHub Actions",
    image: "/purplecat-next-store.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github/soft-sweet-home",
    previewUrl: "https://soft-sweet-home.vercel.app",
  },

  {
    id: 2,
    title: "Property Rental App",
    description:
      "Skills and Technologies: Next.js, React, TypeScript, Tailwind CSS, MongoDB/Mongoose, Next-auth, Cloudinary",
    image: "/property-rental-app.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/jluo-github/property-rental-app",
    previewUrl: "https://purplecat-property-rental.vercel.app",
  },
  {
    id: 3,
    title: "StayZen",
    description:
      "Skills and Technologies: Next.js, React, TypeScript, Tailwind CSS, Shadcd-Ui, Clerk, Prisma, Zod, Supabase, Zustand, Stripe ",
    image: "/purplecat-stayzen.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github/purplecat-stayzen",
    previewUrl: "https://purplecat-stayzen.vercel.app",
  },

  {
    id: 4,
    title: "InvoManager App",
    description:
      "Skills and Technologies: Next.js, React, TypeScript, Tailwind CSS, Shadcd-Ui, Drizzle, Clerk, Stripe, Resend",
    image: "/invomanager-app.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github/invomanager",
    previewUrl: "https://invomanager.vercel.app",
  },

  {
    id: 5,
    title: "GPT App",
    description:
      "Skills and Technologies: Next.js, React, TypeScript, Tailwind CSS, DaisyUI, OpenAI, Prisma, MongoDB, Tanstack/React-Query, Clerk",
    image: "/GPTcat-app.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/jluo-github/purplecat-gpt-app",
    previewUrl: "https://purplecat-gpt-app.vercel.app",
  },

  {
    id: 6,
    title: "Tasks App",
    description:
      "Skills and Technologies: Next.js, React, TypeScript, Prisma, Tailwind CSS, React-Query, Clerk, Shadcn-UI, Recharts",
    image: "/purplecat-tasks.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/jluo-github/purplecat-tasks",
    previewUrl: "https://purple-cat-task.vercel.app",
  },

  // {
  //   id: 9,
  //   title: "PurpleCat Bar",
  //   description: "Skills and Technologies: React, Styled-components, React-Query, axios",
  //   image: "/purplecat-bar.jpg",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/jluo-github/purplecat-bar",
  //   previewUrl: "https://vite-mixer.netlify.app",
  // },

  {
    id: 7,
    title: "TV Show App",
    description: "Skills and Technologies: React, Tailwind CSS, themoviedb API",
    image: "/TV-show-app.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github/tv-show-app",
    previewUrl: "https://tv-show-app-self.vercel.app",
  },

  {
    id: 8,
    title: "PCC Summer Project",
    description:
      "Skills and Technologies: React, Node.js, Express, MySQL, Sequelize, Bootstrap, sass",
    image: "/PCC-Summer-Project.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/jluo-github/PCCsummer-project-client",
    previewUrl: "https://jluo-github.github.io/summer-project",
  },
  // {
  //   id: 9,
  //   title: "Property Rental App",
  //   description: "Skills and Technologies: Next.js, React, Tailwind CSS, MongoDB, Next-auth, Cloudinary, React-share",
  //   image: "/property-rental-app.jpg",
  //   tag: ["All", "Web", "Mobile"],
  //   gitUrl: "https://github.com/jluo-github/rental-app",
  //   previewUrl: "https://rental-app-eta.vercel.app",
  // },
];
export type SkillsData = {
  title: string;
  id: string;
  content: string[];
};
export const skillsData: SkillsData[] = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "React | Next.js | TypeScript",
      "Tailwind CSS | Shadcn | NextAuth",
      "JavaScript | HTML | CSS",
      "Node.js | Express | RESTful API ",
      "GraphQL | Apollo | Bootstrap | Redux",
      "Java | Spring Boot | Python",
      "MySQL | PostgreSQL | MongoDB | Prisma ",
      "Git | GitHub | Docker | Vitest | Jest",
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "B.S. Software Engineering",
      "- Western Governors University ",
      "Computer Information Systems",
      " - Pasadena City College  ",
    ],
  },

  {
    title: "Certifications",
    id: "certifications",
    content: [
      "CompTIA A+",
      "AWS Certified Cloud Practitioner",
      " Front-End Developer ",
      " Back-End Developer ",
      "Full Stack Web Development",
      " Software Development ",
      "ITIL®4 Foundation - IT Service Management",
      "CISCO Enterprise Network Associate",
      " Cybersecurity ",
      " CISCO CCNAv7 ",
      "CISCO CyberOps Associate",
      "Help Desk / User Support",
      "Business Software Specialist",
      "System and Network Administration",
    ],
  },
];

type SkillsIcon = {
  name: string;
  icon: string;
};
export const skillsIcon: SkillsIcon[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "RESTful API", icon: "rest" },
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Docker", icon: "docker" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "Prisma", icon: "prisma" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MySQL", icon: "mysql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Python", icon: "python" },
];

type Skills = string[];
export const skills: Skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "Node.js",
  "Express",
  "RESTful API",
  "Java",
  "Spring Boot",
  "Git",
  "GitHub",
  "Docker",
  "HTML",
  "CSS",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Python",
];

export type CertType = {
  id: string;
  title: string;
  image: string;
  description: string;
};

export const certs: CertType[] = [
  {
    id: "1",
    title: "AWS Certified Cloud Practitioner",
    image: "/images/aws-ccp.webp",
    description:
      "Demonstrates foundational knowledge of AWS Cloud services, including cloud concepts, security, technology, and billing.",
  },
  {
    id: "2",
    title: "CompTIA A+",
    image: "/images/comptia-a.webp",
    description:
      "Validates skills required for IT support roles, covering hardware, software, troubleshooting, networking, and security.",
  },
  {
    id: "3",
    title: "Front-End Developer",
    image: "/images/frontend-developer.webp",
    description:
      "Focuses on building responsive and interactive user interfaces using HTML, CSS, JavaScript, and React.",
  },
  {
    id: "4",
    title: "Back-End Developer",
    image: "/images/backend-developer.webp",
    description:
      "Acquired back-end skills in Java, SQL, design patterns, Spring Framework, MySQL, and mobile application development.",
  },
  {
    id: "5",
    title: "Full Stack Web Development",
    image: "/images/fullstack-development.webp",
    description:
      "Covers developing, testing, deploying responsive user-centered web applications using HTML, CSS, JavaScript, React, Node.js, SQL, and Python.",
  },
  {
    id: "6",
    title: "Cybersecurity",
    image: "/images/cybersecurity.webp",
    description:
      "Focuses on enterprise system and network administration, including securing networks, and conducting digital investigations.",
  },
  {
    id: "7",
    title: "CISCO Enterprise Network Associate",
    image: "/images/enterprise-network-associate.webp",
    description:
      "Covers skills for designing, configuring, and troubleshooting enterprise-level networks with a focus on Cisco technologies.",
  },

  {
    id: "8",
    title: "System & Network Administration",
    image: "/images/system-network-admin.webp",
    description:
      "Focusing on installing, configuring, and troubleshooting enterprise network and operating system infrastructures.",
  },

  {
    id: "9",
    title: "Help Desk / User Support",
    image: "/images/help-desk-user-support.webp",
    description:
      "Focuses on installing, configuring, and troubleshooting hardware and software in networked environments.",
  },

  {
    id: "10",
    title: "Software Development",
    image: "/images/software-development.webp",
    description:
      "Focuses on analyzing problems, designing algorithms, and creating applications using Python, C++, Java, and SQL.",
  },
  {
    id: "11",
    title: "Business Software Specialist",
    image: "/images/business-software-specialist.webp",
    description:
      "Focuses on solving business problems using word processing, spreadsheets, presentations, databases, and content management.",
  },
  {
    id: "12",
    title: "CISCO CCNAv7",
    image: "/images/ccnav7.webp",
    description:
      "Covers networking fundamentals, including routing, switching, and network security, using Cisco's latest technologies.",
  },

  {
    id: "13",
    title: "CISCO CyberOps Associate",
    image: "/images/cyberops-associate.webp",
    description:
      "Covers cybersecurity operations, including monitoring, detecting, and responding to network threats.",
  },

  {
    id: "14",
    title: "ITIL®4 Foundation in IT Service Management",
    image: "/images/itil4-foundation.webp",
    description:
      "Provides a comprehensive overview of IT service management practices, emphasizing the ITIL framework for delivering value to businesses.",
  },
];
