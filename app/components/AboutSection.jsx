"use client";

import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
// import AnimatedNumbers from "react-animated-numbers";
import { motion, useInView } from "framer-motion";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "JavaScript| HTML| CSS",
      "React | Redux | Next.js",
      "Git | GitHub | Docker",
      "Tailwind CSS | Bootstrap",
      "Java | Spring Boot | Maven",
      "Node.js | Express ",
      "MySQL | PostgreSQL | MongoDB",
      "RESTful API | Prisma | Sequelize",
    ],
    icons: [
      <FaHtml5 key="html" />,
      <FaCss3 key="css" />,
      <FaJs key="js" />,
      <FaReact key="react" />,
      <SiNextdotjs key="next" />,
      <SiFramer key="framer" />,
      <FaWordpress key="wordpress" />,
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "B.S. Software Engineering",
      "- Western Governor University ",
      "Computer Information",
      " - Pasadena City College ",
    ],
  },

  {
    title: "Certifications",
    id: "certifications",
    content: [
      "CompTIA A+",
      "AWS Certified Cloud Practitioner",
      "ITIL4 Certificate in IT Service Management",
      " Software Development",
      "Full Stack Web Development",
      "Cybersecurity | System and Network Administration",
      "Business Software Specialist",
    ],
  },
];

const AboutSection = () => {
  const [index, setIndex] = useState(0);
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="bg-primary/30 h-full py-32 text-center xl:text-left">
        {/* circles */}
        {/* <div className="w=[200px] absolute -left-4 top-3/4 z-10 animate-pulse mix-blend-color-dodge duration-75 xl:w-[300px] ">
          <Image
            src="/about.png"
            width={200}
            height={200}
            className="h-full w-full"
            alt="logo"
          ></Image>
        </div> */}
        {/* avatar img */}
        <motion.div
          className="absolute -left-[370px] bottom-0 hidden xl:flex "
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {/* <Avatar image/> */}
        </motion.div>

        <div className="container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row">
          {/* text */}
          <div className="flex flex-1 flex-col justify-center">
            <h2 className="mb-4 text-[35px] font-semibold leading-tight md:text-[54px] md:leading-[1.3]">
              Building <span className="text-primary-400">skills</span> and
              Pursuing <span className="text-primary-400">excellence</span>{" "}
            </h2>
            {/* <p className="mx-auto mb-6 max-w-[500px] px-2 xl:mx-0 xl:mb-12 xl:px-0">
              {" "}
            </p> */}
          </div>

          {/* info */}
          {/* <div className="flex h-[480px] w-full flex-col xl:max-w-[48%]"></div> */}
          <div>
            <div className="mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8">
              {TAB_DATA.map((item, itemIndex) => {
                return (
                  <div
                    onClick={() => setIndex(itemIndex)}
                    key={itemIndex}
                    className={`${index === itemIndex && "text-primary-400 after:w-[100%] after:bg-secondary-400 after:transition-all after:duration-300"} relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>

            {/* skill content */}
            <div className="flex flex-col items-center gap-y-2  py-2 xl:items-start xl:gap-y-4 xl:py-6">
              {" "}
              {TAB_DATA[index].content.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex max-w-max flex-1 flex-col items-center gap-x-2 text-white/80 md:flex-row"
                  >
                    {/* title */}
                    <div className="md-2 font-light md:mb-0">{item}</div>
                    {/* icon */}
                    <div className="flex gap-x-4">
                      {item.icons?.map((icon, iconIndex) => {
                        return (
                          <div
                            key={iconIndex}
                            className="text-2xl text-white transition-all duration-500 "
                          >
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* old section */}
      {/* skills */}
      <div></div>
      {/* about */}
      <div className="mb-16">
        {" "}
        <h2 className="mb-4  text-4xl font-bold text-white">About Me</h2>
        <p className="mb-4 text-base lg:text-lg">
          I am a passion full-stack web developer who loves creating beautiful
          and functional websites. For me, design is not just about looks; it is
          about solving problems and making user experiences easy and enjoyable.
          I bring a commitment to great design and user-focused thinking to
          every project.
        </p>
        <p className="text-base lg:text-lg">
          {" "}
          I have experience with JavaScript, React, Redux, Next.js, Tailwind
          CSS, Java, Spring Boot, Node.js, Express, MySQL, PostgreSQL,
          Prisma,Sequelize, HTML, CSS, Git, and GitHub. I have a strong
          foundation in web development and I am constantly learning new
          technologies to improve my skills. I enjoy working with other
          developers to create great websites and am always ready to take on new
          challenges to grow my abilities. I am hardworking and excited about
          opportunities to contribute to interesting projects. I look forward to
          working with you to create amazing websites.
        </p>
      </div>
    </section>
  );
};
export default AboutSection;
