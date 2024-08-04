"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "PurpleCat Next Store",
    description:
      "Skills and Technologies: Next.js, React, TypeScript, Tailwind CSS, Shadcn-Ui, Prisma, Supabase, Clerk, React-Share, Stripe",
    image: "/purplecat-next-store.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github/purplecat-next-store",
    previewUrl: "https://purplecat-next-store.vercel.app",
  },

  {
    id: 2,
    title: "PurpleCat Rental App",
    description:
      "Skills and Technologies: Next.js, React, TypeScript, Tailwind CSS, MongoDB, Next-auth, Cloudinary, React-share",
    image: "/property-rental-app.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/jluo-github/purplecat-rental",
    previewUrl: "https://purplecat-next-rental.vercel.app",
  },

  {
    id: 3,
    title: "PurpleCat Tasks App",
    description:
      "Skills and Technologies: React, Prisma, Tailwind CSS, React-Query, Clerk, Shadcn-UI, Recharts",
    image: "/purplecat-tasks.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/jluo-github/purplecat-tasks",
    previewUrl: "https://purple-cat-task.vercel.app",
  },

  {
    id: 4,
    title: "PurpleCat GPT App",
    description:
      "Skills and Technologies: Next.js, React, Tailwind CSS, DaisyUI, OpenAI, Prisma, Clerk",
    image: "/purplecat-gpt-app.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/jluo-github/pruplecat-gpt-app",
    previewUrl: "https://purplecat-gpt-app.vercel.app",
  },

  {
    id: 5,
    title: "Property Rental App",
    description:
      "Skills and Technologies: Next.js, React, Tailwind CSS, MongoDB, Next-auth, Cloudinary, React-share",
    image: "/property-rental-app.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl:
      "https://github.com/jluo-github/property-rental-app?tab=readme-ov-file",
    previewUrl: "https://property-rental-app-eta.vercel.app",
  },

  {
    id: 6,
    title: "TV Show App",
    description: "Skills and Technologies: React, Tailwind CSS, themoviedb API",
    image: "/TV-show-app.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github/tv-show-app",
    previewUrl: "https://tv-show-app-self.vercel.app",
  },

  {
    id: 7,
    title: "PurpleCat Bar",
    description:
      "Skills and Technologies: React, Vite, React-Query, react-toastify",
    image: "/purplecat-bar.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github/purplecat-bar",
    previewUrl: "https://vite-mixer.netlify.app",
  },

  {
    id: 8,
    title: "PCC Summer Project",
    description:
      "Skills and Technologies: React, Node.js, Express, MySQL, Sequelize, Bootstrap",
    image: "/PCC-Summer-Project.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/jluo-github/PCCsummer-project-client",
    previewUrl: "https://jluo-github.github.io/summer-project",
  },

  // {
  //   id: 9,
  //   title: "PurpleCat StayZen",
  //   description:
  //     "Skills and Technologies: Next.js, React, TypeScript, Tailwind CSS, Shadcd-Ui Clerk, Prisma, Supabase, Zod",
  //   image: "/project8.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/jluo-github/purplecat-next-stayzen",
  //   previewUrl: "https://github.com/jluo-github/purplecat-next-stayzen",
  // },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects">
      {" "}
      <h2 className="mb-8 mt-4 text-center text-4xl font-bold text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6  text-white ">
        {/* all */}
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* web */}
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* mobile */}
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      {/*  */}
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-6">
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            key={index}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <ProjectCard
              // key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default Projects;
