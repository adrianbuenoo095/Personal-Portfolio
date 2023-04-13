import type { ReactElement } from "react";
let bg = import("../public/assets/images/bg.jpg");

const Header = (): ReactElement => {
  console.log(bg);
  return (
    <div id="top" className="header">
      <div className="intro-name">
        <h1 className="">Hello, I am the Pocman</h1>
        <div className="backgroud-image">
        </div>
          <img src={String(bg)} alt="background-image" />
      </div>
    </div>
  );
  };

export default Header;
