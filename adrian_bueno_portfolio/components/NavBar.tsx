import Link from "next/link";
import { ReactElement } from "react";

interface Props {
  name: string;
  path: string;
  id: number;
}
const MENU_LIST = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/aboutMe" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
];

const NavBar = ({ name, path, id }: Props): ReactElement => {
  return (
    <nav className="my-11">
      <div className="text-black font-sans text-lg ">
        {MENU_LIST.map((link, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center list-none w-full h-full justify-around mx-auto"
            >
              <Link className=" hover:text-teal-400" href={link.path}>
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
