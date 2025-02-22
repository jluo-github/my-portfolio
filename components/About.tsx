"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { skillsData, type SkillsData } from "@/lib/data";

const About = () => {
  const [skillId, setSkillId] = useState<SkillsData["id"]>(skillsData[0].id);

  return (
    <section id='about' className='py-24'>
      <div className='flex flex-col items-center gap-16 xl:flex-row xl:justify-center xl:gap-4 text-center xl:text-left '>
        <Card className='xl:min-h-[500px] xl:w-1/2 border-none shadow-none  bg-transparent'>
          {/* heading */}
          <div className='flex w-full mx-auto lg:w-[85%] xl:w-full xl:max-w-[620px] flex-col justify-start py-8 px-2'>
            <h2 className='text-3xl sm:text-4xl font-bold leading-normal text-violet-900 dark:text-white md:text-5xl lg:text-6xl md:leading-relaxed'>
              Building{" "}
              <span className='text-violet-500 dark:text-violet-400'>skills</span> and
              Pursuing{" "}
              <span className='text-violet-500 dark:text-violet-400'> Continuous </span>
              Growth{" "}
            </h2>
          </div>
        </Card>

        {/* skills */}
        <Card className='min-h-[500px] flex flex-col xl:w-1/2 items-center justify-start border-none shadow-none bg-transparent'>
          {/* buttons */}
          <div
            className='flex justify-center sm:gap-6 md:gap-8 py-4 xl:gap-16'
            aria-live='polite'>
            {skillsData.map((item, index) => (
              <Button
                key={index}
                onClick={() => {
                  setSkillId(item.id);
                }}  
                variant='outline'
                aria-pressed={item.id === skillId}
                size='lg'
                className={`${
                  item.id === skillId
                    ? "bg-violet-100 dark:bg-slate-900 shadow-violet-400"
                    : "bg-violet-50  dark:bg-slate-950  dark:shadow-[0_2px_20px_-1px_rgba(0,0,0,0.1)] shadow-violet-300"
                }text-violet-800 text-xs sm:text-base border border-violet-200  dark:text-white shadow-xl dark:shadow-violet-400 hover:scale-105 active:scale-90 transition-all focus-visible:ring-4 focus-visible:ring-violet-500`}>
                {item.title}
              </Button>
            ))}
          </div>

          {/* content */}
          <div className='flex flex-col gap-2 p-12 xl:py-12 xl:p-4 xl:gap-3'>
            {skillsData
              .filter((item) => item.id === skillId)
              .map((skill, index) => (
                <div key={index}>
                  {skill.content.map((content, index) => (
                    <div
                      className='text-base leading-6 sm:leading-8 sm:text-xl font-semibold text-violet-800 dark:text-slate-400'
                      key={index}>
                      {content}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </Card>
      </div>

      {/* about */}
      <div className='py-20 px-10 mx-auto max-w-6xl'>
        <h2 className='pb-8 text-4xl font-bold text-violet-800 dark:text-slate-200'>
          About Me
        </h2>
        <p className='pb-4 text-base lg:text-lg text-violet-800 dark:text-slate-300'>
          I am a passionate full-stack web developer dedicated to building beautiful,
          functional websites. For me, design goes beyond aesthetics, it&apos;s about
          solving problems and creating seamless user experiences. I bring a strong focus
          on user-centric design and problem-solving to every project I work on.
        </p>
        <p className='pb-4 text-base lg:text-lg text-violet-800 dark:text-slate-300'>
          I have hands-on experience with Next.js, TypeScript, React, Redux, Tailwind CSS,
          Shadcn, NextAuth, JavaScript, Node.js, Express, RESTful APIs, GraphQL, Apollo,
          Java, Spring Boot, Python, MySQL, PostgreSQL, MongoDB, Prisma, Git, GitHub,
          Docker, Vitest, Jest, HTML, CSS, and Bootstrap. With a solid foundation in web
          development, I am always eager to learn and adopt new technologies to enhance my
          skills.
        </p>
        <p className='pb-4 text-base lg:text-lg text-violet-800 dark:text-slate-300'>
          I enjoy collaborating with other developers to build great websites and am
          always eager to take on new challenges to grow my skills. I&apos;m hardworking
          and excited about opportunities to contribute to interesting projects. I look
          forward to working with you to create amazing websites.
        </p>
      </div>
    </section>
  );
};

export default About;
