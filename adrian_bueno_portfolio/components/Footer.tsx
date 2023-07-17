import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import { faStickyNote, } from "@fortawesome/free-regular-svg-icons";

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" className="text-center">
        <FontAwesomeIcon icon={faStickyNote} />
        <p>&copy; The Pocman {currentYear}&nbsp;</p>
      </footer>
    </>
  );
};

export default Footer;
