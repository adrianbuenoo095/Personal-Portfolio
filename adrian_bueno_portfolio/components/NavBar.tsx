import Link from "next/link";
import { ReactElement, useState } from "react";

interface Props {
  text: string;
  href: string;
  active?: boolean;
}

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/aboutMe" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Blog", href: "/blog" },
];

const NavBar = ({ text, href, active }: Props): ReactElement => {
  const [navActive, setNavActive] = useState();
  const [activeId, setActiveId] = useState();

  return (
    <nav className="my-11">
      <div className="text-black font-sans text-lg ">
        {MENU_LIST.map((href, idx) => {
          return (
            <ul className="flex items-center list-none w-3/6 h-full justify-around mx-auto ">
              <Link className="hover:text-teal-400" href={href.href}>
                <li key={idx}> {href.href}</li>
              </Link>
            </ul>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
