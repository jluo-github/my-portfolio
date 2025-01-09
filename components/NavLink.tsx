"use client";
import { setActive, setIsOpen } from "@/lib/features/dropdown/dropdownSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";

const NavLink = ({ href, name }: { href: string; name: string }) => {
  const dispatch = useAppDispatch();
  const { isActive } = useAppSelector((state) => state.dropdown);

  return (
    <Link
      onClick={() => {
        dispatch(setIsOpen(false));
        dispatch(setActive(name));
      }}
      href={href}
      className={`text-violet-700 hover:font-violet-950 font-semibold hover:font-bold dark:text-slate-300 hover:dark:text-white md:text-xl text-lg `}>
      <div
        className={`${
          isActive === name ? "font-bold" : ""
        } hover:scale-105 transition-all active:scale-95 `}>
        {name}
      </div>
    </Link>
  );
};
export default NavLink;
