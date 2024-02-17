import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block rounded py-2 pl-3 pr-4 text-gray-400 hover:text-white sm:text-xl md:p-0 "
    >
      {title}
    </Link>
  );
};
export default NavLink;
