"use client";
import { setIsOpen } from "@/lib/features/dropdown/dropdownSlice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";

const NavLink = ({ href, name }: { href: string; name: string }) => {
  const dispatch = useAppDispatch(); 

  return (
    <Link
      onClick={() => dispatch(setIsOpen(false))}
      href={href}
      className='text-violet-700 hover:font-violet-950 hover:font-bold font-semibold dark:text-slate-300 hover:dark:text-white md:text-xl text-lg transition '>
      {name}
    </Link>
  );
};
export default NavLink;
