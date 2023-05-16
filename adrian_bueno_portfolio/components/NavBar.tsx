import Link from "next/link";
import { ReactElement } from "react";

/**
 *
 * @todo look at this link  https://codewithmarish.com/post/how-to-create-responsive-navbar-in-next-js
 */

const Navigation = (): ReactElement => {
  return (
    <nav className="my-11">
      <div className="text-black font-sans text-lg ">
        <ul className="flex items-center list-none w-3/6 h-full justify-around mx-auto ">
          <li>
            <Link className="hover:text-teal-400" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-teal-400" href="#Aboutme">
              About Me
            </Link>
          </li>
          <li>
            <Link className="hover:text-teal-400" href="#Portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="hover:text-teal-400" href="/posts/first-post">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
