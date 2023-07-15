import { ReactElement } from "react";

const Portfolio = (): ReactElement => {
  return (
    <>
      <div id="Portfolio" className="bg-green w-screen max-w-full h-screen text-center">
        <h1>Adrian&apos;s Work</h1>
        <div className="skills-set">
          <div>
            <h1>Web Designer</h1>
          </div>
          <div>
            <h1>Illustrator</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
