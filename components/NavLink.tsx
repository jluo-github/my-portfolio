"use client";
import Link from "next/link";

const NavLink = ({ href, name, setIsOpen }: { href: string; name: string; setIsOpen?: (isOpen: boolean) => void }) => {
  return (
    <Link
      onClick={() => setIsOpen && setIsOpen(false)}
      href={href}
      className='text-violet-700 hover:font-violet-950 hover:font-bold font-semibold dark:text-slate-300 hover:dark:text-white md:text-xl text-lg transition '>
      {name}
    </Link>
  );
};
export default NavLink;
