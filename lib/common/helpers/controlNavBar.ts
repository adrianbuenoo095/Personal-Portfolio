import { useCallback, useEffect, useState } from "react";

const useScrollControl = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);
    const controlNavBar = useCallback(() => {
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
            window.addEventListener("scroll", controlNavBar);

            return () => {
                window.removeEventListener("scroll", controlNavBar);
            };
        }
    }, [controlNavBar]);
}
export default useScrollControl;