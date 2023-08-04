import type { BrandIconValues } from "@/components/Footer";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export default interface BrandIcon {
  key: keyof BrandIconValues;
  label: string;
  icon: IconDefinition;
}
