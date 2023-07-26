import { useRouter } from "next/router";
import { useCallback } from "react";


const clickHandle = useCallback(()=>{
  const router = useRouter();
    
  router.push("/posts/first-post")
},[]);

export let Button = () => {
  return (
    <button
      onClick={clickHandle}
      className="mt-6 px-4 py-2 bg-blue hover:bg-orange text-white font-bold rounded-lg "
    >
      Learn more
    </button>
  );
};
