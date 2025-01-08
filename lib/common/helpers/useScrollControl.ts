import { useCallback, useEffect, useState } from "react";

const useScrollControl = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (typeof window !== "undefined") {
            if (currentScrollY > lastScrollY) {
                setOpenMenu(false);
            }
            setLastScrollY(currentScrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [handleScroll]);

    return { openMenu, setOpenMenu };
};
export default useScrollControl;
