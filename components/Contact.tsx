"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import SendEmailBtn from "./buttons/SendEmailBtn";
import { ContactForm } from "./forms/ContactForm";

const Contact = () => {
  return (
    <section id='contact' className='relative mx-auto '>
      <div className='-translate-y-8 absolute top-3/4 z-0 h-80 w-80 -translate-x-8 transform rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-violet-900 to-transparent blur-lg' />

      {/* image */}
      <div className='w-[200px] absolute -left-4 top-3/4 z-0    dark:mix-blend-color-dodge dark:animate-pulse duration-75 xl:w-[300px]'>
        <Image src='/about.png' width={200} height={200} className='h-full w-full rounded-full' alt='logo' />
      </div>

      <div className=' flex flex-col sm:flex-row items-center sm:items-start sm:justify-center my-20 gap-8 py-8'>
        {/* icons */}
        <div className='z-3 sm:w-1/3 mx-auto px-8 sm:px-4'>
          <div>
            <h5 className='my-2 text-xl font-bold text-violet-800 dark:text-white'> Let&apos;s Connect </h5>
            <p className='my-12 max-w-md text-violet-700 dark:text-slate-400'>
              Feel free to reach out! I&apos;m always open to new opportunities and connections. If you&apos;d like to
              get in touch, please send me an email.
            </p>
          </div>

          <div className='mx-auto flex my-12'>
            {" "}
            <SendEmailBtn />
          </div>

          <div className='socials flex flex-row gap-8 '>
            <Link href='https://github.com/jluo-github' target='_blank' className='bg-transparent'>
              <SiGithub className='w-10 h-10 hover:scale-125 transition-all shadow-xl shadow-violet-400 bg-transparent' />
            </Link>

            <Link href='https://linkedin.com/in/jluo23' target='_blank' className='bg-transparent'>
              <FaLinkedin className='bg-transparent w-10 h-10 hover:scale-125 transition-all shadow-xl shadow-violet-700 dark:shadow-violet-400' />
            </Link>
          </div>
        </div>

        {/* form */}
        <div className='mt-20 sm:mt-4 mb-96 xl:mb-[500px] w-full sm:w-2/3'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;
