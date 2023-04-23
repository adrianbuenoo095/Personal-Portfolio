import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return <button>Learn more</button>;
  }
  
  return (
    <div className="header">
      <div className="flex h-screen justice-center items-center">
        <div className="text-center bg-blue-400">
          <h1 className="text-3x1">
            Hello, I am the Pocman
            <img className="" src={backgroundImage} alt="background-image" />
          </h1>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
