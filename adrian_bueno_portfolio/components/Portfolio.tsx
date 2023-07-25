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
        Portfolio
        {SKILLSET.map((skill) => (
          <div className="bg-blue " key={skill.name}>
            {skill.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
