import React from "react";
import { ReactElement } from "react";

//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

const Burger = (): ReactElement => {
  return (
    <>
      <div className="flex lg:hidden">
        <div className="space-y-1.5">
          <div className="block w-8 h-0.5 bg-white" />
          <div className="block w-8 h-0.5 bg-white" />
          <div className="block w-8 h-0.5 bg-white" />
        </div>
      </div>
    </>
  );
};

export default Burger;
