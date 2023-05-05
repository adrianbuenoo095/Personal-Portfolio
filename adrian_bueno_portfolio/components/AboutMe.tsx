import type { ReactElement } from "react";

const AboutMe = (): ReactElement => {
  return (
    <div className="w-full h-full bg-yellow-400 py-80">
      <div className="text-center">
        <h1 className="text-white font-bold text-8xl ">Who is the pocman?</h1>
      </div>
      <p className="text-3xl my-8 w-full">
        The Pocman is an Instagram account that features artwork and comics
        created by an artist known as POC or "Person of Color" man. POC man uses
        their platform to showcase their unique perspective on current events,
        pop culture, and everyday life through a combination of illustrations
        and humorous captions. Their work often addresses issues of social
        justice and diversity, making their art both entertaining and
        thought-provoking. With a growing following on Instagram, the Pocman has
        become a prominent voice in the online art community, inspiring and
        engaging followers from all walks of life.
      </p>
    </div>
  );
};

export default AboutMe;
