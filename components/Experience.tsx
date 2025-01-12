"use client";
import dynamic from "next/dynamic";
import { Button } from "./ui/moving-border";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

type ExperienceData = {
  metric: string;
  value: string;
  postfix: string;
};

const experienceData: ExperienceData[] = [
  {
    metric: "Projects",
    value: "30",
    postfix: "+",
  },
  {
    metric: "Certifications ",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "3",
    postfix: "+",
  },
];

const Experience = () => {
  return (
    <section className='py-8 mx-auto grid grid-cols-1 px-1 lg:px-20 w-full lg:w-3/4'>
      <Button
        className='w-full cursor-auto bg-violet-50 dark:bg-slate-900 border-none shadow-xl shadow-violet-400'
        disabled
        aria-disabled='true'
        tabIndex={-1} >
        <div className='flex items-center gap-10 sm:gap-20 md:gap-28 justify-between md:px-20 py-8'>
          {experienceData.map((item, index) => (
            <div key={index} className='flex flex-col gap-2  '>
              <h2 className='flex flex-row text-4xl font-bold dark:text-white text-violet-900'>
                <AnimatedNumbers
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  includeComma
                  animateToNumber={parseInt(item.value)}
                  locale='en-US'></AnimatedNumbers>
                {item.postfix}
              </h2>

              <p className='text-base lg:text-xl text-violet-700 dark:text-slate-400 '>
                {item.metric}
              </p>
            </div>
          ))}
        </div>
      </Button>
    </section>
  );
};
export default Experience;
