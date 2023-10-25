// prettier-ignore
import { faBehance, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { ReactElement } from "react";

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
        className="p-3 text-lg "
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
        <div id="footer" className="text-center ">
            <div>
                <div>&copy; The Pocman {currentYear}&nbsp;</div>
                <div className="flex gap-3 justify-center py-1">
                    <span>{instagramLink}</span>
                    <span>{linkedinLink}</span>
                    <span>{behanceLink}</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
