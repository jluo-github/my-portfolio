"use client";
import Link from "next/link";
import { navLink } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import NavLink from "./NavLink";
import { FaXmark } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { Button } from "./ui/button";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 mx-auto shadow-lg shadow-violet-500/[0.3]  dark:shadow-violet-400/[0.4]  ${
        isOpen ? "bg-violet-100 dark:bg-slate-900" : "bg-violet-100/[0.8] dark:bg-slate-900/[0.8]"
      }`}>
      <div className='max-w-screen-2xl mx-auto flex items-center justify-between px-2 py-3 lg:py-4'>
        {/* logo */}
        <Link href={"/"} className='' onClick={() => setIsOpen && setIsOpen(false)}>
          <Image src='/logo.png' alt='logo' width={50} height={50} className='rounded-full object-cover' />
        </Link>

        {/* menu */}
        <div id='navbar' className='hidden md:flex gap-x-12 mx-8'>
          <ul className='flex md:flex-row gap-8'>
            {navLink.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} name={link.name} />
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>

        {/* hamburger */}
        <div className='flex gap-4 mx-4 md:hidden '>
          <ModeToggle />
          {isOpen ? (
            <Button
              variant='outline'
              size='icon'
              onClick={() => setIsOpen(false)}
              className='shadow-lg shadow-violet-400'>
              <FaXmark className='h-6 w-6' />
            </Button>
          ) : (
            <Button
              variant='outline'
              size='icon'
              onClick={() => setIsOpen(true)}
              className='shadow-lg shadow-violet-400'>
              <IoMdMenu className='h-6 w-6' />
            </Button>
          )}
        </div>
      </div>
      {isOpen && <DropDownMenu setIsOpen={setIsOpen} />}
    </nav>
  );
};
export default Navbar;
