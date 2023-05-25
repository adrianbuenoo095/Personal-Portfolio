import Link from "next/link";
import { ReactElement, useState } from "react";

const MENU_LIST = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/aboutMe" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
];

const NavBar = (): ReactElement => {
  return (
    <nav className="my-11">
      <div className="text-black font-sans text-lg ">
        {MENU_LIST.map((link, idx) => {
          return (
            <ul className="flex items-center list-none w-3/6 h-full justify-around mx-auto ">
              <Link className="hover:text-teal-400" href={link.path}>
                <li key={idx}> {link.name}</li>
              </Link>
            </ul>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
