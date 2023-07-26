import { useRouter } from "next/router";

export let Button = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/posts/first-post")}
      className="mt-6 px-4 py-2 bg-blue hover:bg-orange text-white font-bold rounded-lg "
    >
      Learn more
    </button>
  );
};
