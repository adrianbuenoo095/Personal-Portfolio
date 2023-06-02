import Link from "next/link";
import { useState } from "react";
import { ReactElement } from "react";

const MENU_LIST = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/aboutMe" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
];

const NavBar = (): ReactElement => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <nav className="my-11">
      <div className="text-black font-sans text-lg ">
        {MENU_LIST.map((link, idx) => {
          return (
            <div key={idx} className="p-3 inline-flex">
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
