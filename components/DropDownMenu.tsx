"use client";
import { navLink } from "@/lib/data";

import NavLink from "./NavLink";

const DropDownMenu = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <div className='flex items-center flex-col gap-4 my-8'>
      {navLink.map((link) => (
        <NavLink key={link.href} href={link.href} name={link.name} setIsOpen={setIsOpen} />
      ))}
    </div>
  );
};
export default DropDownMenu;
