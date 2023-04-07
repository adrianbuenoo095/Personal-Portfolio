import type { ReactElement } from "react";
import bg from "/images/bg.jpg";
const Header = (): ReactElement => {
  console.log(bg);
  return (
    <div id="top" className="header">
      <div className="intro-name">
        <h1 className="">Hello, I am the Pocman</h1>
        <div className="backgroud-image">
          <img src={String(bg)} alt="background image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
