import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let backgroundImage = "assets/images/backgroundImage.jpg";

  function Button() {
    return <button className="">Learn more</button>;
  }

  return (
    <div className="header">
      <div className="intro-name">
        <div className="relative h-32 bg-blue-400">
        <div  className="absolute inset-0 flex items-center justify-center"> 
          <h1 className="text-3xl font-bold underlin">Hello, I am the Pocman</h1>
          <Button />
        </div>
          <img className="mx-auto" src={backgroundImage} alt="background-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
