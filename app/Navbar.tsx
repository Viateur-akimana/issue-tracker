'use client'
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';
import classNames from "classnames";
import { Button } from "@radix-ui/themes";

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
    {
      label: "Pricing",
      href: "/pricing",
    },
  ];

  const currentPath = usePathname();

  return (
    <nav className="flex justify-between items-center h-14 p-4">
       <Link href="/" className="font-bold text-sm sm:text-base">Issue Tracker Pro</Link>
       <ul className="flex  text-md justify-center space-x-4 sm:space-x-10">
        {links.map((link) => (
          <li key={link.href} className="list-none">
            <Link
              href={link.href}
              className={classNames(
                "#f8fafc",
                {
                  'text-gray-400': link.href === currentPath,
                  '#f8fafc': link.href !== currentPath,
                }
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="hidden sm:inline-block text-white border-2 border-white px-4 py-2 rounded-md text-sm">
  <Link href="/support">Get Support</Link>
</button>

    </nav>
  );
};

export default Navbar;
