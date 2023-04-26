import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return (
      <div>
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1 text-7xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Learn more
        </button>
      </div>
    );
  }

  return (
    <div className="header">
      <div className="flex h-screen">
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl	 text-white text-center z-10">
            Hello, I am the Pocman
          </h1>
          <Button />
          <img src={backgroundImage} alt="background-image" />
        </div> 
      </div>
    </div>
  );
};

export default Header;
