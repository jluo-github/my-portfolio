"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Project 1",
    description: "This is a description of the project",
    image: "/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github",
    previewUrl: "https://www.linkedin.com/in/jluo-github/",
  },

  {
    id: 2,
    title: "React Project 2",
    description: "This is a description of the project",
    image: "/project2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/jluo-github",
    previewUrl: "https://www.linkedin.com/in/jluo-github/",
  },

  {
    id: 3,
    title: "React Project 3",
    description: "This is a description of the project",
    image: "/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github",
    previewUrl: "https://www.linkedin.com/in/jluo-github/",
  },

  {
    id: 4,
    title: "React Project 4",
    description: "This is a description of the project",
    image: "/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github",
    previewUrl: "https://www.linkedin.com/in/jluo-github/",
  },

  {
    id: 5,
    title: "React Project 5",
    description: "This is a description of the project",
    image: "/project5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github",
    previewUrl: "https://www.linkedin.com/in/jluo-github/",
  },

  {
    id: 6,
    title: "React Project 6",
    description: "This is a description of the project",
    image: "/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github",
    previewUrl: "https://www.linkedin.com/in/jluo-github/",
  },

  {
    id: 7,
    title: "React Project 7",
    description: "This is a description of the project",
    image: "/project7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github",
    previewUrl: "https://www.linkedin.com/in/jluo-github/",
  },

  {
    id: 8,
    title: "React Project 8",
    description: "This is a description of the project",
    image: "/project8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jluo-github",
    previewUrl: "https://www.linkedin.com/in/jluo-github/",
  },
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
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
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
