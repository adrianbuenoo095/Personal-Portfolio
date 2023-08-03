import { useRouter } from "next/router";
import { ReactElement } from "react";

export let Button = (): ReactElement => {
  const router = useRouter();

  return (
    <button
      className="mt-6 px-4 py-2 bg-blue hover:bg-orange text-white font-bold rounded-lg "
      onClick={() => router.push("/posts/first-post")}
    >
      Learn more
    </button>
  );
};
