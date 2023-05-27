import Link from "next/link";
import { ReactElement } from "react";

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
            <div key={idx} className="inline-block ps-10">
              <Link className="hover:text-teal-400" href={link.path}>
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
