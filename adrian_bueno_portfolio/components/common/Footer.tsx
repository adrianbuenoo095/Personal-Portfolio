import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import { faInstagram, faLinkedin, faBehance } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const instagramLink = (
  <Link href="https://www.instagram.com/thepocman/">
    <FontAwesomeIcon icon={faInstagram} />
  </Link>

);

const linkedinLink = (
  <Link href="https://www.linkedin.com/in/adrian-bueno-08189b108/">
    <FontAwesomeIcon icon={faLinkedin} />
  </Link>
);

const behanceLink = (
  <Link href="https://www.behance.net/thepocman">
    <FontAwesomeIcon icon={faBehance} />
  </Link>
);

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" className="text-center">
        {instagramLink}
        {linkedinLink}
        {behanceLink}
        <p>&copy; The Pocman {currentYear}&nbsp;</p>
      </footer>
    </>
  );
};

export default Footer;
