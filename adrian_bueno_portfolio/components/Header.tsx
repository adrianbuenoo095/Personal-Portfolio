import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return <button>Learn more</button>;
  }

  return (
    <div className="header">
      <div className="flex h-screen">
        <div className="flex h-screen justify-center items-center">
          <h1>
            Hello, I am the Pocman
          </h1>
        </div>
        <img className="" src={backgroundImage} alt="background-image" />
        <Button />
      </div>
    </div>
  );
};

export default Header;
