import { useState, type ReactElement } from "react";
import Avatar from "./common/Avatar";

const Counter = () => {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button
                onClick={() => {
                    setNumber((n) => n + 1);
                    setNumber((n) => n + 1);
                    setNumber((n) => n + 1);
                }}
            >
                Incriment
            </button>
        </>
    );
};
const About = (): ReactElement => {
    return (
        <>
            <div id="About" className="h-fit bg-blue ">
                <div className="flex justify-center text-lg">
                    <Counter />
                    Who is the Pocman?
                </div>
                <Avatar size={400} name="Pocman" />
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
                    this wonderful life.
                </p>
            </div>
        </>
    );
};

export default About;
