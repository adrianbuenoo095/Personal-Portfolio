import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return <button>Learn more</button>;
  }

  return (
    <div className="header">
      <div className="flex h-screen">
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
            Hello, I am the Pocman
          </h1>
          <Button />
          <img
            className="object-cover w-full h-full"
            src={backgroundImage}
            alt="background-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
