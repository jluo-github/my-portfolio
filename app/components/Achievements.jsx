"use client";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

// import AnimatedNumbers from "react-animated-numbers";
import { motion } from "framer-motion";

const achievements = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    metric: "Certifications ",
    value: "7",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "3",
    postfix: "+",
  },
];

const Achievements = () => {
  return (
    <div className="px-4 py-8 sm:py-16 xl:gap-16 xl:px-16 ">
      <div className="flex flex-col items-center justify-between rounded-md px-16 py-8 sm:flex-row sm:border sm:border-gray-700">
        {/*  */}
        {achievements.map((a, i) => {
          return (
            <div
              key={i}
              className="mx-4 my-4 flex flex-col items-center justify-center sm:my-0"
            >
              <h2 className="flex flex-row text-4xl font-bold text-white">
                <AnimatedNumbers
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  className="text-white "
                  includeComma
                  animateToNumber={parseInt(a.value)}
                  local="en-US"
                ></AnimatedNumbers>
                {a.postfix}
              </h2>
              <p className="text-base text-gray-400 ">{a.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Achievements;
