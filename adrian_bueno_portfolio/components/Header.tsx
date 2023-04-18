import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return <button>Learn more</button>;
  }

  return (
    <div className="header">
      <div className="intro-name">
        <div className="backgroud-image">
          <h1>Hello, I am the Pocman</h1>
          <Button />
          <img src={backgroundImage} alt="background-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
