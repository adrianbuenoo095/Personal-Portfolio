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
        <div  className="flex h-screen justify-center items-center"> 
          <h1 className="m-auto">Hello, I am the Pocman</h1>
          <Button />
        </div>
          <img src={backgroundImage} alt="background-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
