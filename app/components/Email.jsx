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

    // console.log("result : ", result);

    if (!result.error) {
      console.log("Email sent successfully");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative my-12 grid   gap-4 py-24 md:my-12 md:grid-cols-2 "
    >
      <div className="-translate-1/2 -4 absolute top-3/4 z-0 h-80 w-80 -translate-x-1/2 transform rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent blur-lg"></div>

      <div className="w=[200px] absolute -left-4 top-3/4 z-0 animate-pulse  mix-blend-color-dodge duration-75 xl:w-[300px] ">
        <Image
          src="/about.png"
          width={200}
          height={200}
          className="h-full w-full rounded-full"
          alt="logo"
        ></Image>
      </div>

      <div className="z-20">
        <h5 className="my-2 text-xl font-bold text-white">
          {" "}
          Let&apos;s Connect{" "}
        </h5>
        <p className="mb-4 max-w-md text-gray-400">
          Feel free to reach out! I&apos;m always open to new opportunities and
          connections. If you&apos;d like to get in touch, please send me an
          email.
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/jluo-github">
            <Image src={GithubIcon} alt="github" width={40} height={40} />
          </Link>

          <Link href="https://linkedin.com/in/jluo23">
            <Image src={LinkedInIcon} alt="linkedin" width={40} height={40} />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="mt-2 text-sm text-green-500">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="block w-full rounded-lg border border-gray-700 bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="block w-full rounded-lg border border-gray-700 bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="Subject..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="block w-full rounded-lg border border-gray-700 bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="Message..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary-500 px-5 py-2.5 font-medium text-white hover:bg-primary-600"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Email;
