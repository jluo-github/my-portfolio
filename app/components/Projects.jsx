"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

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

 const handleTagChange = (newTag) => {
  setTag(newTag);
 };

 const filteredProjects = projectsData.filter((project) =>
  project.tag.includes(tag)
 );

 return (
  <>
   {" "}
   <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
    My Projects
   </h2>
   <div className='text-white flex flex-row justify-center items-center gap-2  py-6 '>
    {/* all */}
    <ProjectTag
     onClick={handleTagChange}
     name='All'
     isSelected={tag === "All"}
    />
    {/* web */}
    <ProjectTag
     onClick={handleTagChange}
     name='Web'
     isSelected={tag === "Web"}
    />
    {/* mobile */}
    <ProjectTag
     onClick={handleTagChange}
     name='Mobile'
     isSelected={tag === "Mobile"}
    />
   </div>
   {/*  */}
   <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
    {filteredProjects.map((project) => (
     <ProjectCard
      key={project.id}
      imgUrl={project.image}
      title={project.title}
      description={project.description}
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}
     />
    ))}
   </ul>
  </>
 );
};
export default Projects;
