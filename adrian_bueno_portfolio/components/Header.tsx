import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return (
      <div>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Learn more
        </button>
      </div>
    );
  }

  return (
    <div className="header">
      <div className="flex flex-col justify-center items-center h-screen bg-cover">
        <h1 className="text-4xl font-bold text-black">
          Hello, I am the Pocman
        </h1>
        <Button />
        <img src={backgroundImage} alt="background-image" />
      </div>
    </div>
  );
};

export default Header;
