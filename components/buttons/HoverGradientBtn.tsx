"use client";

import React from "react";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function HoverGradientBtn({ children }: { children: React.ReactNode }) {
  return (
    <div className='m-40 flex justify-center text-center'>
      <HoverBorderGradient
        containerClassName='rounded-lg'
        as='button'
        className='dark:bg-black bg-white text-black dark:text-white flex dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] shadow-xl shadow-violet-200 dark:shadow-violet-400 hover:shadow-none hover:dark:shadow-none  items-center space-x-2'>
        {children} 
      </HoverBorderGradient>
    </div>
  );
}
