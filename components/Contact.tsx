"use client";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import SendEmailBtn from "./buttons/SendEmailBtn";
import { ContactForm } from "./forms/ContactForm";

const Contact = () => {
  return (
    <section id='contact' className='relative mx-auto '>
      <div className='-translate-y-4 absolute top-3/4 z-0 h-80 w-80 -translate-x-12 transform rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-violet-900 from-violet-400 to-transparent blur-3xl dark:blur-lg' />

      {/* image */}
      <div className='w-[200px] absolute translate-y-12 translate-x-4  top-3/4 z-0 dark:mix-blend-color-dodge  animate-pulse duration-10 dark:duration-100 xl:w-[300px]'>
        <Image
          src='/about.png'
          width={200}
          height={200}
          className='h-full w-full rounded-full'
          alt='logo'
        />
      </div>

      <div className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-center my-20 gap-8 py-8 '>
        {/* icons */}
        <div className='z-3 sm:w-1/3 mx-auto px-8 sm:px-4'>
          <div>
            <h3 className='my-2 text-xl font-bold text-violet-800 dark:text-white'>
              {" "}
              Let&apos;s Connect{" "}
            </h3>
            <p className='my-12 max-w-md text-violet-700 dark:text-slate-400'>
              Feel free to reach out! I&apos;m always open to new opportunities and
              connections. If you&apos;d like to get in touch, please send me an email.
            </p>
          </div>

          <div className='mx-auto flex my-12'>
            {" "}
            <SendEmailBtn />
          </div>

          <div className='socials flex flex-row gap-8 '>
            <Link
              href='https://github.com/jluo-github'
              target='_blank'
              className='bg-transparent focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none'>
              <SiGithub className='w-10 h-10 hover:scale-125 active:scale-90 transition-all shadow-xl shadow-violet-500 dark:shadow-violet-300  rounded-full' />
            </Link>

            <Link
              href='https://linkedin.com/in/jluo23'
              target='_blank'
              className='bg-transparent focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none'>
              <svg
                className='w-10 h-10 text-gray-800 dark:text-white hover:scale-125 active:scale-90 transition-all shadow-xl shadow-violet-500 dark:shadow-violet-300 rounded-lg'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z'
                  clipRule='evenodd'
                />
                <path d='M7.2 8.809H4V19.5h3.2V8.809Z' />
              </svg>
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
