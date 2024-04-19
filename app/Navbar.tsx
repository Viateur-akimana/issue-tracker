'use client'
import Link from "next/link";
import React from "react";
import { AiFillCamera } from 'react-icons/ai';
import { usePathname } from 'next/navigation'
import classNames from "classnames";


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
  const currentPath = usePathname();

  return (
    <nav className="flex border-b h-14 items-center space-x-6 p-4">
      <Link href={"/"}><AiFillCamera/></Link>
      <ul className="flex space-x-6 ">
        {links.map((link) => (
          
            <Link href={link.href} key={link.href} className={classNames({
                "text-zinc-600" : link.href === currentPath,
                "text-zinc-900" : link.href !== currentPath,
                "hover:text-zinc-800" :  true
            })}>{link.label}</Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
