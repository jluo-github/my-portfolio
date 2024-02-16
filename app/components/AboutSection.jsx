"use client";

import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
 {
  title: "Skills",
  id: "skills",
  content: (
   <ul className='list-disc pl-2'>
    <li>JavaScript</li>
    <li>React</li>
    <li>Redux</li>
    <li>Next.js</li>
    <li>Java</li>
    <li>Spring Boot</li>
    <li>Node.js</li>
    <li>Express</li>
    <li>MySQL</li>
    <li>PostgreSQL</li>
    <li>Sequelize</li>
    <li>HTML/CSS</li>
    <li>Tailwind</li>
    <li>SCSS</li>
    <li>Git</li>
   </ul>
  ),
 },
 {
  title: "Education",
  id: "education",
  content: (
   <ul className='list-disc pl-2'>
    {" "}
    <li>Western Governor University </li>
    <li>B.S. Software Engineering</li>
    <li>Pasadena City College</li>
    <li>Computer Information</li>
   </ul>
  ),
 },

 {
  title: "Certifications",
  id: "certifications",
  content: (
   <ul className='list-disc pl-2'>
    {" "}
    <li>CompTIA A+ </li>
    <li>AWS Certified Cloud Practitioner </li>
    <li>ITIL4 Certificate in IT Service Management </li>
   </ul>
  ),
 },
];
const AboutSection = () => {
 const [tab, setTab] = useState("skills");
 const [isPending, startTransition] = useTransition();

 const handleTabChange = (id) => {
  startTransition(() => {
   setTab(id);
  });
 };

 return (
  <section className='text-white'>
   <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    <Image src='/about.png' width={500} height={500} alt='about image' />
    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
     <h2 className='text-4xl mt-4 font-bold text-white mb-4'>About Me</h2>
     <p className='text-base lg:text-lg'>
      I am a full-stack web developer with a passion for creating beautiful and
      functional websites. I have experience working with JavaScript, React,
      Redux, Next.js, Java, Spring Boot, Node.js, Express, MySQL, PostgreSQL,
      Sequelize, HTML, CSS and Git. I have a strong foundation in web
      development and I am constantly learning new technologies to improve my
      skills. I am a team player and I am always looking for opportunities to
      work with other developers to create amazing websites. I am a quick
      learner and I am always looking for new challenges to improve my skills. I
      am a hard worker and I am always looking for new opportunities to grow and
      improve my skills.
     </p>

     <div className='flex flex-row justify-start mt-8'>
      <TabButton
       selectTab={() => handleTabChange("skills")}
       active={tab === "skills"}>
       Skills
      </TabButton>

      <TabButton
       selectTab={() => handleTabChange("education")}
       active={tab === "education"}>
       Education
      </TabButton>

      <TabButton
       selectTab={() => handleTabChange("certifications")}
       active={tab === "certifications"}>
       Certifications
      </TabButton>
     </div>
     <div className='mt-8'>
      {TAB_DATA.find((item) => item.id == tab)?.content}
     </div>
    </div>
   </div>
  </section>
 );
};
export default AboutSection;
