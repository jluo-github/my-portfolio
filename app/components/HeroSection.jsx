"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start text-center sm:text-left"
        >
          <h1 className="mb-2 text-4xl font-extrabold text-white sm:text-5xl lg:text-8xl lg:leading-normal ">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              {" "}
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            {/* type animation:  */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jin",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full-Stack",
                1000,
                "Developer",
                1000,
                // "Jin",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="mb-6 text-base text-gray-400 md:text-lg lg:text-xl">
            As a full-stack developer, I am dedicated to turning ideas into
            reality. I am passionate about creating web applications that are
            both functional and visually appealing. I am always eager to learn
            new technologies and improve my skills. I am a team player and I am
            always ready to collaborate with others to create amazing projects.
            I am also a quick learner and I am always ready to take on new
            challenges.
          </p>

          <div>
            <Link
              href="/#contact"
              className="mr-4 inline-block w-full rounded-full bg-gradient-to-br from-primary-700 to-secondary-500 px-6 py-3 text-white hover:bg-slate-200 sm:w-fit"
            >
              Contact Me
            </Link>
            <Link
              href="/#projects"
              className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-700 to-secondary-500 px-1 py-1 text-white hover:bg-slate-800 sm:w-fit"
            >
              <span className="block rounded-full bg-gray-900 px-5 py-2 hover:bg-slate-800">
                Projects
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          {" "}
          <div className="relative h-[200px] w-[200px] rounded-full bg-primary-800/10 lg:h-[300px] lg:w-[300px]">
            <Image
              src="/hero5.png"
              width={300}
              height={300}
              alt="hero"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
