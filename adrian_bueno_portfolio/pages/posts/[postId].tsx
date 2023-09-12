import Link from "next/link";
import { useRouter } from "next/router";

export default function FirstPost() {
    const router = useRouter();
    const id = router.query.postId;

    console.log(`hello ${id}`);

    if (id === null) {
        return <h1>Loading</h1>;
    }

    return (
        <>
            <div className=" h-screen w-screen bg-pink">
                <h1>First Post {id}</h1>
                <Link href="/">Take me back</Link>
            </div>
        </>
    );
}
