import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram"

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" className="text-center">
        <FontAwesomeIcon icon={faInstagram} />
        <p>&copy; The Pocman {currentYear}&nbsp;</p>
      </footer>
    </>
  );
};

export default Footer;
