import type { ReactElement } from "react";
// import bg from "../public/" ;

const Header = (): ReactElement => {
  // console.log(bg);
  return (
    <div id="top" className="header">
      <div className="intro-name">
        <h1 className="">Hello, I am the Pocman</h1>
        <div className="backgroud-image">
        </div>
          <img alt="background-image" />
      </div>
    </div>
  );
  };

export default Header;
