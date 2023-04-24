import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return <button>Learn more</button>;
  }

  return (
    <div className="header">
      <div className="flex h-screen">
        <div className="relative w-40 h-40 overflow-hidden flex justify-center items-center">
          <h1 className="text-white text-center z-10">
            Hello, I am the Pocman
          </h1>
          <Button />
        </div>
        <img
          className="object-cover w-full h-full"
          src={backgroundImage}
          alt="background-image"
        />
      </div>
    </div>
  );
};

export default Header;
