import Head from "next/head";
import type { ReactElement } from "react";
import { Button } from "./common/Button";

const Header = (): ReactElement => {
    const headerBackground = "/images/backgroundImage.jpg";
    return (
        <>
            <Head>
                <title>Adrian Bueno</title>
                <link rel="icon" href="/images/pocmanThick128.png" />
            </Head>
            <div
                id="Home"
                className="flex flex-col justify-center items-center  max-w-full h-screen bg-cover"
                style={{ backgroundImage: `url(${headerBackground})` }}
            >
                <h1 className="text-4xl font-bold text-white">
                    Hello, I am Adrian Bueno
                </h1>
                <Button />
            </div>
        </>
    );
};

export default Header;
