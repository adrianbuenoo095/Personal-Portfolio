import Head from "next/head";
import type { ReactElement } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

let Button = () => {
  const router = useRouter();
  return (
    <div>
      <button
         onClick={() => router.push("/posts/first-post")}
        className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg "
      >
        Learn more
      </button>
    </div>
  );
};

let bg = "assets/images/backgroundImage.jpg";

const Header = (): ReactElement => {
  return (
    <div>
      <Head>
        <title>Adrian Bueno Portfolio</title>
        <meta
          property="og:title"
          content="Adrian Bueno Portfolio"
          key="title"
        />
      </Head>
      <div
        className="flex flex-col justify-center items-center h-screen bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-4xl font-bold text-white">
          Hello, I am the Pocman
        </h1>
        <Button />
      </div>
    </div>
  );
};

export default Header;
