import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import {
  faInstagram,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" className="text-center">
        <FontAwesomeIcon className="pr-4" icon={faInstagram} />
        <FontAwesomeIcon className="pr-4" icon={faLinkedin} />
        <FontAwesomeIcon className="pr-4" icon={faBehance} />
        <p>&copy; The Pocman {currentYear}&nbsp;</p>
      </footer>
    </>
  );
};

export default Footer;
