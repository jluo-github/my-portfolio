"use client";

import { projectsData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id='projects' className='py-28 '>
      <div>
        <h2 className='pb-8 text-center text-4xl font-bold text-violet-800 dark:text-slate-200'>
          Projects
        </h2>
      </div>

      <div className='mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-12 p-6 md:flex-row md:p-8'>
        <div
          ref={ref}
          className='grid grid-cols-1 w-full gap-12 md:gap-16 md:grid-cols-2 xl:grid-cols-3'>
          {/* projects card*/}
          {projectsData.map((project, index) => (
            <motion.div
              className='flex-wrap flex  md:flex-row flex-col'
              variants={cardVariants}
              initial='initial'
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              key={project.id}>
              {" "}
              <Card className=' bg-violet-100 dark:bg-slate-900 shadow-xl shadow-violet-300 dark:shadow-slate-400 border-none '>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>

                <CardContent className='grid gap-2 group'>
                  <Link
                    href={project.previewUrl}
                    className='focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none'
                    target='_blank'
                    aria-label={`Navigate to ${project.title} website`}>
                    <Image
                      alt={`${project.title} project preview`}
                      className='transform group-hover:scale-110 transition-transform duration-700 shadow-xl shadow-violet-300 dark:shadow-xl dark:shadow-slate-400/[0.5] aspect-square w-full rounded-md object-cover focus-visible:outline-none'
                      height='300'
                      width='300'
                      src={project.image}
                    />
                  </Link>

                  <div className='flex items-center justify-end gap-16 mt-8 mx-4'>
                    <Button
                      asChild
                      aria-label={`Navigate to ${project.title} github repository button`}
                      size='icon'
                      variant='link'
                      className='shadow-xl hover:scale-110 active:scale-95 transition-all shadow-violet-500 dark:shadow-violet-300 dark:text-violet-700 rounded-full focus-visible:ring-4 focus-visible:ring-violet-400 focus-visible:outline-none'>
                      <Link
                        href={project.gitUrl}
                        target='_blank'
                        className='focus-visible:outline-none'
                        aria-label={`Navigate to ${project.title} github repository`}>
                        <FaGithub className='w-10 h-10' />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      size='icon'
                      variant='link'
                      className='dark:shadow-lg shadow-xl hover:scale-110 active:scale-95 transition-all shadow-violet-400 dark:shadow-violet-300  dark:text-violet-500 rounded-full focus-visible:ring-4 focus-visible:ring-violet-500 focus-visible:outline-none'>
                      <Link
                        href={project.previewUrl}
                        target='_blank'
                        className='focus-visible:outline-none'
                        aria-label={`Navigate to ${project.title} website`}>
                        <CgWebsite className='h-10 w-10 text-muted-foreground' />
                      </Link>
                    </Button>
                  </div>
                  <div>
                    {" "}
                    <CardDescription className='text-lg py-4'>
                      {project.description}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
