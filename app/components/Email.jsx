"use client";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Email = () => {
 const [emailSubmitted, setEmailSubmitted] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
   email: e.target.email.value,
   subject: e.target.subject.value,
   message: e.target.message.value,
  };

  const JSONdata = JSON.stringify(data);
  const endpoint = "/api/send";

  const options = {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSONdata,
  };

  const response = await fetch(endpoint, options);
  const result = await response.json();

  console.log("result : ", result);

  if (!result.error) {
   console.log("Email sent successfully");
   setEmailSubmitted(true);
  }
 };

 return (
  <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative '>
   <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-1/2'></div>
   <div className='z-10'>
    <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
    <p className='text-[#adb7be] mb-4 max-w-md'>
     I'm always open to new opportunities and meeting new people. If you'd like
     to get in touch, feel free to send me an email.
    </p>
    <div className='socials flex flex-row gap-2 '>
     <Link href='https://github.com'>
      <Image src={GithubIcon} alt='github' width={40} height={40} />
     </Link>

     <Link href='https://linkedin.com'>
      <Image src={LinkedInIcon} alt='linkedin' width={40} height={40} />
     </Link>
    </div>
   </div>

   <div>
    <form action='' className='flex flex-col ' onSubmit={handleSubmit}>
     <div className='mb-6'>
      {" "}
      <label
       htmlFor='email'
       className='text-white block mb-2  text-sm font-medium'>
       Your email{" "}
      </label>
      <input
       name='email'
       type='email'
       id='email'
       required
       placeholder='Email '
       className='bg-[#18191e] border-[#33353f] placeholder-[#9ca2a9]
       text-gray-100 text-sm rounded-lg block p-2 w-full'
      />
     </div>

     <div className='mb-6'>
      <label
       htmlFor='subject'
       className='text-white block mb-2 text-sm font-medium'>
       Subject
      </label>
      <input
       name='subject'
       type='text'
       id='subject'
       required
       placeholder='Subject '
       className='bg-[#18191e] border-[#33353f] placeholder-[#9ca2a9]
       text-gray-100 text-sm rounded-lg block p-2 w-full'
      />
     </div>

     <div className='mb-6'>
      <label
       htmlFor='message'
       className='text-white block mb-2 text-sm font-medium'>
       Message
      </label>
      <textarea
       name='message'
       id='message'
       required
       placeholder='Message... '
       className='bg-[#18191e] border-[#33353f] placeholder-[#9ca2a9]
       text-gray-100 text-sm rounded-lg block p-2 w-full'
      />
     </div>

     <button
      type='submit'
      className='bg-violet-800 hover:bg-violet-700 text-white font-medium py-2.5 rounded-lg w-full'>
      Send Message
     </button>
     {emailSubmitted && (
      <p className='text-green-500 text-center mt-4'>Email sent successfully</p>
     )}
    </form>
   </div>
  </section>
 );
};

export default Email;
