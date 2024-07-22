"use client";

import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "./components/TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>React</li>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>Node.js</li>
        <li>RESTful API</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>HTML | CSS</li>
        <li>Tailwind</li>
        <li>Git | GitHub</li>
        <li></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        {" "}
        <li>Western Governor University </li>
        <div>B.S. Software Engineering</div>
        <li>Pasadena City College</li>
        <div>Computer Information</div>
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        {" "}
        <li>CompTIA A+ </li>
        <li>AWS Certified Cloud Practitioner </li>
        <li>ITIL4 Certificate in IT Service Management </li>
      </ul>
    ),
  },
];

const AboutSectionV0 = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      {/* skills */}
      <div className="items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image src="/about.png" width={500} height={500} alt="about image" />
        <div className="mt-4 flex h-full flex-col text-left md:mt-0">
          <div></div>

          <div className="mt-8 flex flex-row justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((item) => item.id == tab)?.content}
          </div>
        </div>
      </div>

      {/* about */}
      <div className="mb-16">
        {" "}
        <h2 className="mb-4  text-4xl font-bold text-white">About Me</h2>
        <p className="mb-4 text-base lg:text-lg">
          I am a full-stack web developer with a passion for creating beautiful
          and functional websites. I believe that design is about more than just
          making things look pretty; it is about solving problems and creating
          intuitive, enjoyable experiences for users. I always bring my
          commitment to design excellence and user-centered thinking to every
          project I work on.
        </p>
        <p className="text-base lg:text-lg">
          {" "}
          I have experience working with JavaScript, React, Redux, Next.js,
          Java, Spring Boot, Node.js, Express, MySQL, PostgreSQL, Sequelize,
          HTML, CSS and Git. I have a strong foundation in web development and I
          am constantly learning new technologies to improve my skills. I am a
          team player and I am always looking for opportunities to work with
          other developers to create amazing websites. I am a quick learner and
          I am always looking for new challenges to improve my skills. I am a
          hard worker and I am always looking for new opportunities to grow and
          improve my skills. I look forward to working with you to create
          amazing websites.
        </p>
      </div>
    </section>
  );
};
