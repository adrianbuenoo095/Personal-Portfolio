import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import { brandIcons } from "../lib/brandIcons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface BrandIconValues {
  instagram: IconDefinition;
  linkedin: IconDefinition;
  behance: IconDefinition;
}


const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" className="text-center">
        {brandIcons.map((branIcon,key)=>(
          <FontAwesomeIcon key={key} className="pr-4 text-3xl text-blue" icon={branIcon} />
        )
      )}
        <p>&copy; The Pocman {currentYear}&nbsp;</p>
      </footer>
    </>
  );
};

export default Footer;
