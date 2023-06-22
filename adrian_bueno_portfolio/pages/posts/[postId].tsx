import { useRouter } from "next/router";

export default function FirstPost() {
  const router = useRouter();

  console.log(router.query.postId);

  return (
    <>
      <div className=" h-screen w-screen bg-pink">
        <h1>First Post</h1>
        <button
          className="bg-orange"
          type="button"
          onClick={() => router.back()}
        >
          Take me back
        </button>
      </div>
    </>
  );
}
