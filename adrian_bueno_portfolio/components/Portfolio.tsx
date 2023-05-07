import { ReactElement } from "react";

const Portfolio = (): ReactElement => {
  return (
    <div className="bg-yellow-500 w-screen h-screen text-center">
      <h1>Adrian's Work</h1>
      <ul className="skills-set">
        <li>
          <a href="">Web Designer</a>
        </li>
        <li>
          <a href="">Illustrator</a>
        </li>
        <li>
          <a href="">Full-Stack</a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
