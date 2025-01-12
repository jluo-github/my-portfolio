"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BorderMagic from "./ui/border-magic";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Hero = () => {
  return (
    <header className='pt-20 px-4 sm:px-6 lg:px-8 mx-auto'>
      {" "}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-12 md:gap-x-4 lg:gap-x-8'>
        {/* text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-2  my-4 w-full place-self-center justify-self-start text-center sm:text-left'>
          {/* heading */}
          <h1
            className='mb-2 text-3xl md:text-4xl font-extrabold text-violet-800 dark:text-white  sm:text-3xl lg:text-5xl xl:text-7xl lg:leading-normal'
            aria-label="Hello, I'm Jin, a Full-Stack Software Developer">
            <span className='bg-gradient-to-r from-violet-600 to-pink-500 dark:from-violet-500 dark:to-pink-300 bg-clip-text text-transparent'>
              Hello, I&apos;m{" "}
            </span>
            <br />
            {/* type animation */}
            <TypeAnimation
              sequence={["Jin", 1000, "a Full-Stack", 1000, "Software Developer", 1000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className='py-8 px-4 md:py-12 text-base text-violet-800 dark:text-slate-400 md:text-lg lg:text-xl'>
            As a full-stack software developer, I am dedicated to turning ideas into
            reality. I am passionate about continuous learning and always eager to adopt
            new technologies to expand my skills. With a strong commitment to teamwork and
            collaboration, I thrive in environments where I can contribute to and learn
            from diverse projects.
          </p>

          {/* buttons */}
          <div className='flex gap-8 flex-col m-12 sm:flex-row sm:mx-0 '>
            {/* email BorderMagic button */}
            <Link
              href='/#contact'
              tabIndex={-1}
              className='group hover:scale-105 active:scale-90 transition-all focus-visible:outline-none  '
              aria-label='Navigate to contact me section'>
              <BorderMagic
                title='Contact Me'
                otherClasses='text-lg sm:text-base'
                icon={
                  <BsEnvelopeAt className='ml-4 sm:ml-1 w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition ' />
                }
                position='right'        
              />
            </Link>

            {/* projects BorderMagic button */}
            <Link
              href='/#projects'
              tabIndex={-1}
              className='group hover:scale-105 active:scale-90 transition-all'
              aria-label='Navigate to projects section'>
              <BorderMagic
                otherClasses='text-lg'
                title='Projects'
                icon={
                  <GrProjects className='ml-4 w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-0 transition' />
                }
                position='right'
              />
            </Link>
          </div>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full sm:w-3/4 md:w-auto mx-auto flex justify-center sm:justify-start'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src='/hero5.png'
              width={300}
              height={300}
              alt='hero image'
              className='rounded-full object-cover'
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};
export default Hero;
