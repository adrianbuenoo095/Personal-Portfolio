import { type ReactElement } from "react";
import Avatar from "./common/Avatar";

const About = (): ReactElement => {
    return (
        <>
            <div id="About" className="h-fit bg-blue ">
                <div className="flex justify-center text-lg">
                    Who is the Pocman?
                </div>
                <Avatar name="Pocman" />
                <p className="tracking-wide text-lg">
                    The Pocman is a well known illustrator for his illustrations
                    and the Pocman stickers. &quot;Person of Color&quot; man.
                    POC man uses their platform to showcase their unique
                    perspective on current events, pop culture, and everyday
                    life through a combination of illustrations and humorous
                    captions. Their work often addresses issues of social
                    justice and diversity, making® their art both entertaining
                    and thought-provoking. With a growing following on
                    Instagram, the Pocman has become a prominent voice in the
                    online art community, inspiring and engaging followers from
                    all walks of life. Everything is possible. We can do it. I
                    am doing really amazing. Life is amazin. I am grateful for
                    this wonderful life. I am grateful for the job as a frotend
                    developer 100% remote. I am grateful for this job. I am
                    greateful for all the good things in life.
                </p>
            </div>
        </>
    );
};

export default About;
