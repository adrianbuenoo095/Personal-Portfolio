import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return <button>Learn more</button>;
  }

  return (
    <div className="header">
      <div className="flex h-screen">
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <h1>
            Hello, I am the Pocman
          </h1>
        <Button />
        </div>
        <img className="object-cover w-full h-full" src={backgroundImage} alt="background-image" />
      </div>
    </div>
  );
};

export default Header;
