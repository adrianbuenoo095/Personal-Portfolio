import { useEffect, useMemo, useState } from "react";

const controlNavBar = useMemo(() => {
  const currentScrollY = window.scrollY;
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

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
