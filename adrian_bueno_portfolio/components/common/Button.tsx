import { useRouter } from "next/router";
import { ReactElement } from "react";

export let Button = (): ReactElement => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/posts/first-post");
  };

  return (
    <button
      className="mt-6 px-4 py-2 bg-blue hover:bg-orange text-white font-bold rounded-lg "
      onClick={handleClick}
    >
      Learn more
    </button>
  );
};
