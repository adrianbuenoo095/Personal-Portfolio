import { useRouter } from "next/router";

export default function FirstPost() {
  const router = useRouter();
  console.log(router.query.postId)
  return (
    <div className=" h-screen w-screen bg-red-500">
      <h1>First Post</h1>
      <button
        className="bg-lime-400"
        type="button"
        onClick={() => router.push("/")}
      >
        back
      </button>
    </div>
  );
}
