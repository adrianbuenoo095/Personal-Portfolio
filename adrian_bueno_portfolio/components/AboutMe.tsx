import type { ReactElement } from "react";

const AboutMe = (): ReactElement => {
  return (
    <div className="w-full h-full bg-yellow-400 py-80">
      <div className="text-center">
        <h1 className="text-white font-bold text-8xl ">Who is the pocman?</h1>
      </div>
      <p className="text-3xl my-8 w-full">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut la bore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </div>
  );
};

export default AboutMe;
