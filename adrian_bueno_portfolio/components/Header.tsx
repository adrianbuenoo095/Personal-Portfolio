import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";
  return (
    <div id="top" className="header">
      <div className="intro-name">
        <div className="backgroud-image">
          <h1 className="">Hello, I am the Pocman</h1>
          <input type="button" name="Click me" />
          <img src={backgroundImage} alt="background-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
