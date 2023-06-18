import Head from "next/head";
import type { ReactElement } from "react";
import { useRouter } from "next/router";

let Button = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/posts/first-post")}
      className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg "
    >
      Learn more
    </button>
  );
};

let bgImage = "/images/backgroundImage.jpg";

const Header = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Adrian Bueno Portfolio</title>
      </Head>
      <div
        id="Header"
        className="flex flex-col justify-center items-center w-screen h-screen bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-4xl font-bold text-white">
          Hello, I am the Pocman
        </h1>
        <Button />
      </div>
    </>
  );
};

export default Header;
