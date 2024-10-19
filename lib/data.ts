export type NavLink = {
  name: string;
  href: string;
};

export const navLink: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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

type SkillType = {
  name: string;
  icon: string;
};
export const skills: SkillType[] = [
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

type skillsData = string[];
export const skillsData: skillsData = [
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
