import type { ReactElement } from 'react';
import Profile from "./Profile";

const AboutMe = (): ReactElement => {
  return (
    <>
      <div id="AboutMe" className="h-screen bg-yellow">
        <div className="py-5">
          <div className="text-orange-600 font-bold text-8xl text-center uppercase">
            Who is the Pocman?
            <Profile /> 
          </div>
          <p className="tracking-wide text-lg">
            The Pocman is a great instagram account that features artwork and comics
            created by an artist known as POC or &quot;Person of Color&quot;
            man. POC man uses their platform to showcase their unique
            perspective on current events, pop culture, and everyday life
            through a combination of illustrations and humorous captions. Their
            work often addresses issues of social justice and diversity, making®
            their art both entertaining and thought-provoking. With a growing
            following on Instagram, the Pocman has become a prominent voice in
            the online art community, inspiring and engaging followers from all
            walks of life.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
