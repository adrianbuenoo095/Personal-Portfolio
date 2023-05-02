import { Head } from "next/document";
import type { ReactElement } from "react";

const Header = (): ReactElement => {
  let bg = "assets/images/backgroundImage.jpg";

  function Button() {
    return (
      <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-lg ">
        Learn more
      </button>
    );
  }

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
