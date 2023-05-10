import { useRouter } from "next/router";

export default function FirstPost() {
  const router = useRouter();
  return (
    <div className=" h-screen w-screen bg-red-500">
      <h1>First Post</h1>
      <button
        className="bg-lime-400"
        type="button"
        onClick={() => router.push("/posts/first")}
      >
        back
      </button>
    </div>
  );
}
