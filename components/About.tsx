"use client"; 
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const skillsData = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "React | Next.js | TypeScript",
      "Tailwind CSS | Shadcn | NextAuth",
      "JavaScript | HTML| CSS",
      "Node.js | Express | RESTful API",
      "Java | Spring Boot | Python",
      "MySQL | PostgreSQL | MongoDB",
      "Git | GitHub | Docker",
      "Prisma | Redux | Bootstrap",
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
      "ITIL® 4 Foundation - IT Service Management",
      " Software Development",
      "Full Stack Web Development",
      "Cybersecurity | System and Network Administration",
      "Business Software Specialist",
    ],
  },
];

type Skills = {
  title: string;
  id: string;
  content: string[];
};

const About = () => {
  const [skillId, setSkillId] = useState<Skills["id"]>(skillsData[0].id);

  return (
    <section id='about' className='py-24'>
      <div className='flex flex-col items-center gap-16 xl:flex-row xl:justify-center  text-center xl:text-left '>
        <Card className='xl:min-h-[500px]  border-none shadow-none  bg-transparent'>
          {/* heading */}
          <div className='flex w-full mx-auto lg:w-[85%] xl:w-full   xl:max-w-[620px] flex-col justify-start py-8 px-2'>
            <h2 className='text-4xl font-bold leading-normal text-violet-900 dark:text-white md:text-5xl lg:text-6xl md:leading-relaxed'>
              Building <span className='text-violet-500 dark:text-violet-400'>skills</span> and Pursuing{" "}
              <span className='text-violet-500 dark:text-violet-400'> Continuous </span>
              Growth{" "}
            </h2>
          </div>
        </Card>

        {/* skills */}
        <Card className='min-h-[500px] border-none shadow-none  bg-transparent'>
          {/* buttons */}
          <div className='flex items-center justify-center gap-8 py-4 xl:gap-16'>
            {skillsData.map((item, index) => (
              <Button
                key={index}
                onClick={() => {
                  setSkillId(item.id);
                }}
                variant='outline'
                size='lg'
                className={`${
                  item.id === skillId
                    ? "bg-violet-100 dark:bg-slate-800  shadow-violet-400  "
                    : "bg-violet-50  dark:bg-slate-950  dark:shadow-[0_2px_20px_-1px_rgba(0,0,0,0.1)] shadow-violet-300  "
                }text-violet-800 text-base border border-violet-200  dark:text-white shadow-xl dark:shadow-violet-400 hover:shadow-none hover:dark:shadow-none`}>
                {item.title}
              </Button>
            ))}
          </div>

          {/* content */}
          <div className='flex flex-col items-center gap-4 p-12 xl:items-start xl:gap-8'>
            {skillsData
              .filter((item) => item.id === skillId)
              .map((skill, index) => (
                <div className='flex flex-col gap-2 ' key={index}>
                  {skill.content.map((content, index) => (
                    <div className='text-xl font-semibold text-violet-800 dark:text-slate-400' key={index}>
                      {content}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </Card>
      </div>

      {/* about */}
      <div className='py-20 px-10 mx-auto'>
        {" "}
        <h2 className='pb-8 text-4xl font-bold text-violet-800 dark:text-slate-200'>About Me</h2>
        <p className='pb-4 text-base lg:text-lg text-violet-800 dark:text-slate-300'>
          I am a passion full-stack web developer who loves creating beautiful and functional websites. For me, design
          is not just about looks; it is about solving problems and making user experiences easy and enjoyable. I bring
          a commitment to great design and user-focused thinking to every project.
        </p>
        <p className='text-base lg:text-lg text-violet-800 dark:text-slate-300'>
          {" "}
          I have experience with JavaScript, React, Redux, Next.js, Tailwind CSS, Java, Spring Boot, Node.js, Express,
          MySQL, PostgreSQL, Prisma,Sequelize, HTML, CSS, Git, and GitHub. I have a strong foundation in web development
          and I am constantly learning new technologies to improve my skills. I enjoy working with other developers to
          create great websites and am always ready to take on new challenges to grow my abilities. I am hardworking and
          excited about opportunities to contribute to interesting projects. I look forward to working with you to
          create amazing websites.
        </p>
      </div>
    </section>
  );
};
export default About;
