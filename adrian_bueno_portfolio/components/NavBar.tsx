import { ReactElement } from "react";
/**
 *
 * @todo look at this link  https://codewithmarish.com/post/how-to-create-responsive-navbar-in-next-js
 */
const Navigation = (): ReactElement => {
  return (
    <nav className="my-11">
      <div className="text-black font-sans text-lg ">
        <ul className="flex items-center list-none w-3/6 h-full justify-around mx-auto">
          <li>
            <a className="n" href="#">
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
      </div>
    </nav>
  );
};

export default Navigation;
