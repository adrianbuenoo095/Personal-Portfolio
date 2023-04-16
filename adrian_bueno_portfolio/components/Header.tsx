import type { ReactElement } from "react";
import backgroundImage from "./public/assets/images/backgroundImage.jpg" ;

const Header = (): ReactElement => {
  console.log(backgroundImage);
  return (
    <div id="top" className="header">
      <div className="intro-name">
        <h1 className="">Hello, I am the Pocman</h1>
        <div className="backgroud-image">
          <img alt="background-image" />
        </div>
      </div>
    </div>
  );
  };

export default Header;
