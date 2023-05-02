import { ReactElement } from "react";

const Navigation = (): ReactElement => {
  return (
    <nav className="my-11">
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="flex items-center list-none w-3/6 h-full justify-around mx-auto">
        <li className="text-black font-sans text-lg">
          <a className="no-underline" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
