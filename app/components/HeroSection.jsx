"use client";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
 return (
  <section>
   <div className='grid grid-cols-1 sm:grid-cols-12'>
    <div className='col-span-7 place-self-center text- sm:text-left'>
     <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
       {" "}
       Hello, I'm{" "}
      </span>
      <br ></br>
      {/* type animation:  */}
      <TypeAnimation
       sequence={[
        // Same substring at the start will only be typed out once, initially
        "Jin ",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer ",
        1000,
        "Full Stack Developer",
        1000,
        "Jin",
        1000,
       ]}
       wrapper='span'
       speed={50}
       repeat={Infinity}
      />
     </h1>

     <p className='text=[#adb7be] sm:text-lg lg:text-xl'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
      repellat ex reprehenderit recusandae nemo minima ad veritatis quas,
      quibusdam cupiditate nobis nesciunt odio, libero omnis fugiat ipsum
      distinctio ullam? Laborum.
     </p>

     <div>
      <button className='px-6 py-3 rounded-full sm:w-fit w-full  mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white'>
       Hire Me
      </button>

      <button className='px-1 py-1 rounded-full sm:w-fit w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 hover:bg-slate-800 text-white   mt-2'>
       <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-4 '>
        Download
       </span>
      </button>
     </div>
    </div>

    <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
     {" "}
     <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
      <Image
       src='/hero2.png '
       width={300}
       height={300}
       alt='hero'
       className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
      />
     </div>
    </div>
   </div>
  </section>
 );
};
export default HeroSection;
