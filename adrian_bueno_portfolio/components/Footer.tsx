import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import { brandIcons } from "../lib/brandIcons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" className="text-center">
        {brandIcons.map((brandIcon) => (
          <FontAwesomeIcon
            key={brandIcon.label}
            className="pr-4 text-3xl text-blue"
            icon={brandIcon}
          />
        ))}
        <p>&copy; The Pocman {currentYear}&nbsp;</p>
      </footer>
    </>
  );
};

export default Footer;
