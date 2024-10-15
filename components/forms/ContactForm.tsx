"use client";

import { MotionInput as Input } from "@/components/MotionInput";
import { MotionLabel as Label } from "@/components/MotionLabel";
import { sendEmail } from "@/lib/actions";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { toast } from "sonner";
import { MotionTextarea } from "../ui/motion-textarea";

import { FiSend } from "react-icons/fi";
import BorderMagic from "../ui/border-magic";

type StateType = {
  msg?: string;
  error?: string;
};

const initState: StateType = {
  msg: "",
  error: "",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className='max-w-md w-[90%] mx-auto rounded border-[1px] border-violet-300/[0.2] md:rounded-2xl p-4 md:p-8   shadow-xl dark:shadow-xl shadow-violet-300 dark:shadow-slate-400 bg-violet-50 dark:bg-slate-900 '>
      {/* form */}
      <form
        ref={formRef}
        action={async (formData) => {
          const response = await sendEmail(formData);
          formRef.current?.reset();
          if (!response) {
            toast.error("An error occurred");
            return;
          }
          if (response.message) {
            toast.success(response.message);
          } else {
            toast.error("An error occurred");
          }
        }}>
        {/* email */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='senderEmail'>Email</Label>
          <Input
            id='senderEmail'
            placeholder='Your Email'
            type='email'
            name='senderEmail'
          />
        </LabelInputContainer>
        {/* message */}
        <LabelInputContainer className='mb-12'>
          <Label htmlFor='message'>Message</Label>
          <MotionTextarea placeholder='Your Message' name='message' />
        </LabelInputContainer>

        {/* submit button */}

        <div className='flex items-center justify-center group hover:scale-105 active:scale-90 transition-all '>
          <BorderMagic
            title='Contact Me'
            otherClasses='text-lg sm:text-base w-full flex mx-auto items-center'
            icon={
              <FiSend className='ml-4 sm:ml-1 w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition ' />
            }
            position='right'
          />
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-violet-700 dark:via-violet-300 to-transparent ' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-violet-900 dark:via-violet-500  to-transparent' />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
  );
};
