"use client";
import { navLink } from "@/lib/data";
import { setIsOpen } from "@/lib/features/dropdown/dropdownSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import DropDownMenu from "./DropDownMenu";
import { ModeToggle } from "./ModeToggle";
import NavLink from "./NavLink";
import { Button } from "./ui/button";
import logoImg from "/public/logo.png";

const Navbar = () => {
  const { isOpen } = useAppSelector((state) => state.dropdown);
  const dispatch = useAppDispatch();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10  mx-auto shadow-lg shadow-violet-500/[0.3]  dark:shadow-violet-400/[0.4]  ${
        isOpen
          ? "bg-violet-100 dark:bg-slate-900"
          : "bg-violet-100/[0.8] dark:bg-slate-900/[0.8]"
      }`}>
      <div className=' flex items-center justify-between px-2 py-3 lg:py-4'>
        {/* logo */}
        <Link
          aria-label='Navigate to homepage'
          href={"/"}
          className='hover:scale-110 active:scale-90 transition-all'
          onClick={() => dispatch(setIsOpen(false))}>
          <Image
            src={logoImg}
            alt='Website logo'
            className='rounded-full object-cover w-12'
          />
        </Link>

        {/* menu */}
        <div id='navbar' className='hidden md:flex gap-x-12 mx-8'>
          <ul className='flex md:flex-row gap-8'>
            {navLink.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  name={link.name}
                  aria-label={`Navigate to ${link.name}`}
                />
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
              onClick={() => dispatch(() => dispatch(setIsOpen(false)))}
              className='shadow-lg shadow-violet-400 hover:scale-105 active:scale-90 transition-all focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none'
              aria-label='Close navigation dropdown menu'
              aria-expanded={isOpen}>
              <FaXmark className='h-6 w-6' />
            </Button>
          ) : (
            <Button
              variant='outline'
              size='icon'
              onClick={() => dispatch(() => dispatch(setIsOpen(true)))}
              className='shadow-lg shadow-violet-400 hover:scale-105 active:scale-90 transition-all focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none'
              aria-label='Open navigation dropdown menu'
              aria-expanded={isOpen}>
              <IoMdMenu className='h-6 w-6' />
            </Button>
          )}
        </div>
      </div>

      {isOpen && <DropDownMenu />}
    </nav>
  );
};
export default Navbar;
