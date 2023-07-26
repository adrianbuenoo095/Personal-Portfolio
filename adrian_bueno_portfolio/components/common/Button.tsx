import { useRouter } from "next/router";
import { ReactElement, useCallback } from "react";

const clickHandle = () => {
  const router = useRouter();
  return router.push("/posts/first-post");
};

console.log(clickHandle);

export let Button = (): ReactElement => {
  return (
    <button
      onClick={clickHandle}
      className="mt-6 px-4 py-2 bg-blue hover:bg-orange text-white font-bold rounded-lg "
    >
      Learn more
    </button>
  );
};