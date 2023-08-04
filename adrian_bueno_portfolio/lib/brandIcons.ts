import type BrandIcon from "./brandIcon"; 
import {
    faInstagram,
    faLinkedin,
    faBehance,
  } from "@fortawesome/free-brands-svg-icons";

  export const brandIcons = new Array<BrandIcon>(
   {key: 'instagram', label: 'Instagram', icon:faInstagram},
   {key: 'linkedin', label: 'Linkedin', icon:faLinkedin},
   {key: 'behance', label: 'Behance', icon:faBehance},
  )