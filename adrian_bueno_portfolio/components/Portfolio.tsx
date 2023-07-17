import { ReactElement } from "react";

const SKILLSET = [
  { name: "Web Designer" },
  { name: "Illustror" },
  { name: "FullStack Developers" },
];

const Portfolio = (): ReactElement => {
  return (
    <>
      <div
        id="Portfolio"
        className="bg-green w-screen max-w-full h-screen text-center"
      >
        <h1>Adrian&apos;s Work</h1>
      </div>
        {
          SKILLSET.map((skill)=>{
            <div className="bg-blue"key={skill.name}>
              {skill.name}
            </div>
            console.log(skill.name);
          })
        }
     
    </>
  );
};

export default Portfolio;
