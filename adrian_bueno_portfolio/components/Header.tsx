import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return (<button>Learn more</button>);
  }

  return (
    <div className="header">
      <div className="intro-name">
        <div className="backgroud-image">
          <h1 className="">Hello, I am the Pocman</h1>
          <img src={backgroundImage} alt="background-image" />
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default Header;
