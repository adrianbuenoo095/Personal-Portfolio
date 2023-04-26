import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return (
      <div>
        <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-lg ">
          Learn more
        </button>
      </div>
    );
  }

  return (
    <div className="header">
      <div className="flex flex-col justify-center items-center h-screen bg-cover">
        <img className="mx-auto" src={backgroundImage} alt="background-image" />
        <h1 className="text-4xl font-bold text-black">
          Hello, I am the Pocman
        </h1>
        <Button />
      </div>
    </div>
  );
};

export default Header;
