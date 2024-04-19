import Link from "next/link";
import React from "react";


const Navbar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex border-b h-14 items-center space-x-6 p-4">
      <Link href={"/"}>Logo</Link>
      <ul className="flex space-x-6 ">
        {links.map((link) => (
          
            <Link href={link.href} key={link.href} className="text-zinc-600  hover:text-zinc-900">{link.label}</Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
