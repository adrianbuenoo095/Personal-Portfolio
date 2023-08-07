import type BrandIcon from "./BrandIcon";
import {
  faInstagram,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

export const brandIcons = new Array<BrandIcon>(
  { label: "Instagram", icon: faInstagram },
  { label: "Linkedin", icon: faLinkedin },
  { label: "Behance", icon: faBehance }
);
