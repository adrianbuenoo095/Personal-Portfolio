import { MenuItems} from "@/components/common/MenuItems";
import { scrollIntoView } from "@/lib/common/helpers/scrollIntoView";
import Link from "next/link";
import { ReactElement, useCallback, useState } from "react";
import Burger from "./common/Burger";

const NavBar = (): ReactElement => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = useCallback(() => {
        setOpenMenu((prevState) => {
            return !prevState;
        });
    }, []);

    return (
        <>
            <nav className={ openMenu ? 'md:hidden fixed top-5 right-0 bg-gray-dark text-white p-4' : 'my-11 hidden md:block' }>
                {MenuItems.map((link) => (
                    <div
                        key={link.name}
                        className="p-3 inline-flex text-black font-sans text-lg hover:text-pink"
                    >
                        <Link
                            href={link.path}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollIntoView(link.id);
                            }}
                        >
                            {link.name}
                        </Link>
                    </div>
                ))}
            </nav>
            <div
                className="md:hidden fixed top-3 right-4 text-white"
                onClick={handleClick}
            >
                <Burger />
            </div>
        </>
    );
};

export default NavBar;
