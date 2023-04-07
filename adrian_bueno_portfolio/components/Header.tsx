import type { ReactElement } from "react";
import bg from "../images/bg.jpg";
const Header = (): ReactElement => {
  return (
    <div id="top" className="header">
      <div className="intro-name">
        <h1 className="">Hello, I am the Pocman</h1>
        <div className="backgroud-image">
        <img src={String(bg)} width="100" height="50"/>
      </div>
      </div>
    </div>
  );
};

export default Header;