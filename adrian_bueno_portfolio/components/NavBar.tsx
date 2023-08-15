import { menuList } from "@/lib/common /MenuList";
import { scrollIntoTheView } from "@/lib/common /helpers/scrollIntoTheView";
import Link from "next/link";
import { ReactElement, useCallback, useEffect, useState } from "react";
import Burger from "./common/Burger";

const NavBar = (): ReactElement => {
  const [openMenu, setOpenMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = useCallback(() => {
    setOpenMenu((prevState) => {
      return !prevState;
    });
  }, []);

  const controlNavBar = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (typeof window !== "undefined") {
      if (currentScrollY > lastScrollY) {
        setOpenMenu(false);
      }
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavBar);

      return () => {
        window.removeEventListener("scroll", controlNavBar);
      };
    }
  }, [controlNavBar]);
  return (
    <>
      <nav className="my-11 hidden md:block">
        {menuList.map((link) => {
          return (
            <div
              key={link.name}
              className="p-3 inline-flex text-black font-sans text-lg "
            >
              <Link
                className="hover:text-pink"
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  scrollIntoTheView(link.id);
                }}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </nav>
      <div
        className="md:hidden fixed top-3 right-4  text-white"
        onClick={handleClick}
      >
        <Burger />
      </div>
      {openMenu && (
        <div className="md:hidden fixed top-5 right-0 bg-gray-dark text-white p-4">
          <div className="flex flex-col gap-5">
            {menuList.map((link) => {
              return (
                <div key={link.name} className="p-3 inline-flex">
                  <Link
                    className="hover:text-pink"
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.id) {
                        scrollIntoTheView(link.id);
                      }
                    }}
                  >
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
