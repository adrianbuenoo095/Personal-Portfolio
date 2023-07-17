import { ReactElement } from "react";

const SKILLSET = [
  { name: "Web Designer" },
  { name: "Illustrator" },
  { name: "FullStack Developer" },
];

const Portfolio = (): ReactElement => {
  return (
    <>
      <div
        id="Portfolio"
        className="bg-green w-screen max-w-full h-screen text-center"
      >
        <h1>Adrian&apos;s Work</h1>
        {SKILLSET.map((skill) => {
        return (
          <div className="bg-blue flex" key={skill.name}>
            {skill.name}
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Portfolio;
