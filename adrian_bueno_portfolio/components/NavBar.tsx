import Link from "next/link";
import { useCallback, useState } from "react";
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
  const handleClick = useCallback(() => {
    setOpenMenu((prevState) => {
      return !prevState;
    });
  }, []);

  return (
    <>
      <nav className="my-11 hidden md:block">
        <div className="text-black font-sans text-lg ">
          {MENU_LIST.map((link) => {
            return (
              <div key={link.name} className="p-3 inline-flex">
                <Link className="hover:text-teal-400" href={link.path}>
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
      <div
        className="md:hidden fixed top-0 right-0 bg-gray-400 text-white"
        onClick={handleClick}
      >
        Burger Menu
      </div>
      {openMenu && (
        <div className="md:hidden fixed top-5 right-0 bg-gray-400 text-white p-4">
          <div className="flex flex-col gap-5">
          {MENU_LIST.map((link) => {
            return (
              <div key={link.name} className="p-3 inline-flex">
                <Link className="hover:text-teal-400" href={link.path}>
                  {link.name}
                </Link>
              </div>
            );
          })}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
