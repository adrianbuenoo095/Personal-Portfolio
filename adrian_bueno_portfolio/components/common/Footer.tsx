import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import {
  faInstagram,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const instagramLink = (
  <Link
    href="https://www.instagram.com/thepocman/"
    className="p-3 text-lg"
    target="_blank"
  >
    <FontAwesomeIcon icon={faInstagram} />
  </Link>
);

const linkedinLink = (
  <Link
    href="https://www.linkedin.com/in/adrian-bueno-08189b108/"
    className="p-3 text-lg"
    target="_blank"
  >
    <FontAwesomeIcon icon={faLinkedin} />
  </Link>
);

const behanceLink = (
  <Link
    href="https://www.behance.net/thepocman"
    className="p-3 text-lg"
    target="_blank"
  >
    <FontAwesomeIcon icon={faBehance} />
  </Link>
);

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" className="text-center">
        <div className="flex gap-3 justify-center">
          <span>
            {instagramLink}
            {linkedinLink}
            {behanceLink}
          </span>
        </div>
        <p>&copy; The Pocman {currentYear}&nbsp;</p>
      </footer>
    </>
  );
};

export default Footer;
